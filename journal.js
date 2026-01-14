// --- DYNAMIC USER NAME (replace with real auth later) ---
const user = { name: 'Friend' };
document.getElementById('userName').textContent = user.name;

// --- DATE ---
const journalDate = document.getElementById('journalDate');
let currentDay = 0;
const totalDays = 365; // placeholder for future
const today = new Date();
function showDay(dayOffset=0){
    const date = new Date(today);
    date.setDate(today.getDate() + dayOffset);
    journalDate.textContent = date.toDateString();
}
showDay(currentDay);

// --- BOOK OPEN/CLOSE ---
const closedBook = document.getElementById('closedBook');
const openBook = document.getElementById('openBook');
closedBook.addEventListener('click', () => {
    closedBook.classList.add('hidden');
    openBook.classList.remove('hidden');
});

// --- JOURNAL INPUT FADE-IN ---
const journalInput = document.getElementById('journalInput');
const startPrompt = document.getElementById('startPrompt');
startPrompt.addEventListener('click', () => {
    startPrompt.classList.add('hidden');
    journalInput.classList.remove('hidden');
    journalInput.focus();
});

// --- LINES FADE-IN ---
journalInput.addEventListener('input', () => {
    const lines = journalInput.value.split('\n');
    const container = document.getElementById('rightPageContent');
    container.innerHTML = '';
    lines.forEach((line,index)=>{
        const div = document.createElement('div');
        div.textContent = line;
        div.style.setProperty('--line-index', index);
        div.classList.add('lined');
        container.appendChild(div);
    });
});

// --- PAGE FLIP SOUND & NAV ---
const rightPage = document.querySelector('.right-page');
const pageTurnSound = new Audio('sounds/page_turn.mp3');
document.getElementById('prevDay').addEventListener('click',()=>{
    if(currentDay>0){
        rightPage.classList.add('turn-prev');
        pageTurnSound.play();
        currentDay--;
        showDay(currentDay);
        setTimeout(()=>rightPage.classList.remove('turn-prev'),600);
    }
});
document.getElementById('nextDay').addEventListener('click',()=>{
    if(currentDay<totalDays-1){
        rightPage.classList.add('turn-next');
        pageTurnSound.play();
        currentDay++;
        showDay(currentDay);
        setTimeout(()=>rightPage.classList.remove('turn-next'),600);
    }
});
