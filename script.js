/**
 * script.js - SDA Trivia Challenge Main Logic
 *
 * This file contains the core game logic for the SDA Trivia Challenge application.
 * It handles game state management, question display, scoring, animations, and audio.
 *
 * Future improvement suggestions:
 * - Normalize audio filenames for consistency (e.g., use kebab-case for all files)
 * - Add unit tests for core game functions
 * - Further modularize code into separate files (state, UI, audio, etc.)
 * - Add local storage for saving game progress and high scores
 * - Implement accessibility improvements (ARIA attributes, keyboard navigation)
 *
 * @author SDA Trivia Challenge Team
 * @version 1.1.0
 */
// --- DOM Elements ---
const soloBtn = document.getElementById('solo');
const teamsBtn = document.getElementById('teams');
const container = document.querySelector('.container');
const gameDiv = document.getElementById('game');
const gameOverDiv = document.getElementById('game-over');
const scoreSolo = document.getElementById('score-solo');
const scoreTeams = document.getElementById('score-teams');
const timerDiv = document.querySelector('.timer p');
const questionDiv = document.querySelector('.question p');
const optionsDiv = document.querySelector('.options');
const nextBtn = document.getElementById('next');
const resultsSolo = document.getElementById('results-solo');
const resultsTeams = document.getElementById('results-teams');
const playAgainBtn = document.getElementById('play-again');
const downloadBtn = document.getElementById('download');
const exitBtn = document.getElementById('exit');
const feedbackOverlay = document.querySelector('.feedback-overlay');
const achievementTitle = document.getElementById('achievement-title');
const teamWinner = document.getElementById('team-winner');
const teamTurnIndicator = document.getElementById('team-turn-indicator'); // <-- ADD THIS
const hintBtn = document.getElementById('hint-btn');
const takeawayBtn = document.getElementById('takeaway-btn');
// Removed revive button reference
const explanationDiv = document.createElement('div');
explanationDiv.id = 'explanation';
explanationDiv.style.display = 'none';
explanationDiv.style.margin = '1.2rem auto 0 auto';
explanationDiv.style.maxWidth = '90%';
explanationDiv.style.background = 'rgba(255,255,255,0.18)';
explanationDiv.style.border = '2.5px solid #ffd700';
explanationDiv.style.borderRadius = '14px';
explanationDiv.style.fontFamily = 'Bangers, cursive';
explanationDiv.style.fontSize = '1.25rem';
explanationDiv.style.color = '#222';
explanationDiv.style.textAlign = 'center';
explanationDiv.style.padding = '1rem 1.2rem';
explanationDiv.style.boxShadow = '0 2px 12px #ffd70022';
// Insert after optionsDiv in the DOM
optionsDiv.parentNode.appendChild(explanationDiv);

// --- Sound Integration ---
const audioCorrect1 = document.getElementById('audio-correct-1');
const audioCorrect2 = document.getElementById('audio-correct-2');
const audioWrong = document.getElementById('audio-wrong');
const audioTimeup = document.getElementById('audio-timeup');
const audioRiser = document.getElementById('audio-riser');
const audioBg = document.getElementById('audio-bg');
const audioTimerTick = document.getElementById('audio-timer-tick'); // old ticking sound
const audioTickingTime = document.getElementById('audio-ticking-time'); // new ticking sound
const muteToggle = document.getElementById('mute-toggle');
let isMuted = false;
let tickingInterval = null;
let userInteracted = false;

/**
 * Plays an audio element with error handling
 * @param {HTMLAudioElement} audio - The audio element to play
 */
function playSound(audio) {
    if (!isMuted && audio) {
        try {
            audio.currentTime = 0;
            audio.play().catch(e => console.warn('Error playing sound:', e));
        } catch (e) {
            console.warn('Error playing sound:', e);
        }
    }
}
function playCorrectSound() {
    const which = Math.random() < 0.5 ? audioCorrect1 : audioCorrect2;
    playSound(which);
}
function playBgMusic() {
    if (!isMuted) {
        audioBg.volume = 0.5;
        audioBg.play().catch(e => console.warn('Error playing background music:', e));
    }
}
function pauseBgMusic() {
    audioBg.pause();
}
function startTicking() {
    if (isMuted) return;
    stopTicking();
    
    // Better approach: use audio loop property instead of setInterval
    audioTickingTime.currentTime = 0;
    audioTickingTime.loop = true;
    
    try {
        audioTickingTime.play().catch(e => {
            console.warn('Error starting ticking sound:', e);
            // Fallback to interval method if loop doesn't work
            tickingInterval = setInterval(() => {
                if (!isMuted) {
                    audioTickingTime.currentTime = 0;
                    audioTickingTime.play().catch(() => {});
                }
            }, 1000);
        });
    } catch (e) {
        console.warn('Error playing ticking sound:', e);
    }
}

function stopTicking() {
    if (tickingInterval) {
        clearInterval(tickingInterval);
        tickingInterval = null;
    }
    
    try {
        audioTickingTime.pause();
        audioTickingTime.currentTime = 0;
    } catch (e) {
        console.warn('Error stopping ticking sound:', e);
    }
}
// Mute/unmute logic with better error handling
muteToggle.addEventListener('click', () => {
    isMuted = !isMuted;
    
    // Create an array of all audio elements
    const allAudioElements = [
        audioCorrect1, audioCorrect2, audioWrong, audioTimeup,
        audioRiser, audioBg, audioTimerTick, audioTickingTime,
        audioStreakWowza, audioStreakZing, audioStreakKawabanga,
        audioStreakLetsGo, audioStreakNice,
        audioTransition, audioTransition2
    ];
    
    // Set muted state for all audio elements
    allAudioElements.forEach(a => {
        if(a) a.muted = isMuted;
    });
    
    // Update mute button UI
    muteToggle.innerText = isMuted ? '🔇' : '🔊';
    
    // Handle background music
    if (isMuted) {
        pauseBgMusic();
    } else {
        playBgMusic();
    }
});
// Show mute button after first user interaction with improved implementation
function ensureUserInteraction() {
    if (!userInteracted) {
        userInteracted = true;
        muteToggle.style.display = 'block';
        
        // Pre-load audio files after user interaction
        const allAudioElements = [
            audioCorrect1, audioCorrect2, audioWrong, audioTimeup,
            audioRiser, audioBg, audioTimerTick, audioTickingTime,
            audioStreakWowza, audioStreakZing, audioStreakKawabanga,
            audioStreakLetsGo, audioStreakNice,
            audioTransition, audioTransition2
        ];
        
        // Touch all audio elements to prepare them
        allAudioElements.forEach(audio => {
            if (audio) {
                try {
                    // Create a silent buffer and play it to "warm up" the audio context
                    audio.volume = 0;
                    audio.play().then(() => {
                        audio.pause();
                        audio.currentTime = 0;
                        audio.volume = isMuted ? 0 : 1;
                    }).catch(() => {
                        // Silently fail - this is just pre-loading
                    });
                } catch (e) {
                    // Ignore errors during preloading
                }
            }
        });
        
        // Start background music with normal volume
        playBgMusic();
    }
}

// Use once: true to automatically remove these listeners after first trigger
document.body.addEventListener('click', ensureUserInteraction, { once: true });
document.body.addEventListener('keydown', ensureUserInteraction, { once: true });

// --- Confetti Setup ---
const confettiSettings = { target: 'confetti-canvas', respawn: false, clock: 30, colors: [[230, 57, 70], [183, 28, 28], [255, 215, 0]] };
const confetti = new ConfettiGenerator(confettiSettings);

// --- Timer and Game State Variables ---
let TIME_LIMIT = 20; // was 15, now 20 for all modes
let questions = [];
let currentQuestionIndex = 0;
let gameMode = 'solo'; // 'solo' or 'teams'
let teamBlueScore = 0;
let teamBlackScore = 0;
let currentTeam = 'blue';
let playerScore = 0;
let currentStreak = 0;
let longestStreak = 0;
let correctAnswers = 0;
let timer;
let timeLeft = 15;

// --- NEW FOR TIME ATTACK MODE ---
let isTimeAttackMode = false; // Always false to disable time attack mode
let globalTimer;
const TOTAL_TIME_LIMIT = 180; // 3 minutes
let globalTimeLeft = TOTAL_TIME_LIMIT;
let timeAttackStartTime = null;
let timeRanOut = false;
// --- NEW FOR SEQUENTIAL TEAM TIME ATTACK ---
let timeAttackTeamTurn = 'blue';
let timeAttackBlueTeamFinalScore = 0;
// --- New for achievements ---
let answerTimes = [];
let questionStartTime = null;
let powerUpsUsed = 0;
let faithTokens = 0; // already present, but moved here for clarity
let wrongStreak = 0;
let hadComebackStreak = false;
// --- New for leaderboard ---
let gameStartTime = null;
let gameElapsedTime = 0;
let gameQuestionCount = 0;
// --- NEW FOR UNIQUE QUESTIONS ---
let blueTeamQuestions = [];

// --- Utility Functions ---
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// --- NEW: Get Time Attack Questions ---
function getAttackModeQuestions(filteredByCategory, questionsToExclude = [], lenient = false) {
    const excludeIds = new Set(questionsToExclude.map(q => q.id));
    // Instead of filtering by difficulty, just use all available questions not excluded
    const allQuestions = shuffle(filteredByCategory.filter(q => !excludeIds.has(q.id)));
    if (allQuestions.length < 1) {
        alert('Too few unique questions available for a full game. Please try "All Categories" or add more questions.');
        return null;
    }
    return allQuestions;
}

function clearOptions() {
    while (optionsDiv.firstChild) {
        optionsDiv.removeChild(optionsDiv.firstChild);
    }
}

