# Explicație completă site Vali & Daria

Acest document descrie complet site-ul din `B:\UnSiteMic`, pe baza fișierelor active existente acum. Conținutul a fost verificat și prin MCP Node, prin extragerea textului vizibil din HTML și a funcțiilor active din JavaScript.

## Structura generală

Site-ul are trei intrări importante:

- `index.html` din rădăcina proiectului este doar o pagină de redirecționare către varianta pentru Daria.
- `sites/daria/index.html` este site-ul principal, personal, pentru Daria.
- `sites/public/index.html` este varianta publică, mai scurtă și mai curată.

Fiecare variantă are propriile fișiere:

- `sites/daria/index.html`
- `sites/daria/styles.css`
- `sites/daria/script.js`
- `sites/daria/imagini/`
- `sites/public/index.html`
- `sites/public/styles.css`
- `sites/public/script.js`
- `sites/public/imagini/`

## Root redirect

Fișierul `B:\UnSiteMic\index.html` nu este site-ul propriu-zis. El trimite automat către `sites/daria/`.

Text vizibil în root:

- `Vali & Daria`
- `Se deschide varianta pentru Daria...`
- `Deschide manual`
- `Varianta publică`

Rolul lui este să evite deschiderea accidentală a unei variante vechi. Dacă intrarea se face pe folderul principal, pagina ajunge la varianta pentru Daria.

## Varianta Daria

Varianta Daria este site-ul complet. Are ecran de intrare, navigație, hero, povestea primei luni, timeline, memorii cu screenshot-uri, album, inside jokes, citate, detalii personale, lucruri deblocate, planuri, amintiri noi, mesaj final, modal secret și formular pentru adăugat amintiri.

### Browser / meta

Text tehnic din document:

- Titlu tab: `Vali & Daria - puțin câte puțin`
- Descriere meta: `Un site mic pentru prima lună a lui Vali și Daria.`
- CSS încărcat: `styles.css?v=20260703-aesthetic`, ca browserul să ia varianta vizuală actualizată și să nu păstreze stylesheet-ul vechi din cache.

### Ecran de început

Ecranul de început apare primul. Site-ul principal este ascuns până se apasă butonul de intrare.

Text vizibil:

- `prima lună`
- `Vali & Daria`
- `06.06.2026 ❤️ 06.07.2026`
- `Se încarcă luna noastră preferată de până acum...`
- `Intră, șefa 😌❤️`

### Navigație

Navigația este fixată sus pe toată pagina și trimite către secțiunile principale. Lista privată a fost redusă la destinațiile de bază ca să rămână lizibilă pe desktop și ușor de derulat pe mobil.

Text vizibil:

- `V & D`
- `Acasă`
- `Prima lună`
- `Memorii`
- `Album`
- `Glume`
- `Planuri`

### Hero / Acasă

Hero-ul este prima secțiune după intrare. Are imaginea principală și textul de deschidere.

Text vizibil:

- `Vali & Daria - puțin câte puțin`
- `Bine ai venit acasă.`
- `Prima lună. Restul îl scriem noi.`
- `Nu știu exact când s-a întâmplat. Poate între glume, poze, apeluri, certuri mici și împăcări dulci.`
- `Dar la un moment dat, tu ai început să nu mai fii doar o persoană. Ai început să fii locul în care mă liniștesc.`
- `Vezi prima lună`

Imagine:

- `imagini/WhatsApp Image 2026-07-02 at 21.44.04 (4).jpeg`
- Text alternativ: `Vali și Daria într-un moment liniștit împreună`

### Prima lună

Secțiunea `Prima lună` este povestea principală, împărțită în patru capitole.

Text de secțiune:

- `jurnal`
- `Prima lună`
- `Nu știu exact cum se scrie asta fără să sune prea frumos. Așa că rămâne simplu: câteva bucăți din luna în care ai început să însemni acasă.`

#### Capitol 01

Text vizibil:

