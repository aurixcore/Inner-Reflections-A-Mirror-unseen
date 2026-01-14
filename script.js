// ----------------------------
// INNER REFLECTIONS - script.js
// ----------------------------

// ----------------------------
// ELEMENT REFERENCES
// ----------------------------
const openBtn = document.getElementById("open-reflection");
const dialog = document.getElementById("reflection-dialog");
const closeBtn = document.getElementById("close-btn");
const saveBtn = document.getElementById("save-btn");
const textarea = document.getElementById("reflection-text");
const dailyTipEl = document.getElementById("daily-tip");

// ----------------------------
// STORAGE KEYS
// ----------------------------
const JOURNAL_KEY = "inner-reflections:journal";
const DATE_KEY = "inner-reflections:last-date";

// ----------------------------
// OPEN JOURNAL DIALOG
// ----------------------------
if (openBtn && dialog) {
  openBtn.addEventListener("click", () => {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
      textarea?.focus();
    }
  });
}

// ----------------------------
// CLOSE DIALOG
// ----------------------------
if (closeBtn && dialog) {
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });
}

// ----------------------------
// SAVE JOURNAL ENTRY
// ----------------------------
if (saveBtn && textarea && dialog) {
  saveBtn.addEventListener("click", () => {
    localStorage.setItem(JOURNAL_KEY, textarea.value);
    localStorage.setItem(DATE_KEY, new Date().toDateString());
    dialog.close();
  });
}

// ----------------------------
// AUTOLOAD SAVED ENTRY
// ----------------------------
if (textarea) {
  const savedText = localStorage.getItem(JOURNAL_KEY);
  if (savedText) {
    textarea.value = savedText;
  }

  // Autosave while typing
  textarea.addEventListener("input", () => {
    localStorage.setItem(JOURNAL_KEY, textarea.value);
  });
}

// ----------------------------
// DAILY ROTATING TIP ENGINE
// ----------------------------
const dailyTips = [
  "Take a moment to breathe and notice how your body feels.",
  "You do not need to solve everything today.",
  "What emotion is asking to be seen right now?",
  "Rest is also productive.",
  "Notice one thing you are grateful for in this moment.",
  "Your feelings are information, not instructions.",
  "Slow down. Presence is enough.",
  "What would kindness toward yourself look like today?",
  "You are allowed to take up space.",
  "Small steps still move you forward."
];

if (dailyTipEl) {
  const today = new Date();
  const index = today.getDate() % dailyTips.length;
  dailyTipEl.textContent = `"${dailyTips[index]}"`;
}

// ----------------------------
// HIGHLIGHT ACTIVE MENU ITEM
// ----------------------------
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".main-menu a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.backgroundColor = "#A6C8FF";
    link.style.color = "#1A1F3D";
  }
});