function updateScore() {
    scoreTeams.querySelector('div').children[0].innerText = `Blue: ${teamBlueScore}`;
    scoreTeams.querySelector('div').children[1].innerText = `${currentQuestionIndex + 1} / ${questions.length}`;
    scoreTeams.querySelector('div').children[2].innerText = `Black: ${teamBlackScore}`;
}

function updateSoloStats() {
    scoreSolo.children[0].innerText = `Score: ${playerScore}`;
    scoreSolo.children[1].innerText = `Streak: ${currentStreak}`;
    scoreSolo.children[2].innerText = `${currentQuestionIndex + 1} / ${questions.length}`;
}

function resetState() {
    clearInterval(timer);
    nextBtn.style.display = 'none';
    clearOptions();
    timerDiv.classList.remove('low-time');
    stopTicking();
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = '0%';
        progressBar.classList.remove('light-up');
    }
}

// --- Animation Functions ---
const RIGHT_OVERLAYS = [
    { text: 'KAPOW!', color: '#ffd700', fontSize: '3.7rem', rotate: -8 },
    { text: 'ZING!', color: '#4caf50', fontSize: '3.2rem', rotate: 6 },
    { text: 'BOOM!', color: '#ff4b5c', fontSize: '3.9rem', rotate: 12 },
    { text: 'YES!', color: '#2196f3', fontSize: '3.3rem', rotate: -14 },
    { text: 'NAILED IT!', color: '#ff9800', fontSize: '3.4rem', rotate: 8 },
    { text: 'BULLSEYE!', color: '#00e6ff', fontSize: '3.5rem', rotate: -10 },
    { text: 'WHAM!', color: '#ff1744', fontSize: '3.6rem', rotate: 10 }
];
const WRONG_OVERLAYS = [
    { text: 'ZAP!', color: '#ff4b5c', fontSize: '3.5rem', rotate: 10 },
    { text: 'OOPS!', color: '#b71c1c', fontSize: '3.2rem', rotate: -10 },
    { text: 'MISS!', color: '#222', fontSize: '3.6rem', rotate: 7 },
    { text: 'NOPE!', color: '#607d8b', fontSize: '3.3rem', rotate: -12 },
    { text: 'WHOOPS!', color: '#9e9e9e', fontSize: '3.1rem', rotate: 15 },
    { text: 'BUSTED!', color: '#ff1744', fontSize: '3.4rem', rotate: -7 },
    { text: 'TRY AGAIN!', color: '#00e6ff', fontSize: '3.2rem', rotate: 11 }
];

function showFeedback(isCorrect) {
    // Remove any existing overlays
    Array.from(document.querySelectorAll('.comic-overlay')).forEach(el => el.remove());
    // Pick overlay
    const overlays = isCorrect ? RIGHT_OVERLAYS : WRONG_OVERLAYS;
    const overlay = overlays[Math.floor(Math.random() * overlays.length)];
    const word = document.createElement('div');
    word.classList.add('comic-overlay');
    word.innerText = overlay.text;
    word.style.position = 'fixed';
    word.style.left = '50%';
    word.style.top = '50%';
    word.style.transform = `translate(-50%, -50%) rotate(${overlay.rotate}deg)`;
    word.style.fontSize = overlay.fontSize;
    word.style.fontFamily = 'Bangers, cursive';
    word.style.color = overlay.color;
    word.style.textShadow = '2px 2px 12px #111, 0 0 18px #fff';
    word.style.zIndex = 500;
    word.style.padding = '0.2em 0.7em';
    word.style.background = 'rgba(255,255,255,0.13)';
    word.style.borderRadius = '18px';
    word.style.border = `3px solid ${overlay.color}`;
    word.style.boxShadow = '0 4px 32px #0008';
    word.style.letterSpacing = '2px';
    word.style.opacity = '0';
    word.style.transition = 'opacity 0.18s, transform 0.18s';
    document.body.appendChild(word);
    setTimeout(() => {
        word.style.opacity = '1';
        word.style.transform += ' scale(1.18)';
    }, 10);
    setTimeout(() => {
        word.style.opacity = '0';
        word.style.transform = word.style.transform.replace(' scale(1.18)', ' scale(0.7)');
    }, 900);
    setTimeout(() => { word.remove(); }, 1200);
}

function triggerConfetti(type = 'normal') {
    // type: 'normal', 'streak', 'perfect', 'teamwin'
    if (type === 'streak') {
        confettiSettings.colors = [[255, 215, 0], [76, 175, 80], [255, 255, 255]];
        confettiSettings.clock = 60;
    } else if (type === 'perfect') {
        confettiSettings.colors = [[255, 215, 0], [76, 175, 80], [183, 28, 28], [255,255,255]];
        confettiSettings.clock = 80;
    } else if (type === 'teamwin') {
        confettiSettings.colors = [[33, 150, 243], [0,0,0], [255, 215, 0]];
        confettiSettings.clock = 80;
    } else {
        confettiSettings.colors = [[230, 57, 70], [183, 28, 28], [255, 215, 0]];
        confettiSettings.clock = 30;
    }
    confetti.clear();
    confetti.render();
    setTimeout(() => { confetti.clear(); }, 3000);
}

function animateScoreChange(element, up) {
    element.classList.remove('score-animate-up', 'score-animate-down');
    void element.offsetWidth; // force reflow
    element.classList.add(up ? 'score-animate-up' : 'score-animate-down');
    setTimeout(() => {
        element.classList.remove('score-animate-up', 'score-animate-down');
    }, 700);
}

function shakeElement(element) {
    element.classList.add('shake');
    setTimeout(() => { element.classList.remove('shake'); }, 600);
}

// --- Firework and Alarm Effects ---
function triggerComicFireworks(extra = false) {
    const panel = gameDiv;
    const fireworks = ['💥','✨','🌟','🔥','⭐','💫','🎉','🧨'];
    const count = extra ? 12 : 6;
    for (let i = 0; i < count; i++) {
        const fw = document.createElement('div');
        fw.className = 'comic-firework';
        fw.innerText = fireworks[Math.floor(Math.random() * fireworks.length)];
        // Random position within the panel
        const x = Math.random() * 80 + 10; // 10% to 90%
        const y = Math.random() * 60 + 10; // 10% to 70%
        fw.style.left = x + '%';
        fw.style.top = y + '%';
        panel.appendChild(fw);
        setTimeout(() => fw.remove(), 900);
    }
}
function triggerComicAlarm() {
    const panel = gameDiv;
    const alarm = document.createElement('div');
    alarm.className = 'comic-alarm';
    alarm.innerText = '🚨';
    panel.appendChild(alarm);
    setTimeout(() => alarm.remove(), 800);
    panel.classList.add('red-flash');
    setTimeout(() => panel.classList.remove('red-flash'), 400);
}

// --- Category Dropdown Population ---
// --- Category Selection (will be initialized in DOMContentLoaded) ---
let categoryDropdown;

// --- Faith Tokens and Power-Ups ---
let doublePointsActive = false;
let freezeTimeActive = false;
// Removed revive-related variables
const faithTokensDiv = document.getElementById('faith-tokens');
const doublePointsBtn = document.getElementById('double-points-btn');
const freezeTimeBtn = document.getElementById('freeze-time-btn');
// Removed revive button reference

function updateFaithTokens(animate = false) {
    faithTokensDiv.innerText = `Faith Tokens: ${faithTokens}`;
    doublePointsBtn.disabled = faithTokens < 1 || doublePointsActive;
    freezeTimeBtn.disabled = faithTokens < 1 || freezeTimeActive;
    // Removed revive button disabled state
    
    // Animate faith tokens change if requested
    if (animate) {
        faithTokensDiv.classList.remove('token-change');
        void faithTokensDiv.offsetWidth; // Force reflow
        faithTokensDiv.classList.add('token-change');
        setTimeout(() => faithTokensDiv.classList.remove('token-change'), 1000);
    }
}

doublePointsBtn.onclick = function() {
    if (faithTokens < 1 || doublePointsActive) return;
    faithTokens--;
    doublePointsActive = true;
    updateFaithTokens(true);
    doublePointsBtn.classList.add('hint-highlight');
    setTimeout(() => doublePointsBtn.classList.remove('hint-highlight'), 1200);
};

freezeTimeBtn.onclick = function() {
    if (faithTokens < 1 || freezeTimeActive) return;
    faithTokens--;
    powerUpsUsed++;
    freezeTimeActive = true;
    updateFaithTokens(true);
    freezeTimeBtn.classList.add('hint-highlight');
    timerDiv.style.color = '#2196f3';
    timerDiv.style.textShadow = '0 0 10px #2196f3';

    const timerToPause = isTimeAttackMode ? globalTimer : timer;
    clearInterval(timerToPause);
    
    setTimeout(() => {
        freezeTimeBtn.classList.remove('hint-highlight');
        timerDiv.style.color = '';
        timerDiv.style.textShadow = '';
        
        if (isTimeAttackMode) {
            startGlobalTimer(); // Resume global timer
        } else {
            startTimer();
        }
        freezeTimeActive = false;
        updateFaithTokens();
    }, 5000);
};

// Removed revive button onclick function

// --- Wager Logic ---
const wagerInput = document.getElementById('wager-input');
const wagerFeedback = document.createElement('div');
wagerFeedback.id = 'wager-feedback';
wagerFeedback.style.fontSize = '0.8rem';
wagerFeedback.style.marginTop = '0.25rem';
wagerFeedback.style.fontStyle = 'italic';
wagerFeedback.style.color = '#ffd700';
wagerFeedback.style.textAlign = 'center';
wagerInput.parentNode.appendChild(wagerFeedback);

let currentWager = 5;
let maxWagerValue = 20;

/**
 * Updates the wager feedback display with risk level information
 * Provides visual feedback about the risk level of the current wager
 * Changes color and text based on the percentage of maximum wager
 */
