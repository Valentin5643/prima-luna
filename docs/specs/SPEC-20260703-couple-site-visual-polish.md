# SPEC-20260703-couple-site-visual-polish

## Executive Summary
**Feature/Fix**: Premium visual polish and responsive refinement for the Vali & Daria one-month gift site.
**Impact**: Makes the existing romantic gift site feel more elegant, modern, coherent, and reliable across desktop, tablet, and small mobile screens.
**Effort**: 6-8 hours.
**Risk**: Medium, because the site is static and small, but the private page has many sections, fixed controls, image-heavy layouts, and duplicated public/private CSS.
**Dependencies**: Existing local images, static HTML/CSS/JS, browser verification through the Codex in-app browser.

## Scope Control
**Smallest useful scope**: Refine the existing static pages visually and responsively without changing the core idea, content structure, or personal tone.

**Non-goals**:
- Replace the static site with a framework, because the current no-build setup is sufficient.
- Rewrite all copy, because the personal voice is part of the gift.
- Add backend, upload service, authentication, or deployment changes, because the current interaction model uses local browser storage.
- Replace the photo set, because the existing images are the personal source material.

**Split decision**:
- Modules touched: root redirect, private Daria site, public site.
- Split into multiple SPECs? No.
- Reason: These are related static entry points for one user-facing experience, and the shared design issues must be fixed consistently.

## Existing Pattern and Reuse Evidence
| Existing file/pattern | Responsibility | How this SPEC will reuse it |
|---|---|---|
| `index.html` | Root redirect to the private Daria variant | Keep as redirect, only allow minor copy/encoding polish if needed |
| `sites/daria/index.html` | Full private gift page content and section order | Preserve section concept and copy, adjust structure only where needed for navigation and responsive layout |
| `sites/daria/styles.css` | Main private visual system, responsive grids, cards, fixed actions | Extend the existing CSS variables, card radius, warm palette, image grids, and media queries |
| `sites/daria/script.js` | Loading screen, smooth scroll, modals, accordion, checklist, memory creation | Reuse existing interactions, only adjust behavior needed for navigation/floating action polish |
| `sites/public/index.html` | Short public-safe page | Keep same reduced content model while visually aligning it with the private variant |
| `sites/public/styles.css` | Public variant visual system | Sync/refine from private CSS patterns without adding a second design language |
| `sites/public/script.js` | Public loading, smooth scroll, accordion, checklist | Keep minimal, only adjust if markup changes require it |

## No-Second-Pattern Check
**Existing responsibility owner**: Static HTML/CSS/JS under `sites/daria/` and `sites/public/`.
**Would this create a competing pattern?**: No.
**Decision**: Extend existing CSS and JS patterns. Do not introduce a framework, build tool, component library, or alternate asset pipeline.

## File Boundary Contract
**Allowed files to create/modify**:
- `index.html` - root redirect polish only if needed for encoding/copy consistency.
- `sites/daria/index.html` - private page structure, nav labels, section wrappers, accessibility hooks.
- `sites/daria/styles.css` - main visual polish, responsive fixes, spacing, navigation, card/image treatment.
- `sites/daria/script.js` - interaction polish for nav, modal/floating controls, and scroll behavior only.
- `sites/public/index.html` - public page structure and copy polish only where required by responsive/design fixes.
- `sites/public/styles.css` - public visual polish and responsive alignment.
- `sites/public/script.js` - interaction polish only if public markup changes require it.
- `EXPLICATIE_COMPLETA_SITE.md` - update only if the implementation materially changes described behavior.

**Forbidden files for engineer**:
- `sites/daria/imagini/*` - do not replace or rename personal images.
- `sites/public/imagini/*` - do not replace or rename public images.
- New framework/build config files such as `package.json`, `vite.config.*`, `src/*` - out of scope.
- Any file outside the allowed list - requires stopping and reporting.

**Rule**: If engineer needs a file not listed above, engineer must stop and report instead of modifying it.

## Product Requirements
### Functional Requirements
- **FR-001**:
  - **Given**: A visitor opens the private Daria page on desktop.
  - **When**: The visitor enters the site and scrolls through all sections.
  - **Then**: Navigation, hero, cards, photos, modals, and floating controls look intentional and do not cover important content.
  - **Acceptance**: Browser screenshots at desktop width show no clipped nav item, no broken grid, and no fixed control obscuring primary text/card content.

