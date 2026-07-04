const CHECKLIST_KEY = "vd_checklist";
const SUPABASE_URL = "https://gbahuxxdybqyzndqpzyv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_fQwQGTr8e7IcqbZK3VkpKg_AGW8BZeC";
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

document.addEventListener("DOMContentLoaded", () => {
  const loading = document.querySelector("[data-loading]");
  const shell = document.querySelector("[data-site-shell]");
  const enterButton = document.querySelector("[data-enter-site]");
  const secretModal = document.querySelector("[data-secret-modal]");
  const memoryModal = document.querySelector("[data-memory-modal]");
  const isPublicMode = false;
  let lastFocused = null;

  const revealSite = () => {
    loading.hidden = true;
    shell.hidden = false;
    const focusTarget = isPublicMode
      ? document.querySelector('.hero-actions a[href="#album"]')
      : document.querySelector('.hero-actions a[href="#prima-luna"]');
    focusTarget?.focus({ preventScroll: true });
  };

  window.setTimeout(() => {
    enterButton.disabled = false;
  }, 500);

  enterButton.addEventListener("click", revealSite);

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-burst]").forEach((button) => {
    button.addEventListener("click", () => burstAtElement(button));
  });

  setupAccordion();
  setupChecklist();
  setupMemoryForm();
  setupFloatingMemoryButton();

  document.querySelector("[data-open-secret]").addEventListener("click", () => {
    openModal(secretModal);
    burstAtElement(document.querySelector("[data-open-secret]"));
  });
  document.querySelector("[data-close-secret]").addEventListener("click", () => closeModal(secretModal));
  document.querySelector("[data-open-memory]").addEventListener("click", () => openModal(memoryModal));
  document.querySelector("[data-close-memory]").addEventListener("click", () => closeModal(memoryModal));

  [secretModal, memoryModal].forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal(modal);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (!secretModal.hidden) closeModal(secretModal);
    if (!memoryModal.hidden) closeModal(memoryModal);
  });

  function openModal(modal) {
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    const focusTarget = modal.querySelector("button, input, textarea, [href]");
    focusTarget?.focus();
  }

  function closeModal(modal) {
    modal.hidden = true;
    if (secretModal.hidden && memoryModal.hidden) {
      document.body.classList.remove("modal-open");
    }
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus({ preventScroll: true });
    }
  }
});