function updateWagerFeedback() {
    // Calculate risk level based on percentage of max
    const riskPercentage = (currentWager / maxWagerValue) * 100;
    let riskLevel = '';
    
    if (riskPercentage <= 25) {
        riskLevel = 'Low Risk';
        wagerFeedback.style.color = '#4caf50'; // Green
    } else if (riskPercentage <= 50) {
        riskLevel = 'Moderate Risk';
        wagerFeedback.style.color = '#ff9800'; // Orange
    } else if (riskPercentage <= 75) {
        riskLevel = 'High Risk';
        wagerFeedback.style.color = '#ff5722'; // Deep Orange
    } else {
        riskLevel = 'Extreme Risk!';
        wagerFeedback.style.color = '#f44336'; // Red
    }
    
    wagerFeedback.textContent = `${riskLevel} (${currentWager}/${maxWagerValue})`;
}

/**
 * Validates and updates the wager input value
 * Ensures the wager is within valid range and provides visual feedback
 */
wagerInput.addEventListener('input', () => {
    // Remove non-numeric characters
    wagerInput.value = wagerInput.value.replace(/[^0-9]/g, '');
    
    // Parse and validate the value
    let val = parseInt(wagerInput.value, 10);
    
    // Handle empty or invalid input
    if (wagerInput.value === '' || isNaN(val)) {
        val = 1;
        wagerInput.value = '1';
    }
    
    // Enforce min/max constraints
    if (val < 1) {
        val = 1;
        wagerInput.value = '1';
    }
    
    if (val > maxWagerValue) {
        val = maxWagerValue;
        wagerInput.value = maxWagerValue.toString();
    }
    
    currentWager = val;
    updateWagerFeedback();
});

// Add a blur event to ensure valid value when focus leaves the input
wagerInput.addEventListener('blur', () => {
    if (wagerInput.value === '' || isNaN(parseInt(wagerInput.value, 10))) {
        wagerInput.value = '1';
        currentWager = 1;
        updateWagerFeedback();
    }
});

// --- Game Logic Modifications ---
let roundSize = 20;
let isLightningRound = false;
let filteredQuestions = [];

// --- COUNTDOWN NUMBERS ---
function showCountdownNumber(num) {
    const existing = document.querySelector('.countdown-number');
    if (existing) existing.remove();
    const div = document.createElement('div');
    div.className = 'countdown-number';
    div.innerText = num;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 800);
}

// --- PAGE TRANSITIONS ---
// --- Smoother transitions for screen changes ---
function slideIn(el) {
    el.classList.remove('slide-out');
    el.classList.add('slide-in');
    el.style.display = 'block';
}
function slideOut(el, cb) {
    el.classList.remove('slide-in');
    el.classList.add('slide-out');
    setTimeout(() => {
        el.style.display = 'none';
        if (cb) cb();
    }, 700);
}

// --- FADE IN/OUT FOR QUESTIONS ---
function fadeIn(el) {
    el.classList.remove('fade-out');
    el.classList.add('fade-in');
    el.style.opacity = 1;
}
function fadeOut(el, cb) {
    el.classList.remove('fade-in');
    el.classList.add('fade-out');
    setTimeout(() => {
        el.style.opacity = 0;
        if (cb) cb();
    }, 500);
}

// --- Audio Streak Sounds ---
const audioStreakWowza = document.getElementById('audio-streak-wowza');
const audioStreakZing = document.getElementById('audio-streak-zing');
const audioStreakKawabanga = document.getElementById('audio-streak-kawabanga');
const audioStreakLetsGo = document.getElementById('audio-streak-letsgo');
const audioStreakNice = document.getElementById('audio-streak-nice');
const audioTransition = document.getElementById('audio-transition');
const audioTransition2 = document.getElementById('audio-transition2');

/**
 * Plays a special sound effect based on the player's streak level
 * @param {number} streak - The current streak count
 */
function playStreakSound(streak) {
    let audio = null;
    if (streak === 3) audio = audioStreakWowza;
    else if (streak === 5) audio = audioStreakZing;
    else if (streak === 7) audio = audioStreakKawabanga;
    else if (streak === 10) audio = audioStreakLetsGo;
    else if (streak >= 15) audio = audioStreakNice;
    
    if (audio) {
        playSound(audio);
    }
}

// --- Category to icon mapping
const CATEGORY_ICONS = {
    'Bible People': '📖',
    'Prophecy': '👓',
    'General SDA': '🌍',
    'Diet & Health': '🥗',
    'Last Day Events': '⏳',
    'Music': '🎵',
    'The Great Controversy': '⚔️'
};

// Fun facts, Bible verses, and health tips
const FUN_FACTS = [
    // Bible Verses
    '“I can do all things through Christ who strengthens me.” — Philippians 4:13',
    '“Trust in the Lord with all your heart and lean not on your own understanding.” — Proverbs 3:5',
    '“Beloved, I pray that you may prosper in all things and be in health, just as your soul prospers.” — 3 John 1:2',
    // Health Tips
    '🥗 Health Tip: Drinking enough water each day is crucial for many reasons: to regulate body temperature, keep joints lubricated, and deliver nutrients to cells.',
    '🥦 Health Tip: Eating a variety of colorful fruits and vegetables helps your body get a wide range of nutrients.',
    '🚶‍♂️ Health Tip: Just 30 minutes of walking a day can boost your mood and improve your health.',
    // Fun Facts
    '🌍 Fun Fact: The Seventh-day Adventist Church operates one of the largest Protestant educational systems in the world.',
    '🎵 Fun Fact: Music can reduce anxiety, blood pressure, and pain as well as improve sleep quality, mood, and memory.',
    '⏳ Fun Fact: The "Great Disappointment" of 1844 led to the formation of the Adventist movement.'
];

function getRandomFunFact() {
    return FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)];
}

// Encouragement messages
const ENCOURAGEMENTS_CORRECT = [
    "You're unstoppable!",
    "Comic book legend!",
    "That was heroic!",
    "You crushed it!",
    "Superb!",
    "Right on the money!",
    "You just leveled up!",
    "That was epic!",
    "You could be a trivia superhero!",
    "Keep smashing it!"
];
const ENCOURAGEMENTS_INCORRECT = [
    "Even Batman misses sometimes!",
    "Plot twist! Try again.",
    "Villains never win—heroes keep going!",
    "Shake it off, hero!",
    "Every hero has setbacks!",
    "You dodged that one—next time, aim true!",
    "Not all heroes get it right the first time!",
    "The comeback is always stronger!",
    "Zap! But you'll bounce back!",
    "Keep your cape on—next one's yours!"
];
function getRandomEncouragement(isCorrect) {
    const arr = isCorrect ? ENCOURAGEMENTS_CORRECT : ENCOURAGEMENTS_INCORRECT;
    return arr[Math.floor(Math.random() * arr.length)];
}

// --- Achievements and Star Rubric ---
const ACHIEVEMENTS = [
  {
    id: 'novice_guardian',
    name: 'Novice Guardian',
    description: 'Complete a game.',
    check: (stats) => stats.completed,
  },
  {
    id: 'accuracy_ace',
    name: 'Accuracy Ace',
    description: 'Get 90% or more correct answers in a game.',
    check: (stats) => stats.correctPct >= 90,
  },
  {
    id: 'streak_master',
    name: 'Streak Master',
    description: 'Achieve a streak of 10 or more correct answers in a row.',
    check: (stats) => stats.longestStreak >= 10,
  },
  {
    id: 'speedster',
    name: 'Speedster',
    description: 'Average answer time under 7 seconds.',
    check: (stats) => stats.avgTime < 7,
  },
  {
    id: 'faithful_finisher',
    name: 'Faithful Finisher',
    description: 'Finish a game without using any power-ups.',
    check: (stats) => stats.powerUpsUsed === 0,
  },
  {
    id: 'comeback_kid',
    name: 'Comeback Kid',
    description: 'Recover from a streak of 3+ wrong answers to finish with 80%+ accuracy.',
    check: (stats) => stats.comeback && stats.correctPct >= 80,
  },
  {
    id: 'token_tycoon',
    name: 'Token Tycoon',
    description: 'Earn 10 or more Faith Tokens in a single game.',
    check: (stats) => stats.faithTokens >= 10,
  },
  {
    id: 'perfect_game',
    name: 'Perfect Game',
    description: 'Answer all questions correctly in a game.',
    check: (stats) => stats.correctAnswers === stats.totalQuestions,
  },
];

function calculateStars(stats) {
  // Rubric:
  // 1: <50% correct
  // 2: 50-69%
  // 3: 70-84%
  // 4: 85-94%
  // 5: 95-100%
  const pct = stats.correctPct;
  if (pct < 50) return 1;
  if (pct < 70) return 2;
  if (pct < 85) return 3;
  if (pct < 95) return 4;
  return 5;
}

function getStarExplanation(stars) {
  const explanations = [
    'Beginner – Needs improvement.',
    'Learner – Some knowledge, keep practicing.',
    'Competent – Good performance, above average.',
    'Expert – Excellent knowledge and consistency.',
    'Master – Outstanding, near-perfect play.'
  ];
  return explanations[stars - 1] || '';
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// --- Loading Overlay ---
const loadingOverlay = document.getElementById('loading-overlay');
const loadingBar = document.getElementById('loading-bar');

function showLoadingOverlay() {
    if (loadingOverlay) loadingOverlay.style.display = 'flex';
}
function hideLoadingOverlay() {
    if (loadingOverlay) loadingOverlay.style.opacity = '0';
    setTimeout(() => { if (loadingOverlay) loadingOverlay.style.display = 'none'; }, 400);
}
function setLoadingProgress(percent) {
    if (loadingBar) loadingBar.style.width = percent + '%';
}

// --- Asset Preload Logic ---
const audioElements = [
    'audio-correct-1','audio-correct-2','audio-wrong','audio-timeup','audio-riser','audio-bg','audio-timer-tick','audio-ticking-time',
    'audio-streak-wowza','audio-streak-zing','audio-streak-kawabanga','audio-streak-letsgo','audio-streak-nice',
    'audio-transition', 'audio-transition2'
].map(id => document.getElementById(id)).filter(Boolean);

function preloadAudioAssets(onProgress, onComplete) {
    let loaded = 0;
    const total = audioElements.length;
    audioElements.forEach(audio => {
        audio.oncanplaythrough = () => {
            loaded++;
            onProgress(Math.round((loaded/total)*100));
            if (loaded === total) onComplete();
        };
        // Start loading
        audio.load();
    });
}

// Show loading overlay and preload assets on DOMContentLoaded
showLoadingOverlay();
preloadAudioAssets(setLoadingProgress, () => {
    setTimeout(hideLoadingOverlay, 400);
});

// --- Refactor: Cache DOM queries for options/buttons ---
// (Example: in showQuestion, batch create option buttons and use fragment)
const createOptionButtons = (options, onClick) => {
    const frag = document.createDocumentFragment();
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.onclick = onClick;
        frag.appendChild(btn);
    });
    return frag;
};