- **FR-002**:
  - **Given**: A visitor opens the private Daria page on 320-390px wide mobile screens.
  - **When**: The visitor scrolls through hero, story, memories, album, jokes, unlocked, and plans.
  - **Then**: Text remains readable, images are framed intentionally, actions do not overlap content, and navigation is usable.
  - **Acceptance**: Browser checks at 320x740 and 390x844 show no horizontal overflow, no overlapped text, and no bottom controls covering readable content.

- **FR-003**:
  - **Given**: A visitor opens the public variant.
  - **When**: The visitor views it on desktop and mobile.
  - **Then**: It feels like the same refined site family, while staying shorter and public-safe.
  - **Acceptance**: Browser checks confirm matching design polish, readable hero sizing, and no layout regressions.

- **FR-004**:
  - **Given**: A visitor uses modals, accordion cards, checklist, and memory creation.
  - **When**: The visitor clicks, closes, checks, or submits.
  - **Then**: Existing interactions still work and remain accessible by keyboard/mouse/touch.
  - **Acceptance**: Manual browser interaction check passes for loading screen, anchor navigation, accordion, modals, checklist, and memory form.

### User Stories
- **US-001**: As Daria, I want the site to feel romantic and premium, so that the gift feels intentional rather than unfinished.
  - Acceptance criteria:
    1. The first screen has a polished composition on desktop and mobile.
    2. The tone remains personal and warm.

- **US-002**: As a mobile visitor, I want to read and browse without fighting layout issues, so that the site feels made for my phone.
  - Acceptance criteria:
    1. Mobile navigation is clear and reachable.
    2. Fixed actions do not hide text, cards, or checkboxes.

## Technical Design
### Architecture Flow
The site remains static. HTML owns content and section order, CSS owns visual system and responsive behavior, and JavaScript owns existing client-only interactions. Implementation should refine the current design system instead of replacing it.

### Layer Responsibilities
- **UI**: HTML section structure, navigation affordances, button placement, card/image layout, semantic accessibility.
- **State/Interaction**: Existing JavaScript for loading, smooth scroll, modals, accordion, checklist, and localStorage memories.
- **Data**: No backend or data contract changes.

### Security, Privacy, and Performance
- Security: No new external scripts or trackers.
- Privacy: Do not expose private screenshot content in the public variant.
- Performance: Keep images local, avoid heavy animation, preserve `loading="lazy"`, and avoid adding large generated assets.

## Implementation Plan

Tasks must be sequential, atomic, and independently verifiable.

### Visual System and Layout
- [ ] **VIS-001**: Refine shared design tokens, typography scale, spacing rhythm, section spacing, and surface treatments. [Estimate: 1.5hr]
  - **Files**: `sites/daria/styles.css`, `sites/public/styles.css`
  - **Details**: Keep the warm romantic palette but make it less flat: improve contrast, text hierarchy, card depth, borders, image framing, and section rhythm. Avoid a one-note beige/pink look by balancing rose, green, paper, and neutral tones.
  - **Reuse**: Existing CSS variables, serif/sans pairing, 8px radius card system, current media query structure.
  - **Boundary**: Do not add a CSS framework.
  - **Verification**: Browser screenshot check at desktop and mobile for hero, story, memories, album, and public hero.

- [ ] **VIS-002**: Improve hero composition on private and public pages. [Estimate: 1hr]
  - **Files**: `sites/daria/index.html`, `sites/daria/styles.css`, `sites/public/index.html`, `sites/public/styles.css`
  - **Details**: Tune hero sizing so private title and public title do not dominate small screens. Improve image aspect ratios/object-position so faces are not awkwardly cropped. Keep first-viewport emotional impact.
  - **Reuse**: Existing `.hero`, `.hero-copy`, `.hero-photo`, `.primary-button`.
  - **Boundary**: Do not replace hero copy or images except for small label/copy polish if required by layout.
  - **Verification**: Browser screenshots at 1366x768, 390x844, and 320x740.

