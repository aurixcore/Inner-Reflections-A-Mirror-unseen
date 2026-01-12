// ======== INNER REFLECTIONS JOURNAL ========
const openBtn = document.getElementById('open-reflection');
const dialog = document.getElementById('reflection-dialog');
const closeBtn = document.getElementById('close-btn');
const saveBtn = document.getElementById('save-btn');
const textarea = document.getElementById('reflection-text');
const STORAGE_KEY = 'inner-reflections:latest-entry';

// Load saved text
if(textarea) {
  textarea.value = localStorage.getItem(STORAGE_KEY) || '';
}

// Open dialog
if(openBtn && dialog) {
  openBtn.addEventListener('click', () => {
    if(typeof dialog.showModal === 'function') {
      dialog.showModal();
      textarea.focus();
    }
  });
}

// Close dialog
if(closeBtn && dialog) {
  closeBtn.addEventListener('click', () => dialog.close());
}

// Save entry
if(saveBtn && textarea) {
  saveBtn.addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY, textarea.value);
    dialog.close();
  });
}

// Autosave while typing
if(textarea) {
  textarea.addEventListener('input', () => {
    localStorage.setItem(STORAGE_KEY, textarea.value);
  });
}