- `01`
- `Când încă nu știam`
- `La început nu știam unde o să ajungem. Știam doar că îmi plăcea să vorbesc cu tine. Și că, fără să-mi dau seama, începeam să aștept mesajele tale mai mult decât era normal.`
- `Cred că aici s-a dus liniștea mea. Sau măcar a început să se ducă puțin, dar frumos.`

Imagine:

- `imagini/WhatsApp Image 2026-07-02 at 21.44.04 (1).jpeg`
- Text alternativ: `Selfie jucăuș de la începutul poveștii`

Această imagine are clasa `image-contain`, deci se afișează complet, fără crop.

#### Capitol 02

Text vizibil:

- `02`
- `Al doilea date`
- `Aici încă încercam să par normal. Nu știu cât mi-a ieșit, dar măcar poza a rămas.`
- `Moment salvat ✅`

Imagine:

- `imagini/WhatsApp Image 2026-07-02 at 21.44.03.jpeg`
- Text alternativ: `Poză de la al doilea date cu ochelarii`

Butonul `Moment salvat ✅` declanșează animația cu inimioare.

#### Capitol 03

Text vizibil:

- `03`
- `Parcul - când suntem fericiți și când suntem supărați`
- `Înainte și după invazia foișorului`
- `Aici eram liniștiți. Parcul, noi doi și impresia falsă că totul merge conform planului.`
- `Aici încă eram fericiți. După a apărut familia aia și s-a dus tot planul. Dar măcar eram cu tine.`

Imagini:

- `imagini/WhatsApp Image 2026-07-02 at 21.44.04 (2).jpeg`
- Text alternativ: `Moment relaxat în parc`
- `imagini/WhatsApp Image 2026-07-02 at 21.44.03 (1).jpeg`
- Text alternativ: `Selfie serios și amuzant în parc`

#### Capitol 04

Text vizibil:

- `04`
- `Ultimul apel de seară`
- `Seara asta a fost una dintre alea pe care nu vreau să le uit. Nu pentru că s-a întâmplat ceva uriaș. Ci pentru că ai fost tu acolo.`

Imagine:

- `imagini/WhatsApp Image 2026-07-02 at 21.44.04.jpeg`
- Text alternativ: `Moment de seară împreună`

### Timeline

Timeline-ul prezintă momentele în ordine.

Text de secțiune:

- `istoria noastră mică`
- `Timeline ❤️`
- `Nu e tot. Doar primele lucruri pe care nu vreau să le pierdem.`

Elemente timeline:

- `06 iunie`
- `Prima lună a început fără să știm exact ce o să fie.`
- `Primul date`
- `Eu încercam să par normal. Nu știu cât mi-a ieșit.`
- `Prima poză`
- `Moment salvat, chiar dacă noi eram încă în faza de “parcă da, parcă nu știu”.`
- `Prima ceartă`
- `Nu ne-a plăcut deloc. Dar cred că atunci am învățat că niciunul nu pleacă atunci când e greu.`
- `Prima împăcare`
- `Acolo am simțit că nu fugim când e greu.`
- `Parcul`
- `Noi doi, foișorul și familia aia care ne-a stricat tot.`
- `Primul “Cred în noi”`
- `Cred că aici m-am liniștit cel mai tare.`
- `Prima lună`
- `Și uite-ne aici, șefa. Încă băiat cuminte. Cât de cât.`

### Memorii / screenshot-uri

Această secțiune transformă screenshot-urile importante în carduri de memorie. Fiecare card are titlu, imagine și două bucăți de text: ce s-a simțit atunci și ce înseamnă acum.

Text de secțiune:

- `capturi care au rămas`
- `Nu e doar prima pagină`
- `Am pus doar mesajele care au contat. Nu tot chat-ul, că nu suntem chiar așa dramatici. Doar bucăți mici din noi.`

#### Card: Primul “Cred în noi”

Text vizibil:

- `❤️ Primul “Cred în noi”`
- `Ce am simțit atunci`
- `Cred că aici m-am liniștit cel mai tare.`
- `Ce înseamnă acum`
- `Încă e unul dintre mesajele mele preferate. Serios. 🥹❤️`

Imagine:

- `imagini/WhatsApp Image 2026-07-03 at 10.21.58.jpeg`
- Text alternativ: `Screenshot cu mesajul CRED ÎN NOI`

#### Card: Acasă

Text vizibil:

- `❤️ Acasă`
- `Ce am simțit atunci`
- `Cred că atunci ai făcut un cuvânt obișnuit să însemne foarte mult pentru mine.`
- `Ce înseamnă acum`
- `Nu știu dacă îți dai seama cât a rămas cu mine.`

Imagine:

- `imagini/WhatsApp Image 2026-07-03 at 10.21.59 (1).jpeg`
- Text alternativ: `Screenshot cu mesajul despre liniște și acasă`

#### Card: Împreună devenim...

Text vizibil:

- `❤️ Împreună devenim...`
- `Ce am simțit atunci`
- `Mi-am dat seama că vezi relația asta cam cum o văd și eu.`
- `Ce înseamnă acum`
- `Cred în noi. Da, știu. O zic și eu acum. ❤️`

Imagine:

- `imagini/WhatsApp Image 2026-07-03 at 10.21.58 (3).jpeg`
- Text alternativ: `Screenshot cu mesajul împreună devenim cea mai bună versiune`

#### Card: Cele 10

Text vizibil:

- `😂 Cele 10`
- `Ce am simțit atunci`
- `Am râs, normal. Și poate am fost și puțin mândru că îți pasă.`
- `Ce înseamnă acum`
- `Spoiler: tot pe tine te-am ales.`

Imagine:

- `imagini/WhatsApp Image 2026-07-03 at 10.21.58 (4).jpeg`
- Text alternativ: `Screenshot cu gluma despre celelalte 10`

#### Card: Șefa

Text vizibil:

- `👑 Șefa`
- `Ce am simțit atunci`
- `Nu mai știu când ai fost promovată.`
- `Ce înseamnă acum`
- `Aparent contractul meu încă e valabil.`

Imagine:

- `imagini/WhatsApp Image 2026-07-03 at 10.21.59.jpeg`
- Text alternativ: `Screenshot cu mesajul Șefă`

#### Card: Simpatic

Text vizibil:

- `🥹 Simpatic`
- `Ce am simțit atunci`
- `Cred că n-ai idee cât am zâmbit când am citit asta.`
- `Ce înseamnă acum`
- `Cred că am citit mesajul ăla de prea multe ori.`

Imagine:

- `imagini/WhatsApp Image 2026-07-03 at 10.21.58 (2).jpeg`
- Text alternativ: `Screenshot cu mesajul simpatic afectuos atrăgător`

#### Card: Pisica

Text vizibil:

- `🐱 Pisica`
- `Ce am simțit atunci`
- `Am râs pentru că descrierea era prea bună.`
- `Ce înseamnă acum`
- `Încă susțin că seamănă puțin cu stăpâna ei.`

Imagine:

- `imagini/WhatsApp Image 2026-07-03 at 10.21.58 (1).jpeg`
- Text alternativ: `Screenshot cu pisica a venit să mă iubească`

### Album

Albumul grupează pozele în carduri.

Text de secțiune:

- `album`
- `Pozele noastre pe categorii`

Carduri:

- `Noi cuminți`
- `Rar, dar se întâmplă.`
- Imagine: `imagini/WhatsApp Image 2026-07-02 at 21.44.03 (2).jpeg`
- Text alternativ: `Poză calmă împreună în parc`

- `Noi foarte serioși`
- `Dovada că maturitatea ne evită cu succes.`
- Imagine: `imagini/WhatsApp Image 2026-07-02 at 21.44.04 (3).jpeg`
- Text alternativ: `Selfie foarte serios și amuzant`