### Navigation and Mobile UX
- [ ] **NAV-001**: Make navigation usable across the full page. [Estimate: 1hr]
  - **Files**: `sites/daria/index.html`, `sites/daria/styles.css`, `sites/daria/script.js`, `sites/public/index.html`, `sites/public/styles.css`, `sites/public/script.js`
  - **Details**: Fix the current private nav where too many links feel clipped on desktop and the sticky nav disappears after the header. Choose an existing-compatible pattern such as a compact sticky nav with fewer top-level links, a mobile horizontal nav with clearer affordance, or a small menu toggle using existing JS style.
  - **Reuse**: Existing `.top-nav`, `.nav-links`, anchor smooth-scroll handler.
  - **Boundary**: Do not add router/navigation libraries.
  - **Verification**: Confirm all nav targets work on private and public pages; confirm nav is usable at 320px, 390px, tablet, and desktop.

- [ ] **NAV-002**: Fix fixed action overlap. [Estimate: 0.75hr]
  - **Files**: `sites/daria/styles.css`, `sites/daria/script.js`
  - **Details**: Prevent `.memory-fab` and `.secret-heart` from covering content on mobile and desktop. Add bottom safe spacing where needed, improve reveal thresholds, or convert mobile controls into a less intrusive stacked action area.
  - **Reuse**: Existing `setupFloatingMemoryButton()` and fixed button classes.
  - **Boundary**: Do not remove the secret heart or memory creation feature.
  - **Verification**: Scroll through `#prima-luna`, `#memorii`, and `#planuri` at 320x740 and 390x844; controls must not cover readable text or active form/checklist controls.

### Section and Component Polish
- [ ] **CMP-001**: Polish story chapters, memory cards, album cards, timeline, quotes, lists, jokes, unlocked, and checklist sections. [Estimate: 2hr]
  - **Files**: `sites/daria/index.html`, `sites/daria/styles.css`, `sites/public/index.html`, `sites/public/styles.css`
  - **Details**: Ensure consistent spacing, card heights where needed, readable headings, image object fit, and balanced grids. Avoid nested-card look. Keep content emotional but visually calmer and more premium.
  - **Reuse**: Existing `.chapter`, `.memory-screenshot-card`, `.album-grid`, `.photo-card`, `.joke-card`, `.quote-grid`, `.reason-list`, `.care-list`, `.unlock-grid`, `.checklist`.
  - **Boundary**: Do not delete major content sections from the private page.
  - **Verification**: Manual visual pass through every section on desktop and mobile.

- [ ] **CMP-002**: Improve modal and form polish. [Estimate: 0.75hr]
  - **Files**: `sites/daria/styles.css`, `sites/daria/script.js`
  - **Details**: Ensure modal sizing, close button placement, form controls, and focus behavior are comfortable on small phones. Preserve Escape and backdrop close behavior.
  - **Reuse**: Existing `.modal`, `.modal-backdrop`, `.memory-form`, `openModal()`, `closeModal()`.
  - **Boundary**: Do not change localStorage schema unless absolutely required; if changed, stop and report.
  - **Verification**: Open/close both modals on desktop and mobile; submit a memory with text only and with image if feasible.

### Consistency and Documentation
- [ ] **DOC-001**: Update the explanation document if behavior or layout structure changes materially. [Estimate: 0.5hr]
  - **Files**: `EXPLICATIE_COMPLETA_SITE.md`
  - **Details**: Reflect any changed navigation behavior, floating action behavior, or major responsive layout changes.
  - **Reuse**: Existing document structure.
  - **Boundary**: Do not rewrite the whole document unless necessary.
  - **Verification**: Read changed sections for accuracy.

## Verification Plan
**Targeted checks**:
- Start a static server from repo root:
```bash
python -m http.server 5177 --bind 127.0.0.1
```
- Open and inspect:
```text
http://127.0.0.1:5177/
http://127.0.0.1:5177/sites/daria/
http://127.0.0.1:5177/sites/public/
```
- Browser viewport checks:
```text
1366x768
1024x768
768x1024
390x844
320x740
```
- Required interaction checks: loading entry button, anchor navigation, accordion cards, checklist persistence, secret modal, memory modal, memory creation, Escape/backdrop close.
- Required layout checks: no horizontal overflow, no clipped navigation labels, no text/image/button/card overlap, no fixed controls covering primary content, no broken image.

**Full verification command**:
```bash
python -m http.server 5177 --bind 127.0.0.1
```