function setupPublicMode() {
  const isPublicMode = new URLSearchParams(window.location.search).get("public") === "1";
  if (!isPublicMode) return false;

  document.body.classList.add("public-mode");
  document.title = "Versiunea aprobată de șefă pentru public";

  const loadingText = document.querySelector(".loading-card p:not(.eyebrow):not(.date-line)");
  const enterButton = document.querySelector("[data-enter-site]");
  const eyebrow = document.querySelector(".hero-copy .eyebrow");
  const heroTitle = document.querySelector("#hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  const heroBody = document.querySelector(".hero-copy p:not(.eyebrow):not(.hero-subtitle)");

  if (loadingText) loadingText.textContent = "Se încarcă varianta cuminte, aprobată pentru public...";
  if (enterButton) enterButton.textContent = "Intră în varianta cuminte 👀";
  if (eyebrow) eyebrow.textContent = "Vali & Daria - prima lună";
  if (heroTitle) heroTitle.textContent = "Versiunea aprobată de șefă pentru public";
  if (heroSubtitle) heroSubtitle.textContent = "Fără prea multe secrete. Doar pozele, glumele cuminți și câteva dovezi că șefa chiar există.";
  if (heroBody) {
    heroBody.textContent = "Cadoul adevărat rămâne pentru Daria. Aici e preview-ul light: destul cât să râdeți puțin, nu destul cât să furați toate secretele.";
  }

  return true;
}

function setupFloatingMemoryButton() {
  const floatingControls = [
    document.querySelector("[data-open-memory]"),
    document.querySelector("[data-open-secret]"),
  ].filter(Boolean);
  if (!floatingControls.length) return;

  const update = () => {
    const isMobile = window.matchMedia("(max-width: 620px)").matches;
    const protectedZone = [...document.querySelectorAll("#unlocked, #planuri, .memory-form")].some((element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    });
    const shouldShow = !isMobile || (window.scrollY > 520 && !protectedZone);
    floatingControls.forEach((control) => {
      control.classList.toggle("is-visible", shouldShow);
    });
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function setupAccordion() {
  const cards = [...document.querySelectorAll(".joke-card")];
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const isOpen = card.getAttribute("aria-expanded") === "true";
      cards.forEach((item) => item.setAttribute("aria-expanded", "false"));
      card.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

function setupChecklist() {
  const checklist = document.querySelector("[data-checklist]");
  if (!checklist) return;
  const saved = readJSON(CHECKLIST_KEY, []);
  const inputs = [...checklist.querySelectorAll("input[type='checkbox']")];

  inputs.forEach((input) => {
    input.checked = saved.includes(input.value);
    input.addEventListener("change", () => {
      const checked = inputs.filter((item) => item.checked).map((item) => item.value);
      localStorage.setItem(CHECKLIST_KEY, JSON.stringify(checked));
    });
  });
}

function setupMemoryForm() {
  const form = document.querySelector("[data-memory-form]");
  const list = document.querySelector("[data-memory-list]");
  if (!form || !list) return;

  const render = async () => {
    list.replaceChildren();
    const loading = document.createElement("p");
    loading.className = "empty-state";
    loading.textContent = "Se incarca amintirile...";
    list.append(loading);

    const memories = await loadMemories();
    list.replaceChildren();

    if (!memories.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "Încă nu am adăugat nimic aici. Dar avem timp.";
      list.append(empty);
      return;
    }

    memories.forEach((memory) => {
      list.append(createMemoryCard(memory));
    });
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const photo = await fileToSmallDataURL(data.get("photo"));
    const memory = {
      photo,
      place: stringValue(data.get("place")),
      date: stringValue(data.get("date")) || null,
      feeling: stringValue(data.get("feeling")),
      joke: stringValue(data.get("joke")),
      song: stringValue(data.get("song")),
      lesson: stringValue(data.get("lesson")),
    };
    const hasContent = Object.values(memory).some(Boolean);
    if (!hasContent) return;

    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Se salveaza...";
    const saved = await saveMemory(memory);
    submitButton.disabled = false;
    submitButton.textContent = "Salveaza amintirea";
    if (!saved) return;

    form.reset();
    document.querySelector("[data-memory-modal]").hidden = true;
    document.body.classList.remove("modal-open");
    await render();
    document.querySelector("#amintiri-noi").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  list.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-delete-memory]");
    if (!button) return;
    button.disabled = true;
    const deleted = await deleteMemory(button.dataset.deleteMemory);
    if (deleted) await render();
    button.disabled = false;
  });

  render();
}

async function loadMemories() {
  if (!supabaseClient) {
    console.error("Supabase nu s-a incarcat. Verifica conexiunea la internet sau CDN-ul Supabase.");
    return [];
  }

  const { data, error } = await supabaseClient
    .from("memories")
    .select("id, photo, place, date, feeling, joke, song, lesson, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Nu am putut incarca amintirile din Supabase:", error.message);
    return [];
  }

  return data ?? [];
}

async function saveMemory(memory) {
  if (!supabaseClient) {
    console.error("Supabase nu s-a incarcat. Amintirea nu a fost salvata.");
    return false;
  }

  const { error } = await supabaseClient.from("memories").insert(memory);
  if (error) {
    console.error("Nu am putut salva amintirea in Supabase:", error.message);
    alert("Nu am putut salva amintirea. Verifica daca tabela memories exista in Supabase.");
    return false;
  }

  return true;
}

async function deleteMemory(id) {
  if (!supabaseClient || !id) return false;

  const { error } = await supabaseClient.from("memories").delete().eq("id", id);
  if (error) {
    console.error("Nu am putut sterge amintirea din Supabase:", error.message);
    alert("Nu am putut sterge amintirea.");
    return false;
  }

  return true;
}

function createMemoryCard(memory) {
  const article = document.createElement("article");
  article.className = "memory-card";

  if (memory.photo) {
    const image = document.createElement("img");
    image.src = memory.photo;
    image.alt = "Poză adăugată pentru o amintire nouă";
    article.append(image);
  }

  const title = document.createElement("h3");
  title.textContent = memory.place || "O amintire nouă";
  article.append(title);

  appendParagraph(article, memory.date, "memory-meta");
  appendParagraph(article, memory.feeling);
  appendParagraph(article, memory.joke ? `Gluma zilei: ${memory.joke}` : "");
  appendParagraph(article, memory.song ? `Melodia zilei: ${memory.song}` : "");
  appendParagraph(article, memory.lesson ? `Ce am învățat: ${memory.lesson}` : "");

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-memory";
  deleteButton.type = "button";
  deleteButton.dataset.deleteMemory = memory.id;
  deleteButton.textContent = "Șterge";
  article.append(deleteButton);

  return article;
}

function appendParagraph(parent, text, className = "") {
  if (!text) return;
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  if (className) paragraph.className = className;
  parent.append(paragraph);
}

function readJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function stringValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

function fileToSmallDataURL(file) {
  if (!(file instanceof File) || !file.size) return Promise.resolve("");

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const image = new Image();
      image.addEventListener("load", () => {
        const canvas = document.createElement("canvas");
        const maxSide = 900;
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.72));
      });
      image.addEventListener("error", () => resolve(""));
      image.src = reader.result;
    });
    reader.addEventListener("error", () => resolve(""));
    reader.readAsDataURL(file);
  });
}

function burstAtElement(element) {
  if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let index = 0; index < 10; index += 1) {
    const heart = document.createElement("span");
    heart.className = "heart-burst";
    heart.textContent = index % 3 === 0 ? "❤" : "♥";
    heart.style.left = `${centerX}px`;
    heart.style.top = `${centerY}px`;
    heart.style.setProperty("--x", `${(index - 4.5) * 13}px`);
    heart.style.animationDelay = `${index * 22}ms`;
    document.body.append(heart);
    window.setTimeout(() => heart.remove(), 1200);
  }
}