- `Moment de film`
- `A ieșit chiar bine.`
- Imagine: `imagini/WhatsApp Image 2026-07-02 at 21.44.04.jpeg`
- Text alternativ: `Poză cu atmosferă de film`

- `Spatele meu...`
- `Spatele meu nu e complet de acord. Inima mea da.`
- Imagine: `imagini/WhatsApp Image 2026-07-02 at 21.44.03 (3).jpeg`
- Text alternativ: `Poză jucăușă în care el o ține în brațe`

### Inside jokes

Inside jokes este o secțiune de tip accordion. Fiecare card este un buton. Inițial se vede doar titlul. La click se deschide textul cardului, iar celelalte se închid.

Text de secțiune:

- `doar noi`
- `Inside jokes`

Carduri:

- `Șefa 👑`
- `Nu știu când ai devenit șefă. Nu știu cine a semnat contractul. Dar aparent eu sunt angajat pe perioadă nedeterminată.`

- `Băiat cuminte`
- `Aparent acesta este rolul meu oficial. Încerc să-l onorez. Cu mici abateri, evident.`

- `Cele 10`
- `Dacă trebuia să aleg dintre 10, tot la tine ajungeam.`

- `Acasă`
- `La început era doar un cuvânt. Acum are vocea ta, ochii tăi și felul tău de a mă liniști.`

- `Cred în noi`
- `Asta nu a fost doar o replică. A fost unul dintre momentele în care mi-am dat seama că și tu vezi ceva aici.`

- `Mai sensibil cu mine`
- `Recunosc. Îmi place când îmi ceri asta. Cred că atunci am înțeles că ai început să ai încredere în mine.`

- `Pisica`
- `Întâi mă ceartă. După vine să mă iubească. Nu spun că seamănă cu cineva. Dar nici nu neg.`

- `Familia din foișor`
- `Aici am învățat o lecție importantă: locurile publice sunt publice. Din păcate.`

- `Obregia 🏥`
- `Încă nu mi-ai păstrat loc. Dar dacă ajung acolo, măcar să fie din cauza ta.`

- `Nota mea`
- `Momentan sunt la nota 6. Nu perfect, dar în progres. Mai trag tare, că premiul merită.`

### Citate

Text de secțiune:

- `cuvinte`
- `Lucruri pe care le-ai spus și care mi-au rămas în cap`

Citate:

- `Cred în noi. ❤️`
- `Îmi place să aud asta.`
- `Mă simt ca un copil.`
- `Împreună devenim cea mai bună versiune a noastră. ❤️`

Text final de secțiune:

- `Nu știu dacă îți dai seama cât au rămas cu mine. Parcă de fiecare dată când le recitesc mă liniștesc puțin.`

### Detalii / lucruri observate

Text de secțiune:

- `simplu`
- `Lucruri pe care nici nu cred că le observi`

Listă:

- `Cum mă iei peste picior când sunt prea încrezător.`
- `Cum îmi spui “șefa” și după râzi.`
- `Cum mă liniștești fără să încerci.`
- `Cum lângă tine nu simt că trebuie să demonstrez nimic.`
- `Cum îți luminează fața când vorbești despre Kineto.`
- `Cum îmi trimiți poze cu pisica.`
- `Cum îmi spui “cred în noi” de parcă e cel mai normal lucru din lume.`
- `Cum faci ca și o plimbare prin parc să pară suficientă.`
- `Cum mă faci să uit de toate prostiile din cap.`

### Grija ta

Secțiunea adaugă explicit momentele în care ea a avut grijă de el, chiar și fără să facă ceva mare sau evident.

Text de secțiune:

- `grija ta`
- `Lucruri pe care probabil nu ți-ai dat seama că le-ai făcut`

Listă:

- `Când mi-ai spus „Cred în noi” și m-ai liniștit fără să faci mare lucru.`
- `Când ai fost lângă mine după bac.`
- `Când ai zis că împreună devenim cea mai bună versiune a noastră.`
- `Când ai făcut cuvântul „acasă” să însemne altceva.`
- `Când ai avut grijă de mine în felul tău, chiar și când poate nu ți-ai dat seama.`

### Things unlocked

Secțiunea arată ca o listă de obiective deblocate într-un joc. Checkbox-urile sunt dezactivate, deci au rol vizual, nu interactiv.

Text de secțiune:

- `ca într-un joc`
- `Things unlocked ❤️`
- `Nu știu cine ține scorul, dar eu zic că stăm bine. Nota 6, dar în progres.`

Deblocate:

- `primul pupic`
- `prima poză`
- `primul picnic`
- `primul “șefa”`
- `primul “băiat cuminte”`
- `primul “cred în noi”`

Nedeblocate:

- `primul Aqua Park`
- `primul răsărit`
- `primul Crăciun`
- `prima excursie`
- `primul an`

### Planuri

Planurile sunt checkbox-uri interactive. Starea bifată se păstrează în `localStorage` sub cheia `vd_checklist`.

Text de secțiune:

- `urmează`
- `Lucruri pe care vreau să le facem`
- `Nu sunt promisiuni mari. Sunt doar lucruri mici pe care mi-ar plăcea să le strângem împreună.`

Checkbox-uri:

- `Aqua Park`
- `Picnic`
- `Film`
- `Să vedem răsăritul`
- `O plimbare fără plan`
- `Prima excursie`
- `Prima poză pe care o numim "preferata noastră"`
- `Prima aniversare`
- `Să mai avem un moment în care spunem "asta trebuie pus pe site"`

### Amintiri noi

Această secțiune afișează amintirile create prin formular. Dacă nu există amintiri salvate, apare textul de stare goală.

Text de secțiune:

- `în creștere`
- `Amintiri noi`
- `Încă nu am adăugat nimic aici. Dar avem timp.`

Amintirile create sunt salvate în `localStorage` sub cheia `vd_memories`.

Texte generate pentru cardurile create:

- Titlu fallback: `O amintire nouă`
- Prefix pentru glumă: `Gluma zilei:`
- Prefix pentru melodie: `Melodia zilei:`
- Prefix pentru lecție: `Ce am învățat:`
- Buton: `Șterge`
- Text alternativ imagine creată: `Poză adăugată pentru o amintire nouă`

Cardurile folosesc doar informațiile completate. Câmpurile goale nu se afișează în card. Dacă formularul este complet gol, nu se creează un card gol.

### Mesaj final

Text vizibil:

- `Nu ți-am făcut un site ca să pară ceva uriaș sau dramatic. Ți-am făcut un loc mic pentru noi, pe care vreau să-l tot completez cu poze, glume, seri, certuri proaste, împăcări bune și tot ce mai vine.`
- `E doar prima pagină. ❤️`

### Butoane plutitoare

Butoanele plutitoare sunt vizibile direct pe desktop. Pe mobil apar după scroll, sunt afișate ca butoane compacte și se ascund când ar acoperi carduri, liste, checklist-uri, secțiunea de planuri sau un modal deschis.

Text vizibil:

- `❤`
- `❤️ Creează o amintire`

Primul buton deschide modalul secret. Al doilea deschide formularul de adăugat amintire.

### Modal secret

Modalul secret se deschide din butonul inimă.

Text vizibil:

- `×`
- `secret`
- `De ce ești acasă`
- `Pentru că lângă tine nu simt nevoia să mă grăbesc. Pentru că mă faci să mă simt ascultat. Pentru că ai un fel al tău de a mă certa și de a mă iubi după, care mă face să zâmbesc chiar și când nu vreau.`
- `Într-o lună ai ajuns omul la care mă gândesc primul când mi se întâmplă ceva. Și cred că asta spune destule.`
- `Nu e tot site-ul. E doar prima lună. Restul îl scriem noi.`