**Rule**: Engineer cannot log a layer complete until the static server is running and browser verification passes for both private and public variants.

## Final Review Gate
Before `ENGINEER_COMPLETE`, engineer must perform a quality review of the final diff.

Required review output:
- Go/No-go decision
- Blocking issues
- Pattern health
- Boundary violations
- Verification evidence with tested URLs and viewport sizes

## Docs and ADR Updates
- module-map update needed: No - no module map exists and no architecture boundary changes are planned.
- architecture.md update needed: No - no architecture doc exists and no architecture change is planned.
- ADR needed: No - no new framework, storage model, or architectural decision is introduced.

## Success Metrics
- Private and public pages look cohesive and intentional on desktop, tablet, and small phones.
- No horizontal overflow at 320px or wider.
- Navigation remains clear and usable across the page.
- Floating controls no longer obscure readable content or active controls.
- Existing interactions still work after visual changes.
- The romantic one-month gift concept remains intact.

## Timeline
**Total effort**: 6-8 hours.
**Critical path**: VIS-001 -> VIS-002 -> NAV-001 -> NAV-002 -> CMP-001 -> CMP-002 -> DOC-001 -> full browser verification -> final review.

### Layer Completed: Visual System and Layout
- **Status**: Completed
- **Timestamp**: 2026-07-03 16:23:37
- **Tasks Completed**:
  - `VIS-001`: Refine shared design tokens, typography scale, spacing rhythm, section spacing, and surface treatments
  - `VIS-002`: Improve hero composition on private and public pages
- **Files Modified**:
  - `sites/daria/index.html` - added private hero class and bumped stylesheet cache version
  - `sites/daria/styles.css` - refined tokens, hero scale, card surfaces, image framing, and section scroll offsets
  - `sites/public/index.html` - added public hero class and stylesheet cache version
  - `sites/public/styles.css` - aligned public tokens, backgrounds, nav surface, hero scale, image framing, and cards with private styling
- **Files Not Modified**:
  - `sites/daria/script.js` - no interaction change needed for visual layer
  - `sites/public/script.js` - no interaction change needed for visual layer
  - image folders - existing personal images were reused without renaming or replacement
- **Reuse Evidence**:
  - `sites/daria/styles.css/.hero` - existing grid and photo structure extended with tuned sizing and object positioning
  - `sites/daria/styles.css` CSS variables - existing warm palette extended with mist/lift-shadow tokens instead of a new visual system
  - `sites/public/styles.css` - public variant synced to the same token/card/nav pattern
- **Diff Narrative**:
  - The static page architecture stayed unchanged; only existing HTML classes and CSS rules were refined.
  - The public hero received a smaller scale than the private hero so the long public headline remains composed on desktop and mobile.
  - No framework, asset pipeline, or content section replacement was introduced.
- **Verification Result**:
  - Command: `python -m http.server 5177 --bind 127.0.0.1`
  - Status: Passed
  - Summary: Static server returned HTTP 200; in-app browser checks at 1366x768, 390x844, and 320x740 for private and public pages showed no horizontal overflow. Hero measurements confirmed the public image is visible in the first viewport at 320px after cache-version bump.

### Layer Completed: Navigation and Mobile UX
- **Status**: Completed
- **Timestamp**: 2026-07-03 16:26:55
- **Tasks Completed**:
  - `NAV-001`: Make navigation usable across the full page
  - `NAV-002`: Fix fixed action overlap
- **Files Modified**:
  - `sites/daria/index.html` - reduced private top-level navigation to core destinations, added cache version to script, and wrapped the memory FAB label for compact mobile styling
  - `sites/daria/styles.css` - converted the existing nav to a page-fixed pattern, added top shell offset, and changed mobile floating controls to compact circular buttons
  - `sites/daria/script.js` - extended the existing floating-control update logic to hide actions over unlocked/plans/form protected zones
  - `sites/public/index.html` - added script cache version
  - `sites/public/styles.css` - matched the page-fixed nav pattern and shell offset
  - `sites/public/script.js` - not changed; existing anchor behavior remained compatible
- **Files Not Modified**:
  - image folders - untouched
  - framework/build files - none added