// --- DOMContentLoaded for all DOM queries and listeners ---
document.addEventListener('DOMContentLoaded', () => {
    // Initialize DOM elements
    categoryDropdown = document.getElementById('category-dropdown');
    
    // Category Dropdown Population
    let categories = Array.from(new Set(gameQuestions.map(q => q.category)));
    categories = categories.filter(cat => cat && cat !== 'undefined');
    if (categoryDropdown) {
        categoryDropdown.innerHTML = '<option value="All">All Categories</option>' +
            categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
    }

    // Show a random fun fact/verse/tip on the start screen
    const funFactBox = document.getElementById('fun-fact-box');
    if (funFactBox) {
        funFactBox.innerText = getRandomFunFact();
    }
    // --- Start Game ---
    window.startGame = function(mode) {
        ensureUserInteraction();
        playSound(audioRiser);
        setTimeout(playBgMusic, 800);
        gameMode = mode;
        playerScore = 0;
        currentStreak = 0;
        longestStreak = 0;
        correctAnswers = 0;
        teamBlueScore = 0;
        teamBlackScore = 0;
        currentQuestionIndex = 0;
        faithTokens = 0;
        doublePointsActive = false;
        freezeTimeActive = false;
        timeRanOut = false; // Reset time out flag
        // --- NEW FOR SEQUENTIAL TEAM TIME ATTACK ---
        timeAttackTeamTurn = 'blue'; // Always start with blue team
        timeAttackBlueTeamFinalScore = 0;
        blueTeamQuestions = []; // Reset blue team questions

        // --- NEW: CHECK FOR TIME ATTACK MODE ---
        isTimeAttackMode = false; // Force disable time attack mode

        // Filter questions by category first
        const selectedCategory = categoryDropdown.value;
        let availableQuestions;
        if (selectedCategory === 'All') {
            availableQuestions = shuffle([...gameQuestions]);
        } else {
            availableQuestions = shuffle(gameQuestions.filter(q => q.category === selectedCategory));
        }

        if (isTimeAttackMode) {
            questions = getAttackModeQuestions(availableQuestions, [], false);
            if (questions === null) return; // Stop if not enough questions
            // SAVE BLUE TEAM'S QUESTIONS FOR EXCLUSION LATER
            if (gameMode === 'teams') {
                blueTeamQuestions = [...questions]; // Save a copy of blue team's questions
                console.log('Blue team questions saved:', blueTeamQuestions.map(q => q.id));
            }
            gameQuestionCount = questions.length;
            maxWagerValue = 20; // Higher stakes
            currentWager = 10;
        } else {
            let numQuestions = 20;
            const gameLengthSelect = document.getElementById('game-length-select');
            if (gameLengthSelect && !isNaN(parseInt(gameLengthSelect.value, 10))) {
                numQuestions = parseInt(gameLengthSelect.value, 10);
            }
            questions = shuffle(availableQuestions).slice(0, numQuestions);
            gameQuestionCount = numQuestions;
            maxWagerValue = 20;
            currentWager = 5;
        }

        if (questions.length === 0) {
            alert('No questions found for this category!');
            return;
        }
        
        gameStartTime = Date.now();
        wagerInput.value = currentWager;
        updateWagerFeedback();
        updateFaithTokens();

        slideOut(container, () => slideIn(gameDiv));
        gameDiv.classList.add('active');
        gameOverDiv.style.display = 'none';
        nextBtn.style.display = 'none';

        if (gameMode === 'solo') {
            scoreSolo.style.display = 'block';
            scoreTeams.style.display = 'none';
            updateSoloStats();
        } else {
            scoreSolo.style.display = 'none';
            scoreTeams.style.display = 'block';
            updateScoreDisplay(); // Use the new function
        }

        // START THE CORRECT TIMER
        if (isTimeAttackMode) {
            startGlobalTimer();
        }
        
        showQuestion();
        exitBtn.style.display = 'block';
        exitBtn.onclick = () => {
            // Optional confirmation for mid-game exits
            if (gameDiv.style.display !== 'none' && currentQuestionIndex > 0 && !confirm('Are you sure you want to exit? Progress will be lost.')) {
                return;
            }

            // Clean up all timers and audio
            clearInterval(timer);
            stopTicking();
            if (isTimeAttackMode) {
                stopGlobalTimer();
            }

            // Reset all game state and UI
            resetState();

            // Hide overlays if present
            const loadingOverlay = document.getElementById('loading-overlay');
            if (loadingOverlay) loadingOverlay.style.display = 'none';
            if (feedbackOverlay) feedbackOverlay.style.display = 'none';

            // Determine current screen and slide out appropriately
            const currentScreen = gameOverDiv.style.display !== 'none' ? gameOverDiv : gameDiv;
            slideOut(currentScreen, () => {
                slideIn(container);
            });

            // Hide both game screens and remove active classes
            gameDiv.style.display = 'none';
            gameOverDiv.style.display = 'none';
            gameDiv.classList.remove('active');
            gameOverDiv.classList.remove('active');

            // Hide exit button
            exitBtn.style.display = 'none';

            // Stop music
            pauseBgMusic();

            // Reset game state to prevent memory leaks
            questions = [];
            currentQuestionIndex = 0;
            playerScore = 0;
            currentStreak = 0;
            longestStreak = 0;
            correctAnswers = 0;
            teamBlueScore = 0;
            teamBlackScore = 0;
            faithTokens = 0;
            powerUpsUsed = 0;
            wrongStreak = 0;
            hadComebackStreak = false;
            answerTimes = [];
            gameStartTime = null;
            gameElapsedTime = 0;
            gameQuestionCount = 0;
            doublePointsActive = false;
            freezeTimeActive = false;
            timeRanOut = false;
            timeAttackTeamTurn = 'blue';
            timeAttackBlueTeamFinalScore = 0;
            blueTeamQuestions = [];

            // Hide encouragement message if present
            const encouragementDiv = document.getElementById('encouragement-message');
            if (encouragementDiv) encouragementDiv.innerText = '';
        };
        // Show a new fun fact on the start screen when returning
        const funFactBox = document.getElementById('fun-fact-box');
        if (funFactBox) {
            funFactBox.innerText = getRandomFunFact();
        }
    };

    // --- Show Question ---
    window.showQuestion = function() {
        resetState();
        hintBtn.disabled = false;
        takeawayBtn.disabled = false;
        doublePointsActive = false;
        freezeTimeActive = false;
        updateFaithTokens();
        // Remove hint/removed classes from previous question
        Array.from(optionsDiv.children).forEach(btn => {
            btn.classList.remove('hint-highlight', 'option-removed');
        });
        // Lightning round logic
        isLightningRound = (currentQuestionIndex > 0 && currentQuestionIndex % roundSize === 0);
        
        // Dynamic wager limits based on game state
        TIME_LIMIT = 20;
        
        if (isLightningRound) {
            // Higher stakes for lightning rounds
            if (gameMode === 'solo') {
                // In solo mode, base max wager on current score (min 40, max 100)
                maxWagerValue = Math.max(40, Math.min(100, Math.floor(playerScore * 0.5)));
            } else {
                // In team mode, fixed higher limit
                maxWagerValue = 40;
            }
        } else {
            if (gameMode === 'solo') {
                // In solo mode, base max wager on current score (min 20, max 50)
                maxWagerValue = Math.max(20, Math.min(50, Math.floor(playerScore * 0.25)));
                
                // Increase max wager for later questions
                if (currentQuestionIndex > questions.length / 2) {
                    maxWagerValue = Math.floor(maxWagerValue * 1.5);
                }
            } else {
                // In team mode, fixed standard limit
                maxWagerValue = 20;
            }
        }
        
        // Update wager input with new limits
        wagerInput.max = maxWagerValue;
        wagerInput.value = Math.min(currentWager, maxWagerValue);
        currentWager = parseInt(wagerInput.value, 10);
        updateWagerFeedback();
        // Wager UI: show for each question
        wagerInput.disabled = false;
        wagerInput.style.background = isLightningRound ? '#ffd700' : '';
        // Question
        if (gameMode === 'teams') {
            if (isTimeAttackMode) {
                // In Time Attack, the turn is fixed for the whole round
                currentTeam = timeAttackTeamTurn; 
            } else {
                // In normal mode, teams alternate questions
                currentTeam = (currentQuestionIndex % 2 === 0) ? 'blue' : 'black';
            }
        }
        if (!questions[currentQuestionIndex]) {
            showEndScreen();
            return;
        }
        const question = questions[currentQuestionIndex];
        // Add category icon/badge
        const icon = CATEGORY_ICONS[question.category] || '';
        questionDiv.innerHTML = `<span class='category-badge'>${icon}</span> ${question.question}`;
        const shuffledOptions = shuffle(question.options);
        optionsDiv.innerHTML = '';
        optionsDiv.appendChild(createOptionButtons(shuffledOptions, selectAnswer));
        if (gameMode === 'solo') updateSoloStats();
        else updateScoreDisplay();
        // START PER-QUESTION TIMER ONLY IF NOT IN TIME ATTACK
        if (!isTimeAttackMode) {
            startTimer();
        }
        explanationDiv.style.display = 'none';
        explanationDiv.innerText = '';
        // Set prophecy mode if needed
        const currentQ = questions[currentQuestionIndex];
        const bgVideo = document.getElementById('background-video');
        if (currentQ && (currentQ.category === 'Prophecy' || currentQ.category === 'The Great Controversy')) {
            document.body.classList.add('prophecy-mode');
            if (bgVideo && bgVideo.src && !bgVideo.src.endsWith('Background%202.mp4') && !bgVideo.src.endsWith('Background 2.mp4')) {
                bgVideo.src = 'Background%202.mp4';
                bgVideo.load();
                bgVideo.play().catch(()=>{});
            }
        } else {
            document.body.classList.remove('prophecy-mode');
            if (bgVideo && bgVideo.src && !bgVideo.src.endsWith('Background.mp4')) {
                bgVideo.src = 'Background.mp4';
                bgVideo.load();
                bgVideo.play().catch(()=>{});
            }
        }
        // Set diet & health theme if needed
        // REMOVE the following lines so health questions use the default theme
        // if (currentQ && currentQ.category === 'Diet & Health') {
        //     document.body.classList.add('diet-health-theme');
        // } else {
        //     document.body.classList.remove('diet-health-theme');
        // }
        // Set Bible theme if needed
        if (currentQ && currentQ.category === 'Bible People') {
            // document.body.classList.add('bible-theme');
        } else {
            // document.body.classList.remove('bible-theme');
        }
        // Fade in new question/options
        setTimeout(() => {
            fadeIn(document.querySelector('.question'));
            fadeIn(document.querySelector('.options'));
        }, 50);
        // Ensure double points and freeze time are only visible in team mode
        if (gameMode === 'solo') {
            doublePointsBtn.style.display = 'none';
            freezeTimeBtn.style.display = 'none';
        } else {
            doublePointsBtn.style.display = '';
            freezeTimeBtn.style.display = '';
        }
        // Clear encouragement message
        let encouragementDiv = document.getElementById('encouragement-message');
        if (!encouragementDiv) {
            encouragementDiv = document.createElement('div');
            encouragementDiv.id = 'encouragement-message';
            encouragementDiv.style.margin = '1.1rem auto 0 auto';
            encouragementDiv.style.textAlign = 'center';
            encouragementDiv.style.fontFamily = "'Bangers', cursive";
            encouragementDiv.style.fontSize = '1.15rem';
            encouragementDiv.style.color = '#2196f3';
            encouragementDiv.style.minHeight = '1.5em';
            optionsDiv.parentNode.appendChild(encouragementDiv);
        }
        encouragementDiv.innerText = '';
    };

    // --- Select Answer ---
    window.selectAnswer = function(e) {
        if (!isTimeAttackMode) {
            stopTicking();
            clearInterval(timer);
        }

        const selectedBtn = e.target;
        const correct = selectedBtn.innerText === questions[currentQuestionIndex].answer;
        showFeedback(correct);
        
        let wager = parseInt(wagerInput.value, 10) || 1;
        const isFriday = (new Date().getDay() === 5);
        if (isFriday) wager *= 2;

        if (correct) {
            playCorrectSound();
            let points = wager * (doublePointsActive ? 2 : 1);
            if (gameMode === 'solo') {
                playerScore += points;
                currentStreak++;
                correctAnswers++;
                if (currentStreak > longestStreak) longestStreak = currentStreak;
                if (currentStreak > 0 && currentStreak % 3 === 0) {
                    faithTokens++;
                    updateFaithTokens(true);
                }
            } else { // Teams
                if (currentTeam === 'blue') teamBlueScore += points;
                else teamBlackScore += points;
            }
            selectedBtn.classList.add('correct');
            selectedBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                selectedBtn.style.transform = '';
            }, 300);
        } else {
            playSound(audioWrong);
            shakeElement(selectedBtn);
            if (gameMode === 'solo') {
                playerScore = Math.max(0, playerScore - wager);
                currentStreak = 0;
            } else { // Teams
                if (currentTeam === 'blue') teamBlueScore = Math.max(0, teamBlueScore - wager);
                else teamBlackScore = Math.max(0, teamBlackScore - wager);
                currentStreak = 0;
            }
            selectedBtn.classList.add('incorrect');
            // Show correct answer with highlight
            Array.from(optionsDiv.children).forEach(btn => {
                if (btn.innerText === questions[currentQuestionIndex].answer) {
                    btn.classList.add('correct', 'highlight-correct');
                }
            });
        }
        
        if (gameMode === 'solo') updateSoloStats();
        else updateScoreDisplay();

        doublePointsActive = false;

        Array.from(optionsDiv.children).forEach(btn => {
            if (btn.innerText === questions[currentQuestionIndex].answer) btn.classList.add('correct', 'highlight-correct');
            btn.disabled = true;
        });

        const currentQ = questions[currentQuestionIndex];
        if (currentQ.explanation) {
            explanationDiv.innerText = '💡 ' + currentQ.explanation;
            explanationDiv.style.display = 'block';
        }

        if (isTimeAttackMode) {
            setTimeout(handleEndOfQuestion, 1500);
        } else {
            nextBtn.style.display = 'block';
        }

        hintBtn.disabled = true;
        takeawayBtn.disabled = true;
        wagerInput.disabled = true;
    };

    // --- Smarter Team Score Display ---
    function updateScoreDisplay() {
        const blueScoreEl = scoreTeams.querySelector('div').children[0];
        const questionCountEl = scoreTeams.querySelector('div').children[1];
        const blackScoreEl = scoreTeams.querySelector('div').children[2];
        const questionsTotal = questions.length;
        questionCountEl.innerText = `${currentQuestionIndex + 1} / ${questionsTotal}`;
        teamTurnIndicator.style.display = 'block'; // Make it visible
        if (isTimeAttackMode && gameMode === 'teams') {
            if (timeAttackTeamTurn === 'black') {
                teamTurnIndicator.innerText = "Black Team's Turn!";
                blueScoreEl.innerText = `Blue's Final: ${timeAttackBlueTeamFinalScore}`;
                blackScoreEl.innerText = `Black: ${teamBlackScore}`;
            } else {
                teamTurnIndicator.innerText = "Blue Team's Turn!";
                blueScoreEl.innerText = `Blue: ${teamBlueScore}`;
                blackScoreEl.innerText = `Black: ${teamBlackScore}`;
            }
        } else {
            teamTurnIndicator.style.display = 'none'; // Not needed for alternating questions
            blueScoreEl.innerText = `Blue: ${teamBlueScore}`;
            blackScoreEl.innerText = `Black: ${teamBlackScore}`;
        }
    }

    // --- End of Question Logic ---
    function handleEndOfQuestion() {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            // The round is over
            stopGlobalTimer();
            if (gameMode === 'teams' && timeAttackTeamTurn === 'blue') {
                // Blue team finished, so save their score and show the intermission screen
                timeAttackBlueTeamFinalScore = teamBlueScore;
                document.getElementById('intermission-score').innerText = timeAttackBlueTeamFinalScore;
                slideOut(gameDiv, () => {
                    slideIn(document.getElementById('intermission-screen'));
                    // Re-attach event listener every time intermission is shown
                    const startNextTurnBtn = document.getElementById('start-next-turn-btn');
                    if (startNextTurnBtn) {
                        startNextTurnBtn.onclick = startNextTeamTurn;
                    }
                });
            } else {
                // It's a solo game or the Black team just finished, so go to the final results
                showEndScreen();
            }
        }
    }

    // --- Start the next team turn (Black Team) ---
    function startNextTeamTurn() {
        console.log('startNextTeamTurn called');
        console.log('Blue team questions available for exclusion:', blueTeamQuestions.length);
        
        // Prepare the game for the Black team
        timeAttackTeamTurn = 'black';
        currentQuestionIndex = 0;
        correctAnswers = 0;
        currentStreak = 0;
        // Don't reset teamBlackScore, let it accumulate from 0

        // Get a fresh set of questions for the Black team
        const selectedCategory = categoryDropdown.value;
        console.log('Selected category:', selectedCategory);
        
        let availableQuestions = (selectedCategory === 'All') 
            ? [...gameQuestions] 
            : gameQuestions.filter(q => q.category === selectedCategory);
        
        console.log('Available questions before exclusion:', availableQuestions.length);
        console.log('Questions to exclude (blue team):', blueTeamQuestions.map(q => q.id));
        
        // Exclude Blue Team's questions, lenient mode
        questions = getAttackModeQuestions(availableQuestions, blueTeamQuestions, true);
        
        if (!questions) {
            console.error('Could not start Black Team\'s turn due to lack of questions.');
            alert("Could not start Black Team's turn due to lack of questions.");
            slideOut(document.getElementById('intermission-screen'), () => slideIn(container));
            return;
        }
        
        console.log('Black team questions loaded:', questions.length, 'questions');
        console.log('Black team question IDs:', questions.map(q => q.id));
        
        // Transition back to the game screen and start the new round
        slideOut(document.getElementById('intermission-screen'), () => {
            console.log('Transitioning to game screen for black team');
            slideIn(gameDiv);
            updateScoreDisplay(); // Update display for the new turn
            startGlobalTimer();
            showQuestion();
        });
    }

    function handleTimeUp() {
        showFeedback(false);
        gameDiv.classList.add('container-shake');
        setTimeout(() => gameDiv.classList.remove('container-shake'), 500);
        
        Array.from(optionsDiv.children).forEach(btn => {
            if (btn.innerText === questions[currentQuestionIndex].answer) btn.classList.add('correct');
            btn.disabled = true;
        });

        nextBtn.style.display = 'block';

        if (gameMode === 'solo') {
            currentStreak = 0;
            updateSoloStats();
        }
        playSound(audioTimeup);
        stopTicking();
    }

    // --- Timer Functions ---
    function startTimer() {
        timeLeft = TIME_LIMIT;
        updateTimerDisplay(timeLeft); // Use the new function
        const progressBar = document.getElementById('progress-bar');
        progressBar.style.width = '0%';
        progressBar.classList.remove('light-up');
        startTicking(); // Start ticking for the whole timer
        timer = setInterval(() => {
            timeLeft--;
            updateTimerDisplay(timeLeft); // Use the new function
            // Progress bar update
            const percent = ((TIME_LIMIT - timeLeft) / TIME_LIMIT) * 100;
            progressBar.style.width = percent + '%';
            if (timeLeft <= 5) {
                progressBar.classList.add('light-up');
                progressBar.classList.add('progress-pulse');
            } else {
                progressBar.classList.remove('light-up');
                progressBar.classList.remove('progress-pulse');
            }
            // Show countdown numbers for last 3 seconds
            if (timeLeft <= 3 && timeLeft > 0) {
                showCountdownNumber(timeLeft);
            }
            if (timeLeft <= 0) {
                clearInterval(timer);
                handleTimeUp();
            }
        }, 1000);
    }

    // --- NEW: Global Timer Functions for Time Attack ---
    function startGlobalTimer() {
        globalTimeLeft = TOTAL_TIME_LIMIT;
        timerDiv.innerText = `Time: ${formatTime(globalTimeLeft)}`;
        timerDiv.parentElement.classList.add('global-timer');

        globalTimer = setInterval(() => {
            globalTimeLeft--;
            timerDiv.innerText = `Time: ${formatTime(globalTimeLeft)}`;
            if (globalTimeLeft <= 0) {
                handleGlobalTimeUp();
            }
        }, 1000);
    }

    function stopGlobalTimer() {
        clearInterval(globalTimer);
        timerDiv.parentElement.classList.remove('global-timer');
    }

    function handleGlobalTimeUp() {
        stopGlobalTimer();
        playSound(audioTimeup);
        timeRanOut = true;

        if (gameMode === 'teams' && timeAttackTeamTurn === 'blue') {
            // Blue team's time ran out, save score and go to intermission
            timeAttackBlueTeamFinalScore = teamBlueScore;
            document.getElementById('intermission-score').innerText = timeAttackBlueTeamFinalScore;
            slideOut(gameDiv, () => {
                slideIn(document.getElementById('intermission-screen'));
                // Re-attach event listener every time intermission is shown
                const startNextTurnBtn = document.getElementById('start-next-turn-btn');
                if (startNextTurnBtn) {
                    startNextTurnBtn.onclick = startNextTeamTurn;
                }
            });
        } else {
            // Solo game time ran out OR Black team's time ran out, so go to final results
            showEndScreen();
        }
    }

    // --- End Screen Functions ---
    // Enhanced celebration effects
    function triggerEnhancedCelebration(type = 'default') {
        // Create celebration overlay
        const celebrationOverlay = document.createElement('div');
        celebrationOverlay.className = 'celebration-overlay';
        document.body.appendChild(celebrationOverlay);
        
        // Remove overlay after animation
        setTimeout(() => {
            celebrationOverlay.remove();
        }, 2000);
        
        // Trigger confetti based on type
        switch(type) {
            case 'perfect':
                triggerConfetti('perfect');
                triggerComicFireworks(true);
                playStreakSound(10); // Epic sound
                break;
            case 'excellent':
                triggerConfetti('streak');
                triggerComicFireworks(false);
                playStreakSound(5);
                break;
            case 'good':
                triggerConfetti('default');
                break;
            default:
                triggerConfetti('default');
        }
    }

    // Enhanced end game function with better mobile experience
    function showEndScreen() {
        stopGlobalTimer(); // Ensure global timer is stopped
        slideOut(gameDiv, () => slideIn(gameOverDiv));
        gameOverDiv.classList.add('active');
        exitBtn.style.display = 'block';

        // Hide all result sections initially to prevent overlap
        resultsSolo.style.display = 'none';
        resultsTeams.style.display = 'none';
        document.getElementById('results-solo-time').style.display = 'none';
        document.getElementById('results-teams-time').style.display = 'none';

        if (isTimeAttackMode) {
            gameElapsedTime = timeRanOut ? TOTAL_TIME_LIMIT : (Date.now() - gameStartTime) / 1000;
            const timeTakenStr = `Time Taken: ${formatTime(Math.round(gameElapsedTime))}`;

            if (gameMode === 'solo') {
                resultsSolo.style.display = 'block';
                resultsSolo.children[0].innerText = `Your Score: ${playerScore}`;
                const attempted = timeRanOut ? currentQuestionIndex + 1 : 30;
                resultsSolo.children[1].innerText = `Correct Answers: ${correctAnswers}/${attempted}`;
                resultsSolo.children[2].innerText = `Longest Streak: ${longestStreak}`;
                const timeEl = document.getElementById('results-solo-time');
                timeEl.innerText = timeTakenStr;
                timeEl.style.display = 'block';
                resultsSolo.querySelector('.stars').style.display = 'none';
                achievementTitle.style.display = 'none';
            } else { // Teams Time Attack
                resultsSolo.style.display = 'none';
                resultsTeams.style.display = 'block';
                
                // USE THE SAVED BLUE SCORE FOR THE FINAL DISPLAY
                resultsTeams.children[0].innerText = `Blue: ${timeAttackBlueTeamFinalScore} pts`;
                resultsTeams.children[1].innerText = `Black: ${teamBlackScore} pts`;
                
                // Determine winner by comparing the final scores
                let winnerText = '';
                if (timeAttackBlueTeamFinalScore > teamBlackScore) {
                    winnerText = '🏆 Blue Team Triumphs!';
                } else if (teamBlackScore > timeAttackBlueTeamFinalScore) {
                    winnerText = '🏆 Black Team Dominates!';
                } else {
                    winnerText = "🤝 It's a Tie!";
                }
                teamWinner.innerText = winnerText;
                
                // You can hide the time element here as it's not the primary win condition
                document.getElementById('results-teams-time').style.display = 'none';
            }

        } else {
            // ... all of your existing showEndScreen logic for normal mode goes here
            // (Make sure to wrap it in this else block)
            // --- Existing showEndScreen logic below ---
            // (Copy/paste or keep your original code here)
            slideOut(gameDiv, () => slideIn(gameOverDiv));
            gameOverDiv.classList.add('active');
            exitBtn.style.display = 'block';
            
            if (gameMode === 'solo') {
                resultsSolo.style.display = 'block';
                resultsTeams.style.display = 'none';
                
                // Calculate performance metrics
                const avgTime = answerTimes.length ? (answerTimes.reduce((a, b) => a + b, 0) / answerTimes.length) : 0;
                const correctPct = Math.round((correctAnswers / questions.length) * 100);
                
                const stats = {
                    completed: true,
                    correctAnswers,
                    totalQuestions: questions.length,
                    correctPct,
                    longestStreak,
                    avgTime,
                    powerUpsUsed,
                    faithTokens,
                    comeback: hadComebackStreak,
                };
                
                // Enhanced celebration based on performance
                if (correctPct >= 95) {
                    triggerEnhancedCelebration('perfect');
                } else if (correctPct >= 80) {
                    triggerEnhancedCelebration('excellent');
                } else if (correctPct >= 60) {
                    triggerEnhancedCelebration('good');
                }
                
                // Update results with enhanced animations
                setTimeout(() => {
                    resultsSolo.children[0].innerText = `Your Score: ${playerScore}`;
                    resultsSolo.children[0].classList.add('score-animate-up');
                }, 200);
                
                setTimeout(() => {
                    resultsSolo.children[1].innerText = `Correct Answers: ${correctAnswers}/${questions.length}`;
                    resultsSolo.children[1].classList.add('fade-in');
                }, 400);
                
                setTimeout(() => {
                    resultsSolo.children[2].innerText = `Longest Streak: ${longestStreak}`;
                    resultsSolo.children[2].classList.add('fade-in');
                }, 600);
                
                // Calculate and display stars with animation
                const stars = calculateStars(stats);
                let starStr = '';
                for (let i = 0; i < stars; i++) starStr += '★';
                for (let i = stars; i < 5; i++) starStr += '☆';
                
                setTimeout(() => {
                    resultsSolo.querySelector('.stars').innerText = starStr;
                    resultsSolo.querySelector('.stars').classList.add('score-animate-up');
                }, 800);
                
                // Enhanced achievement display
                const unlocked = ACHIEVEMENTS.filter(a => a.check(stats));
                if (unlocked.length > 0) {
                    setTimeout(() => {
                        achievementTitle.innerText = `🏆 Achievement Unlocked: ${unlocked[0].name}!`;
                        achievementTitle.classList.add('fade-in');
                    }, 1000);
                }
                
                // Enhanced leaderboard functionality
                handleLeaderboard();
                
            } else {
                // Enhanced team mode end screen
                resultsSolo.style.display = 'none';
                resultsTeams.style.display = 'block';
                
                // Determine winner with enhanced celebration
                let winnerText = '';
                let celebrationType = 'good';
                
                if (teamBlueScore > teamBlackScore) {
                    winnerText = ' Blue Team Triumphs!';
                    celebrationType = 'excellent';
                } else if (teamBlackScore > teamBlueScore) {
                    winnerText = '⚫ Black Team Dominates!';
                    celebrationType = 'excellent';
                } else {
                    winnerText = '🤝 Epic Tie - Rematch Needed!';
                    celebrationType = 'good';
                }
                
                // Animate team results
                setTimeout(() => {
                    resultsTeams.children[0].innerText = `Blue: ${teamBlueScore}`;
                    resultsTeams.children[0].classList.add(teamBlueScore > teamBlackScore ? 'score-animate-up' : 'fade-in');
                }, 200);
                
                setTimeout(() => {
                    resultsTeams.children[1].innerText = `Black: ${teamBlackScore}`;
                    resultsTeams.children[1].classList.add(teamBlackScore > teamBlueScore ? 'score-animate-up' : 'fade-in');
                }, 400);
                
                setTimeout(() => {
                    teamWinner.innerText = winnerText;
                    teamWinner.classList.add('fade-in');
                    triggerEnhancedCelebration(celebrationType);
                }, 600);
            }
            
            playBgMusic();
            
            // Show random fun fact with animation
            const funFactBoxEnd = document.getElementById('fun-fact-box-end');
            if (funFactBoxEnd) {
                setTimeout(() => {
                    funFactBoxEnd.innerText = getRandomFunFact();
                    funFactBoxEnd.classList.add('fade-in');
                }, 1200);
            }
        }
    }

    // Enhanced leaderboard handling
    function handleLeaderboard() {
        const leaderboardSection = document.getElementById('leaderboard');
        const leaderboardList = leaderboardSection.querySelector('.leaderboard-list');
        const leaderboardFilter = document.getElementById('leaderboard-filter');
        const leaderboardSelect = document.getElementById('leaderboard-question-count');
        
        leaderboardSection.style.display = 'block';
        leaderboardFilter.style.display = 'block';
        leaderboardList.innerHTML = '<li>Loading leaderboard...</li>';
        
        // Set filter to current game question count
        if (leaderboardSelect) leaderboardSelect.value = gameQuestionCount;
        
        // Get player name with better mobile experience
        let playerName = localStorage.getItem('playerName') || '';
        if (!playerName) {
            // Use a more mobile-friendly prompt
            playerName = prompt('🏆 Enter your name for the leaderboard:', 'Anonymous Player');
            if (playerName && playerName.trim()) {
                localStorage.setItem('playerName', playerName.trim());
                playerName = playerName.trim();
            } else {
                playerName = 'Anonymous Player';
            }
        }
        
        // Enhanced leaderboard data handling
        try {
            const leaderboardData = getLeaderboardData(gameQuestionCount);
            const newEntry = {
                name: playerName,
                score: playerScore,
                correctAnswers,
                totalQuestions: gameQuestionCount,
                date: new Date().toISOString(),
                time: gameElapsedTime,
                questionCount: gameQuestionCount
            };
            
            leaderboardData.push(newEntry);
            leaderboardData.sort((a, b) => b.score - a.score);
            
            // Keep only top 10
            const topScores = leaderboardData.slice(0, 10);
            saveLeaderboardData(gameQuestionCount, topScores);
            
            // Render with animations
            setTimeout(() => {
                renderLeaderboard(topScores, playerName);
            }, 500);
            
        } catch (error) {
            console.error('Error handling leaderboard:', error);
            leaderboardList.innerHTML = '<li>Unable to load leaderboard</li>';
        }
    }

    // Enhanced leaderboard rendering with animations
    function renderLeaderboard(data, currentPlayerName) {
        const leaderboardList = document.querySelector('.leaderboard-list');
        leaderboardList.innerHTML = '';
        
        if (data.length === 0) {
            leaderboardList.innerHTML = '<li>No scores yet - be the first!</li>';
            return;
        }
        
        data.forEach((entry, idx) => {
            const dateStr = new Date(entry.date).toLocaleDateString('en-CA');
            
            // Trophy icons for top 3
            let icon = '';
            if (idx === 0) icon = '🥇';
            else if (idx === 1) icon = '🥈';
            else if (idx === 2) icon = '';
            else icon = `${idx + 1}.`;
            
            // Check if current player
            const isCurrent = entry.name === currentPlayerName && 
                             entry.score === playerScore && 
                             entry.questionCount === gameQuestionCount;
            
            const li = document.createElement('li');
            li.className = `leaderboard-item ${isCurrent ? 'current-player' : ''}`;
            li.innerHTML = `
                <span class="leaderboard-rank">${icon}</span>
                <span class="leaderboard-name">${entry.name}</span>
                <span class="leaderboard-score">${entry.score}</span>
                <span class="leaderboard-date">${dateStr}</span>
            `;
            
            // Add with staggered animation
            setTimeout(() => {
                li.classList.add('fade-in');
                leaderboardList.appendChild(li);
            }, idx * 100);
        });
    }

    // Enhanced mobile touch handling for options
    function enhanceMobileTouch() {
        // Add touch feedback for mobile devices
        if ('ontouchstart' in window) {
            document.addEventListener('touchstart', function(e) {
                if (e.target.classList.contains('comic-button') || 
                    e.target.classList.contains('options')) {
                    e.target.style.transform = 'scale(0.98)';
                }
            });
            
            document.addEventListener('touchend', function(e) {
                if (e.target.classList.contains('comic-button') || 
                    e.target.classList.contains('options')) {
                    setTimeout(() => {
                        e.target.style.transform = '';
                    }, 100);
                }
            });
        }
    }

    // Initialize mobile enhancements
    enhanceMobileTouch();
    
    // Add CSS animation for fadeInOut
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translateX(-50%) translateY(-20px) scale(0.8); }
            20% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1.1); }
            80% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
            100% { opacity: 0; transform: translateX(-50%) translateY(20px) scale(0.9); }
        }
    `;
    document.head.appendChild(style);

    // --- Hint and Take Away Two logic ---
    hintBtn.onclick = function() {
        if (hintBtn.disabled) return;
        
        // Add visual feedback for the hint button itself
        hintBtn.classList.add('hint-highlight');
        setTimeout(() => hintBtn.classList.remove('hint-highlight'), 800);
        
        // Deduct 3 points
        if (gameMode === 'solo') {
            playerScore = Math.max(0, playerScore - 3);
            updateSoloStats();
        } else {
            if (currentTeam === 'blue') {
                teamBlueScore = Math.max(0, teamBlueScore - 3);
            } else {
                teamBlackScore = Math.max(0, teamBlackScore - 3);
            }
            updateScoreDisplay();
        }
        
        // Highlight correct option with improved animation
        Array.from(optionsDiv.children).forEach(btn => {
            if (btn.innerText === questions[currentQuestionIndex].answer) {
                // First remove any existing highlight to reset animation
                btn.classList.remove('hint-highlight');
                void btn.offsetWidth; // Force reflow
                
                // Add highlight with improved animation
                btn.classList.add('hint-highlight');
                
                // Add a subtle glow to the entire options container
                optionsDiv.style.boxShadow = '0 0 20px 5px rgba(255, 215, 0, 0.3)';
                setTimeout(() => {
                    optionsDiv.style.boxShadow = '';
                    btn.classList.remove('hint-highlight');
                }, 2000);
            }
        });
        
        hintBtn.disabled = true;
    };

    takeawayBtn.onclick = function() {
        if (takeawayBtn.disabled) return;
        
        // Add visual feedback for the takeaway button itself
        takeawayBtn.classList.add('hint-highlight');
        setTimeout(() => takeawayBtn.classList.remove('hint-highlight'), 800);
        
        // Deduct 2 points
        if (gameMode === 'solo') {
            playerScore = Math.max(0, playerScore - 2);
            updateSoloStats();
        } else {
            if (currentTeam === 'blue') {
                teamBlueScore = Math.max(0, teamBlueScore - 2);
            } else {
                teamBlackScore = Math.max(0, teamBlackScore - 2);
            }
            updateScoreDisplay();
        }
        
        // Remove two incorrect options with staggered animation for better visual effect
        const incorrectBtns = Array.from(optionsDiv.children).filter(btn =>
            btn.innerText !== questions[currentQuestionIndex].answer &&
            !btn.classList.contains('option-removed')
        );
        
        const toRemove = incorrectBtns.sort(() => 0.5 - Math.random()).slice(0, 2);
        
        // Stagger the animations for better visual effect
        if (toRemove.length > 0) {
            setTimeout(() => {
                toRemove[0].classList.add('option-removed');
            }, 0);
        }
        
        if (toRemove.length > 1) {
            setTimeout(() => {
                toRemove[1].classList.add('option-removed');
            }, 200);
        }
        
        takeawayBtn.disabled = true;
    };

    doublePointsBtn.onclick = function() {
        if (faithTokens < 1 || doublePointsActive) return;
        faithTokens--;
        doublePointsActive = true;
        updateFaithTokens(true);
        doublePointsBtn.classList.add('hint-highlight');
        setTimeout(() => doublePointsBtn.classList.remove('hint-highlight'), 1200);
        powerUpsUsed++;
    };

    freezeTimeBtn.onclick = function() {
        if (faithTokens < 1 || freezeTimeActive) return;
        faithTokens--;
        powerUpsUsed++;
        freezeTimeActive = true;
        updateFaithTokens(true);
        freezeTimeBtn.classList.add('hint-highlight');
        timerDiv.style.color = '#2196f3';
        timerDiv.style.textShadow = '0 0 10px #2196f3';

        const timerToPause = isTimeAttackMode ? globalTimer : timer;
        clearInterval(timerToPause);
        
        setTimeout(() => {
            freezeTimeBtn.classList.remove('hint-highlight');
            timerDiv.style.color = '';
            timerDiv.style.textShadow = '';
            
            if (isTimeAttackMode) {
                startGlobalTimer(); // Resume global timer
            } else {
                startTimer();
            }
            freezeTimeActive = false;
            updateFaithTokens();
        }, 5000);
    };

    // Removed revive button onclick function

    // Attach event listeners for game start
    soloBtn.onclick = () => {
        exitBtn.style.display = 'block';
        startGame('solo');
    };
    teamsBtn.onclick = () => {
        exitBtn.style.display = 'block';
        startGame('teams');
    };
    nextBtn.onclick = () => {
        // Hide explanation first if it's visible
        if (explanationDiv.style.display === 'block') {
            explanationDiv.style.opacity = '0';
            setTimeout(() => {
                explanationDiv.style.display = 'none';
                explanationDiv.style.opacity = '1';
            }, 300);
        }
        // Determine if next question is prophecy
        const nextQ = questions[currentQuestionIndex + 1];
        const isProphecy = nextQ && (nextQ.category === 'Prophecy' || nextQ.category === 'The Great Controversy');
        // Show glitch effect and play sound, then fade out and show next
        showGlitchTransition(isProphecy, () => {
            fadeOut(document.querySelector('.question'), () => {
                fadeOut(document.querySelector('.options'), () => {
                    currentQuestionIndex++;
                    if (currentQuestionIndex < questions.length) {
                        setTimeout(() => {
                            showQuestion();
                        }, 100);
                    } else showEndScreen();
                });
            });
        });
    };
    playAgainBtn.onclick = () => {
        if (gameMode === 'solo') startGame('solo');
        else startGame('teams');
    };
    downloadBtn.onclick = downloadAnswers;
    const startNextTurnBtn = document.getElementById('start-next-turn-btn');
    if(startNextTurnBtn) {
        console.log('Attaching event listener to Start Your Turn button');
        startNextTurnBtn.onclick = startNextTeamTurn;
    } else {
        console.warn('Start Your Turn button not found in DOM');
    }
});

// --- High Contrast Mode Toggle ---
const contrastToggle = document.getElementById('contrast-toggle');
if (contrastToggle) {
    contrastToggle.onclick = () => {
        document.body.classList.toggle('high-contrast');
        localStorage.setItem('highContrast', document.body.classList.contains('high-contrast'));
    };
    // Restore preference
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
}

// --- Accessibility: Keyboard navigation for main controls ---
[soloBtn, teamsBtn, hintBtn, takeawayBtn, doublePointsBtn, freezeTimeBtn, nextBtn, exitBtn, muteToggle, contrastToggle].forEach(btn => {
    if (btn) btn.tabIndex = 0;
});

// --- Timer pulse for low time ---
function updateTimerDisplay(timeLeft) {
    timerDiv.innerText = `Time: ${timeLeft}`;
    if (timeLeft <= 3) {
        timerDiv.classList.add('low-time');
    } else {
        timerDiv.classList.remove('low-time');
    }
}

// --- Service Worker Registration ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}

// --- Add ripple effect to buttons ---
function addRippleEffect(e) {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}
function attachRippleToButtons() {
    document.querySelectorAll('.comic-button, .options button').forEach(btn => {
        btn.removeEventListener('click', addRippleEffect);
        btn.addEventListener('click', addRippleEffect);
    });
}
// --- Add pop/bounce effect to answer selection ---
function popButton(btn) {
    btn.classList.remove('button-pop');
    void btn.offsetWidth;
    btn.classList.add('button-pop');
}
// --- Add glow/pulse to Next button when available ---
function setNextButtonGlow(on) {
    if (on) nextBtn.classList.add('glow-pulse');
    else nextBtn.classList.remove('glow-pulse');
}
// --- Animate progress bar for question count ---
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        const percent = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = percent + '%';
    }
}
// --- Patch into existing logic ---
// After DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachRippleToButtons);
} else {
    attachRippleToButtons();
}
// Patch showQuestion to call attachRippleToButtons and updateProgressBar
const origShowQuestion = window.showQuestion;
window.showQuestion = function() {
    origShowQuestion.apply(this, arguments);
    attachRippleToButtons();
    updateProgressBar();
    setNextButtonGlow(false);
};
// Patch answer selection to pop/bounce and enable Next button glow
const origSelectAnswer = window.selectAnswer;
window.selectAnswer = function(e) {
    const btn = e.target;
    popButton(btn);
    origSelectAnswer.apply(this, arguments);
    setNextButtonGlow(true);
};
// Patch Next button to remove glow on click
nextBtn.addEventListener('click', () => setNextButtonGlow(false));

// --- Animated backgrounds and category-based backgrounds ---
function setCategoryBackground(category) {
    document.body.classList.remove('prophecy-bg', 'diet-health-bg', 'animated-gradient');
    const video = document.getElementById('background-video');
    if (video) {
        video.style.filter = '';
        video.style.opacity = '0.45';
        video.style.mixBlendMode = 'screen';
        // Always show video, but adjust for prophecy
        if (category === 'Prophecy' || category === 'The Great Controversy') {
            video.style.filter = 'contrast(1.5) brightness(0.7) grayscale(0.2)';
            video.style.opacity = '0.7';
            video.style.mixBlendMode = 'multiply';
            // Add a dark overlay for drama
            if (!document.getElementById('prophecy-overlay')) {
                const overlay = document.createElement('div');
                overlay.id = 'prophecy-overlay';
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100vw';
                overlay.style.height = '100vh';
                overlay.style.background = 'rgba(10,10,20,0.55)';
                overlay.style.zIndex = '1';
                overlay.style.pointerEvents = 'none';
                document.body.appendChild(overlay);
            }
        } else {
            video.style.filter = '';
            video.style.opacity = '0.45';
            video.style.mixBlendMode = 'screen';
            const overlay = document.getElementById('prophecy-overlay');
            if (overlay) overlay.remove();
        }
        // Ensure video is always looped and playing
        if (video.paused) video.play();
        video.loop = true;
    }
}
// --- Simple animated particles for background canvas ---
function startParticles() {
    const canvas = document.getElementById('background-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = window.innerWidth, h = window.innerHeight;
    canvas.width = w; canvas.height = h;
    let particles = Array.from({length: 24}, () => ({
        x: Math.random()*w, y: Math.random()*h,
        r: Math.random()*2+1, dx: (Math.random()-0.5)*0.5, dy: (Math.random()-0.5)*0.5,
        color: `hsla(${Math.random()*360},80%,70%,0.7)`
    }));
    function animate() {
        ctx.clearRect(0,0,w,h);
        for (let p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 2*Math.PI);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.x += p.dx; p.y += p.dy;
            if (p.x<0||p.x>w) p.dx*=-1;
            if (p.y<0||p.y>h) p.dy*=-1;
        }
        requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', () => {
        w = window.innerWidth; h = window.innerHeight;
        canvas.width = w; canvas.height = h;
    });
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startParticles);
} else {
    startParticles();
}
// --- Patch showQuestion to set category background ---
const origShowQuestion2 = window.showQuestion;
window.showQuestion = function() {
    origShowQuestion2.apply(this, arguments);
    const q = questions[currentQuestionIndex];
    setCategoryBackground(q && q.category);
};
// --- Simple animated VHS grain effect for background canvas ---
function startVHSGrain() {
    const canvas = document.getElementById('background-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = window.innerWidth, h = window.innerHeight;
    canvas.width = w; canvas.height = h;
    function drawGrain() {
        const imageData = ctx.createImageData(w, h);
        for (let i = 0; i < imageData.data.length; i += 4) {
            const shade = 16 + Math.floor(Math.random() * 32); // subtle grain
            imageData.data[i] = shade;
            imageData.data[i+1] = shade;
            imageData.data[i+2] = shade;
            imageData.data[i+3] = 18 + Math.floor(Math.random() * 22); // low alpha
        }
        ctx.putImageData(imageData, 0, 0);
        // Add scanlines
        ctx.save();
        ctx.globalAlpha = 0.08;
        ctx.fillStyle = '#fff';
        for (let y = 0; y < h; y += 3) {
            ctx.fillRect(0, y, w, 1);
        }
        ctx.restore();
        // Add subtle flicker
        canvas.style.opacity = 0.7 + Math.random() * 0.08;
        requestAnimationFrame(drawGrain);
    }
    drawGrain();
    window.addEventListener('resize', () => {
        w = window.innerWidth; h = window.innerHeight;
        canvas.width = w; canvas.height = h;
    });
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startVHSGrain);
} else {
    startVHSGrain();
}

// --- Glitchy Transition Overlay ---
function showGlitchTransition(isProphecy, cb) {
    // Remove any existing glitch overlays
    const old = document.getElementById('glitch-transition-overlay');
    if (old) old.remove();
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'glitch-transition-overlay';
    overlay.className = 'glitch-effect';
    overlay.innerText = '✝️';
    overlay.style.position = 'fixed';
    overlay.style.left = '50%';
    overlay.style.top = '50%';
    overlay.style.transform = 'translate(-50%, -50%)';
    overlay.style.fontSize = '10vw';
    overlay.style.zIndex = 9999;
    overlay.style.pointerEvents = 'none';
    overlay.style.opacity = '0.93';
    overlay.style.textAlign = 'center';
    overlay.style.userSelect = 'none';
    document.body.appendChild(overlay);
    // Play sound
    playSound(isProphecy ? audioTransition2 : audioTransition);
    // Remove after 650ms
    setTimeout(() => {
        overlay.remove();
        if (cb) cb();
    }, 650);
}

explanationDiv.style.fontSize = '1.35rem';
explanationDiv.style.background = 'rgba(255,255,255,0.92)';
explanationDiv.style.color = '#222';
explanationDiv.style.border = '2.5px solid #ffd700';
explanationDiv.style.borderRadius = '16px';
explanationDiv.style.boxShadow = '0 2px 18px #ffd70044, 0 0 8px #fff8';
explanationDiv.style.padding = '1.2rem 1.5rem';
explanationDiv.style.margin = '1.5rem auto 0 auto';
explanationDiv.style.maxWidth = '95%';
explanationDiv.style.textAlign = 'left';
explanationDiv.style.display = 'none';