Butonul `×` închide modalul. Modalul se mai poate închide prin click pe fundal sau cu tasta `Escape`.

### Modal amintire

Modalul de amintire se deschide din butonul `❤️ Creează o amintire`.

Text vizibil:

- `×`
- `Adaugă o amintire nouă`
- `Poză`
- `Loc`
- `Dată`
- `Cum ne-am simțit`
- `Gluma zilei`
- `Melodia zilei`
- `Ce am învățat azi despre noi`
- `Salvează amintirea`

Câmpurile formularului sunt opționale. Imaginea adăugată este micșorată în browser înainte de salvare, cu o limită de 900px pe latura cea mai mare și calitate JPEG 0.72.

## Varianta publică

Varianta publică este mai scurtă. Nu conține timeline, memorii, citate, detalii personale, Things unlocked, amintiri noi sau modaluri.

### Browser / meta

Text tehnic:

- Titlu tab: `Versiunea aprobată de șefă pentru public`
- Descriere meta: `Versiunea cuminte a primei luni Vali și Daria.`

### Ecran de început public

Text vizibil:

- `publicul curios`
- `Vali & Daria`
- `06.06.2026 ❤️ 06.07.2026`
- `Se încarcă varianta cuminte, aprobată pentru public...`
- `Intră în varianta cuminte 👀`

### Navigație publică

Navigația publică folosește același model fixat sus, dar are doar linkurile public-safe.

Text vizibil:

- `V & D`
- `Acasă`
- `Album`
- `Glume`
- `Planuri`

### Hero public

Text vizibil:

- `Vali & Daria - prima lună`
- `Versiunea aprobată de șefă pentru public`
- `Fără prea multe secrete. Doar pozele, glumele cuminți și câteva dovezi că șefa chiar există.`
- `Cadoul adevărat rămâne pentru Daria. Aici e preview-ul light: destul cât să râdeți puțin, nu destul cât să furați toate secretele.`
- `Vezi varianta cuminte`

Imagine:

- `imagini/WhatsApp Image 2026-07-02 at 21.44.04 (4).jpeg`
- Text alternativ: `Vali și Daria într-o poză calmă împreună`

### Intro public

Text vizibil:

- `publicul curios 👀`
- `Aceasta este varianta fără prea multe secrete`
- `Restul rămâne între noi. Dar da, șefa e reală. Contractul meu încă există.`

### Album public

Text de secțiune:

- `album`
- `Pozele noastre pe categorii`

Carduri:

- `Noi cuminți`
- `Rar, dar se întâmplă.`
- Imagine: `imagini/WhatsApp Image 2026-07-02 at 21.44.03 (2).jpeg`
- Text alternativ: `Poză calmă împreună în parc`

- `Noi foarte serioși`
- `Dovada că maturitatea ne evită cu succes.`
- Imagine: `imagini/WhatsApp Image 2026-07-02 at 21.44.04 (3).jpeg`
- Text alternativ: `Selfie foarte serios și amuzant`

- `Moment de film`
- `A ieșit chiar bine.`
- Imagine: `imagini/WhatsApp Image 2026-07-02 at 21.44.04.jpeg`
- Text alternativ: `Poză cu atmosferă de film`

- `Al doilea date`
- `Încă încercam să par normal. Nu știu cât mi-a ieșit, dar măcar poza a rămas.`
- Imagine: `imagini/WhatsApp Image 2026-07-02 at 21.44.03.jpeg`
- Text alternativ: `Poză de la o ieșire cu ochelarii`

### Glume publice

Text de secțiune:

- `glume light`
- `Inside jokes aprobate`

Carduri:

- `Șefa 👑`
- `Nu știu când ai devenit șefă. Nu știu cine a semnat contractul. Dar aparent eu sunt angajat pe perioadă nedeterminată.`

- `Băiat cuminte`
- `Aparent acesta este rolul meu oficial. Încerc să-l onorez. Cu mici abateri, evident.`