- **Reuse Evidence**:
  - `.top-nav` and `.nav-links` - reused existing nav markup/classes, changing positioning and link count only
  - `setupFloatingMemoryButton()` - reused the existing reveal function instead of adding a second floating-control system
  - Existing smooth-scroll anchor handler - preserved for private and public navigation
- **Diff Narrative**:
  - Navigation now remains fixed for the entire page rather than being constrained by the header.
  - Private nav is intentionally shorter to avoid desktop clipping and make mobile horizontal scrolling clearer.
  - Mobile floating actions keep their features but become compact and hide around checklist-heavy sections.
- **Verification Result**:
  - Command: `python -m http.server 5177 --bind 127.0.0.1`
  - Status: Passed
  - Summary: In-app browser checks at 1366x768, 1024x768, 768x1024, 390x844, and 320x740 showed fixed nav top at 0, visible nav after mid-page scroll, no horizontal overflow, and no clipped visible nav labels. Private nav target clicks for `#acasa`, `#prima-luna`, `#memorii`, `#album`, `#inside-jokes`, and `#planuri` landed with section top at the scroll-margin below the nav. Mobile controls stayed visible on reading sections and hid on `#unlocked` and `#planuri`.

### Layer Completed: Section and Component Polish
- **Status**: Completed
- **Timestamp**: 2026-07-03 16:28:30
- **Tasks Completed**:
  - `CMP-001`: Polish story chapters, memory cards, album cards, timeline, quotes, lists, jokes, unlocked, and checklist sections
  - `CMP-002`: Improve modal and form polish
- **Files Modified**:
  - `sites/daria/styles.css` - added consistent card internals, hover/focus polish, balanced text wrapping, list/checklist treatments, and mobile modal/form sizing
  - `sites/public/styles.css` - mirrored applicable public card, checklist, quote, modal, and form polish
  - `sites/daria/index.html` - previously adjusted memory FAB label wrapper reused by this layer
  - `sites/public/index.html` - no additional markup changes needed in this layer
  - `sites/daria/script.js` - existing modal behavior preserved; no storage schema changes
- **Files Not Modified**:
  - image folders - untouched
  - localStorage schema - unchanged
- **Reuse Evidence**:
  - Existing card selectors (`.chapter`, `.photo-card`, `.memory-screenshot-card`, `.joke-card`) were extended rather than replaced
  - Existing modal selectors (`.modal`, `.modal-backdrop`, `.memory-form`) were refined for sizing and focus styling
  - Existing accordion/checklist JavaScript remained compatible
- **Diff Narrative**:
  - Component polish stayed in the CSS layer and preserved content order and features.
  - Repeated card/list surfaces now share clearer depth, hover states, and mobile-safe wrapping.
  - Modal behavior was not rewritten; styling was improved for small viewport comfort.
- **Verification Result**:
  - Command: `python -m http.server 5177 --bind 127.0.0.1`
  - Status: Passed
  - Summary: In-app browser section checks at 1366x768, 390x844, and 320x740 for private and public variants showed no horizontal overflow and no out-of-viewport cards in story, memory, album, jokes, quotes, unlocked, or checklist sections. Secret and memory modals opened on 390x844 with body scroll lock and viewport-contained modal boxes.

### Layer Completed: Consistency and Documentation
- **Status**: Completed
- **Timestamp**: 2026-07-03 16:29:51
- **Tasks Completed**:
  - `DOC-001`: Update the explanation document if behavior or layout structure changes materially
- **Files Modified**:
  - `EXPLICATIE_COMPLETA_SITE.md` - updated navigation, floating button, scroll-margin, CSS token, and responsive behavior notes
- **Files Not Modified**:
  - implementation files - no further code changes were needed for this documentation layer
  - image folders - untouched
- **Reuse Evidence**:
  - Existing explanation sections (`Navigație`, `Butoane plutitoare`, `Scroll intern`, `Stil vizual și layout`) were updated in place
- **Diff Narrative**:
  - Documentation now matches the fixed navigation, reduced private nav links, compact mobile floating actions, and new visual tokens.
  - The document structure was preserved; unrelated sections were not rewritten.
- **Verification Result**:
  - Command: `python -m http.server 5177 --bind 127.0.0.1`
  - Status: Passed
  - Summary: Changed documentation lines were searched and confirmed; private and public URLs returned HTTP 200 after the doc update.
