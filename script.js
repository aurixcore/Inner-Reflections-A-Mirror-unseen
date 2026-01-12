// Get all needed elements
const openBtn = document.getElementById('open-reflection');
const dialog = document.getElementById('reflection-dialog');
const closeBtn = document.getElementById('close-btn');
const saveBtn = document.getElementById('save-btn');
const textarea = document.getElementById('reflection-text');

const STORAGE_KEY = 'inner-reflections:latest-entry';

// Load saved text from localStorage when page loads
textarea.value = localStorage.getItem(STORAGE_KEY) || '';

// Open dialog function
openBtn.addEventListener('click', () => {
  if (typeof dialog.showModal === 'function') {
    dialog.showModal();       // Open the dialog
    textarea.focus();         // Focus on the textarea
  } else {
    // Fallback for browsers without <dialog>
    alert('Start writing: ' + textarea.value);
  }
});

// Close dialog function
closeBtn.addEventListener('click', () => {
  dialog.close();
});

// Save button function
saveBtn.addEventListener('click', () => {
  localStorage.setItem(STORAGE_KEY, textarea.value);
  dialog.close();
});

// Autosave while typing
textarea.addEventListener('input', () => {
  localStorage.setItem(STORAGE_KEY, textarea.value);
});