- `Pisica`
- `Întâi mă ceartă. După vine să mă iubească. Nu spun că seamănă cu cineva. Dar nici nu neg.`

- `Familia din foișor`
- `Aici am învățat o lecție importantă: locurile publice sunt publice. Din păcate.`

### Planuri publice

Text de secțiune:

- `urmează`
- `Lucruri de bifat`
- `Nu promisiuni mari. Doar idei mici pentru poze, râs și încă un motiv să existe site-ul.`

Checkbox-uri:

- `Aqua Park`
- `Picnic`
- `Film`
- `Să vedem răsăritul`
- `O plimbare fără plan`

### Final public

Text vizibil:

- `Atât din varianta publică. Restul rămâne la șefă. 👑`

## Comportament JavaScript

JavaScript-ul din varianta Daria gestionează interacțiunile.

Funcții active detectate prin MCP:

- `openModal`
- `closeModal`
- `setupPublicMode`
- `setupFloatingMemoryButton`
- `setupAccordion`
- `setupChecklist`
- `setupMemoryForm`
- `createMemoryCard`
- `appendParagraph`
- `readJSON`
- `stringValue`
- `fileToSmallDataURL`
- `burstAtElement`

### Ecranul de loading

La încărcarea paginii, zona principală este ascunsă prin atributul `hidden`. Butonul `Intră, șefa 😌❤️` devine activ după 500ms. La click, ecranul de loading se ascunde și site-ul devine vizibil.

### Scroll intern

Linkurile care încep cu `#` nu fac navigare normală. JavaScript-ul oprește acțiunea implicită și duce pagina lin către secțiunea corespunzătoare. Secțiunile au `scroll-margin-top`, astfel încât titlul secțiunii rămâne sub navigația fixă.

### Accordion inside jokes

Toate cardurile `.joke-card` sunt butoane. La click:

- se verifică dacă acel card era deschis;
- toate cardurile se închid;
- cardul apăsat se deschide dacă era închis.

Starea este ținută în atributul `aria-expanded`.

### Checklist planuri

Checkbox-urile din `Planuri` se salvează în `localStorage`, cheia `vd_checklist`. Când pagina se redeschide, bifările sunt citite de acolo.

### Formular amintiri

Formularul creează carduri în `Amintiri noi`. Datele se salvează în `localStorage`, cheia `vd_memories`.

Date posibile pentru o amintire:

- poză;
- loc;
- dată;
- cum ne-am simțit;
- gluma zilei;
- melodia zilei;
- ce am învățat azi despre noi.

Cardul afișează doar câmpurile completate. Dacă există poză, apare poza. Dacă există loc, locul devine titlul cardului. Dacă nu există loc, titlul devine `O amintire nouă`.

### Ștergere amintire

Fiecare card creat are butonul `Șterge`. La click, amintirea cu acel `id` este scoasă din lista din `localStorage`, apoi lista este randată din nou.

### Modaluri

Există două modaluri:

- modal secret;
- modal pentru adăugat amintire.

Modalurile se deschid prin butoane, se închid cu `×`, se închid la click pe fundal și se închid cu `Escape`.

### Animația cu inimioare

Funcția `burstAtElement` creează 10 elemente vizuale cu inimioare în jurul butonului apăsat. Textele folosite pentru inimioare sunt:

- `❤`
- `♥`

Animația nu rulează dacă utilizatorul are activată preferința `prefers-reduced-motion: reduce`.

## Stil vizual și layout

Design-ul folosește culori calde, fundal texturat subtil, carduri cu radius mic, umbre moi și accente roz/verde. Varianta actualizată are navigație mai polish, hero încadrat mai bine, carduri cu profunzime, liste mai aerisite și grile pe două coloane acolo unde e suficient spațiu.

Principalele variabile CSS:

- `--paper: #fbf7f1`
- `--surface: #fff7ef`
- `--surface-strong: #ead8c7`
- `--mist: #f5f8f3`
- `--rose: #c84d69`
- `--rose-dark: #7d2c40`
- `--clay: #9b6248`
- `--green: #214a42`
- `--sage: #dfe8df`
- `--ink: #2b2420`
- `--muted: #6d625b`
- `--soft-shadow: 0 12px 34px rgba(54, 40, 32, 0.08)`
- `--lift-shadow: 0 18px 42px rgba(54, 40, 32, 0.1)`

Fonturi:

- font principal: `Inter`, cu fallback-uri de sistem;
- font decorativ pentru titluri: `Georgia`, `Times New Roman`, serif.

Layout responsive:

- pe desktop, hero-ul și capitolele folosesc grile pe două coloane;
- între 821px și 920px, hero-ul rămâne pe două coloane ca imaginea principală să nu fie decupată agresiv;
- albumul, citatele, memorii, inside jokes, checklist-ul și unlocked folosesc grile;
- sub 920px, majoritatea grilelor trec la una sau două coloane;
- sub 760px, inside jokes și checklist-ul trec la o singură coloană;
- sub 620px, majoritatea grilelor devin o singură coloană;
- sub 620px, butoanele plutitoare devin compacte, apar după scroll și se ascund în zonele cu checklist.

## Imagini folosite în varianta Daria

Imagini de poveste și album:

- `WhatsApp Image 2026-07-02 at 21.44.04 (4).jpeg`
- `WhatsApp Image 2026-07-02 at 21.44.04 (1).jpeg`
- `WhatsApp Image 2026-07-02 at 21.44.03.jpeg`
- `WhatsApp Image 2026-07-02 at 21.44.04 (2).jpeg`
- `WhatsApp Image 2026-07-02 at 21.44.03 (1).jpeg`
- `WhatsApp Image 2026-07-02 at 21.44.04.jpeg`
- `WhatsApp Image 2026-07-02 at 21.44.03 (2).jpeg`
- `WhatsApp Image 2026-07-02 at 21.44.04 (3).jpeg`
- `WhatsApp Image 2026-07-02 at 21.44.03 (3).jpeg`

Screenshot-uri pentru memorii:

- `WhatsApp Image 2026-07-03 at 10.21.58.jpeg`
- `WhatsApp Image 2026-07-03 at 10.21.59 (1).jpeg`
- `WhatsApp Image 2026-07-03 at 10.21.58 (3).jpeg`
- `WhatsApp Image 2026-07-03 at 10.21.58 (4).jpeg`
- `WhatsApp Image 2026-07-03 at 10.21.59.jpeg`
- `WhatsApp Image 2026-07-03 at 10.21.58 (2).jpeg`
- `WhatsApp Image 2026-07-03 at 10.21.58 (1).jpeg`

## Imagini folosite în varianta publică

- `WhatsApp Image 2026-07-02 at 21.44.04 (4).jpeg`
- `WhatsApp Image 2026-07-02 at 21.44.03 (2).jpeg`
- `WhatsApp Image 2026-07-02 at 21.44.04 (3).jpeg`
- `WhatsApp Image 2026-07-02 at 21.44.04.jpeg`
- `WhatsApp Image 2026-07-02 at 21.44.03.jpeg`

Varianta publică nu folosește screenshot-urile private.

## Stocare locală

Site-ul folosește două chei în `localStorage`:

- `vd_checklist`: lista valorilor bifate în checklist-ul de planuri;
- `vd_memories`: lista amintirilor create din formular.

Aceste date rămân în browserul în care au fost create. Nu sunt trimise pe server și nu există backend.

## Rezumat funcțional

Site-ul este static. Conținutul principal este în HTML, aspectul este în CSS, iar interacțiunile sunt în JavaScript. Varianta pentru Daria este completă și personală. Varianta publică este redusă, fără detalii private. Root-ul doar redirecționează către varianta Daria.

Site-ul nu are build step, framework sau backend. Funcționează direct din fișiere locale sau printr-un server static simplu.
