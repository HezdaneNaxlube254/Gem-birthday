const TIMING = {
    ch1: { start: 1, end: 35, behavior: 'A', lyricsOffset: 0, lyricsSpeed: 100, textSpeed: 9 },
    ch2: { start: 36, end: 69, behavior: 'B', lyricsOffset: 170, lyricsSpeed: 90, textSpeed: 35 },
    ch3: { start: 70, end: 101, behavior: 'A', lyricsOffset: 69, lyricsSpeed: 100, textSpeed: 35 },
    ch4: { start: 102, end: 138, behavior: 'B', lyricsOffset: 830, lyricsSpeed: 150, textSpeed: 35 },
    ch5: { start: 139, end: 172, behavior: 'A', lyricsOffset: 970, lyricsSpeed: 100, textSpeed: 35 },
    ch6: { start: 173, end: 207, behavior: 'B', lyricsOffset: 1300, lyricsSpeed: 180, textSpeed: 35 },
    ch7: { start: 208, end: 260, behavior: 'A', lyricsOffset: 207, lyricsSpeed: 100, textSpeed: 35 },
    ch8: { start: 261, end: 290, behavior: 'B', lyricsOffset: 2000, lyricsSpeed: 120, textSpeed: 35 },
    ch9: { start: 291, end: 315, behavior: 'C', lyricsOffset: 290, lyricsSpeed: 30, textSpeed: 35 }
};

const PLAYBACK_RATE = 0.9;
const TOTAL_DURATION = 315;
const IMAGE_DURATION = 5;

// Chat messages that appear at specific times
const MESSAGES = [
    { time: 5, text: 'Happy Birthday! 🎂 The day is finally here and my heart is full.', sender: 'Nashon' },
    { time: 11, text: 'Today is all about celebrating you and every bright thing you bring into the world.', sender: 'Nashon' },
    { time: 17, text: 'Wishing you joy, laughter, and a year of more reasons to smile.', sender: 'Nashon' },
    { time: 23, text: 'Every birthday is a new chapter. I hope this one feels fresh and wonderful.', sender: 'Nashon' },
    { time: 29, text: 'May today be a reminder of how many people are cheering for you.', sender: 'Nashon' },
    { time: 35, text: 'The best gift is having more time to celebrate the amazing person you are.', sender: 'Nashon' },
    { time: 41, text: 'Here is to cake, candles, and moments that stay with you all year.', sender: 'Nashon' },
    { time: 47, text: 'Your energy lights up any room. Today is the perfect reason to let it shine.', sender: 'Nashon' },
    { time: 53, text: 'May this next year be full of new chances, big wins, and calm rest.', sender: 'Nashon' },
    { time: 59, text: 'Celebrating you with a little music, memories, and a lot of good wishes.', sender: 'Nashon' },
    { time: 65, text: 'I hope today feels easy, bright, and exactly the way you want it.', sender: 'Nashon' },
    { time: 72, text: 'Another chapter of your story, each moment a treasure.', sender: 'Nashon' },
    { time: 78, text: 'A few moments from your journey, presented with care and grace.', sender: 'Nashon' },
    { time: 84, text: 'Every delicious birthday bite should remind you of good days ahead.', sender: 'Nashon' },
    { time: 90, text: 'Good friends, good music, and a happy day — that is what today is for.', sender: 'Nashon' },
    { time: 96, text: 'Minimal fuss, maximum celebration. That is the simple birthday wish for you.', sender: 'Nashon' },
    { time: 102, text: 'Take a deep breath and enjoy this day in the way that feels right to you.', sender: 'Nashon' },
    { time: 108, text: 'Your birthday deserves warm thoughts, sweet moments, and calm energy.', sender: 'Nashon' },
    { time: 114, text: 'I am grateful for the chance to say happy birthday and mean it fully.', sender: 'Nashon' },
    { time: 120, text: 'This song is a small way of honoring your day with rhythm and feeling.', sender: 'Nashon' },
    { time: 126, text: 'Birthday joys should be easy to find — like a smile, a laugh, or a good memory.', sender: 'Nashon' },
    { time: 132, text: 'Your strengths, your kindness, and your spirit make today worth celebrating.', sender: 'Nashon' },
    { time: 138, text: 'A new year is ahead: may it feel steady, exciting, and bright in equal measure.', sender: 'Nashon' },
    { time: 144, text: 'If today brings you rest, fun, or a perfect quiet moment, it is a win.', sender: 'Nashon' },
    { time: 150, text: 'This is not a rush — every message is meant to feel close to your heart.', sender: 'Nashon' },
    { time: 156, text: 'A gentle reminder that you are valued today and every day after.', sender: 'Nashon' },
    { time: 162, text: 'Birthday lights are brighter when shared with people who believe in you.', sender: 'Nashon' },
    { time: 168, text: 'Celebrate the wins from the past year and the opportunities that are coming.', sender: 'Nashon' },
    { time: 174, text: 'This message is for the part of you that deserves extra kindness today.', sender: 'Nashon' },
    { time: 180, text: 'May your day include a memory that you want to keep on repeat.', sender: 'Nashon' },
    { time: 186, text: 'Your birthday should feel like the good things you already are, amplified.', sender: 'Nashon' },
    { time: 192, text: 'A simple wish: happy birthday, and may everything feel just a little easier.', sender: 'Nashon' },
    { time: 198, text: 'Celebrate the progress, the comfort, and the people who make life brighter.', sender: 'Nashon' },
    { time: 204, text: 'There is plenty of time in this song for more warm thoughts and quiet cheer.', sender: 'Nashon' },
    { time: 210, text: 'The story keeps building. Your smile matters more than perfect timing.', sender: 'Nashon' },
    { time: 216, text: 'This birthday is a moment worth holding close as the year moves forward.', sender: 'Nashon' },
    { time: 222, text: 'Think of today as a small celebration of all the good you bring into the room.', sender: 'Nashon' },
    { time: 228, text: 'A birthday wish for calm mornings, calm evenings, and a happy in-between.', sender: 'Nashon' },
    { time: 234, text: 'Not just today, not just on your birthday, but every single day.', sender: 'Nashon' },
    { time: 240, text: 'There are so many reasons to look forward to the year ahead of you.', sender: 'Nashon' },
    { time: 246, text: 'A quick note: you are capable, you are admired, and today is yours.', sender: 'Nashon' },
    { time: 252, text: 'I hope the next 12 months bring more peace, more joy, and more clear dreams.', sender: 'Nashon' },
    { time: 258, text: 'Wishing you all the best energy and the best chances to feel happy.', sender: 'Nashon' },
    { time: 264, text: 'Your birthday deserves thoughtful moments, good company, and steady joy.', sender: 'Nashon' },
    { time: 270, text: 'May today be the start of a year that feels balanced and bright.', sender: 'Nashon' },
    { time: 276, text: 'A celebration without pressure — just enough sparkle to feel special.', sender: 'Nashon' },
    { time: 282, text: 'Sending a calm, cheerful birthday wish with every note that plays.', sender: 'Nashon' },
    { time: 288, text: 'The best part of today is you — enjoy it in the way that suits you best.', sender: 'Nashon' },
    { time: 294, text: 'Happy birthday once more. I hope it leaves a warm, easy feeling behind.', sender: 'Nashon' },
    { time: 300, text: 'Keep shining. Keep smiling. Keep being the amazing person you are.', sender: 'Nashon' }
];

const CHAPTER_CONTENT = {

    ch1: {
        sender: 'ikayn.fly',
        status: 'online',
        profileImage: 'mine/m1.jpg',
        bottomText: 'A gentle start to a heartfelt journey.',
        memories: [
            { title: 'The first hello', text: 'That first hello marked the start of a birthday year filled with bright possibilities and steady energy from you.' },
            { title: 'Late night wish', text: 'Late at night, the birthday wish still stands — happy 22nd birthday, OT. This celebration is long overdue and completely deserved.' }
        ]
    },
    ch2: {
        sender: '~',
        status: 'online',
        profileImage: 'mine/m2.jpg',
        bottomText: 'Let these memories warm your heart.',
        memories: [
            { title: 'Guided mornings', text: 'Every birthday morning, you arrive with clarity and purpose.' },
            { title: 'Revealed plans', text: 'May this birthday unfold beautifully for you — every plan ahead taking shape wonderfully.' },
            { title: 'Walk in courage', text: 'Birthday courage to walk boldly through every door the year ahead opens for you.' },
            { title: 'Calm energy', text: 'Your calm, confident energy makes every challenge feel manageable for everyone around you.' },
            { title: 'Peaceful endings', text: 'May every birthday sunset bring a peaceful close to a day you have lived fully.' }
        ]
    },
    ch3: {
        sender: 'Nashkay',
        status: 'sending...',
        profileImage: 'mine/m3.jpg',
        bottomText: 'Every memory holds a piece of her story.',
        memories: [
            { title: 'The first adventure', text: 'Every adventure you take this year will be filled with gladness — your brightest birthday chapter yet.' },
            { title: 'That laugh', text: 'A birthday year filled with your laughter — laughter that lights up every room you walk into.' }
        ]
    },
    ch4: {
        sender: 'N.k',
        status: 'online',
        profileImage: 'mine/m4.jpg',
        bottomText: 'Pause and feel the joy in these moments.',
        memories: [
            { title: 'Moonlit moment', text: 'Moments where your quiet confidence reminds everyone just how far you have come on your birthday journey.' },
            { title: 'Genuine encouragement', text: 'Your encouragement in that moment showed how naturally uplifting you are — a true birthday gift to everyone around you.' },
            { title: 'Unexpected surprise', text: 'A small surprise that showed how thoughtful and present you always are, birthday after birthday.' },
            { title: 'Future plans', text: 'Talking about the road ahead felt like the start of your most exciting birthday chapter yet.' }
        ]
    },
    ch5: {
        sender: 'Ing.',
        status: 'online',
        profileImage: 'mine/m5.jpg',
        bottomText: 'More memories unfolding just for her.',
        memories: [
            { title: 'The quiet day', text: 'A calm birthday moment that showed how much warmth and grace you carry naturally.' },
            { title: 'Her kindness', text: 'Your kindness has a way of making everyone around you feel seen and valued — especially on your birthday.' }
        ]
    },
    ch6: {
        sender: 'Nashon',
        status: 'online',
        profileImage: 'mine/m6.jpg',
        bottomText: 'Photos speak louder than words right now.',
        memories: [
            { title: 'Captured smiles', text: 'A birthday photo that captured just how powerful your presence felt that day.' },
            { title: 'Unexpected laughter', text: 'A burst of birthday laughter that showed how freely you bring joy into any room.' },
            { title: 'Quiet confidence', text: 'The picture reflected the calm confidence you carry into every birthday and every space.' },
            { title: 'Bold adventure', text: 'That birthday adventure became one of the most memorable parts of your story this year.' },
            { title: 'Little details', text: 'The small details you noticed that day are the memories that stay with people longest — a birthday gift in itself.' }
        ]
    },
    ch7: {
        sender: 'Nashkay',
        status: 'typing...',
        profileImage: 'mine/m7.jpg',
        bottomText: 'The final words before the big moment.',
        memories: [
            { title: 'The defining moment', text: 'A birthday moment when everything clicked and your strength was unmistakable to everyone watching.' },
            { title: 'Meaningful pause', text: 'A still birthday moment that captured exactly who you are and who you are becoming.' }
        ]
    },
    ch8: {
        sender: 'Nashon',
        status: 'online',
        profileImage: 'mine/m8.jpg',
        bottomText: 'One last look at these beautiful memories.',
        memories: [
            { title: 'Words of celebration', text: 'A thoughtful birthday moment that reminded everyone just how special this milestone is for you.' },
            { title: 'Quiet strength', text: 'A still moment that spoke volumes about the grounded person you have grown into, birthday after birthday.' },
            { title: 'Late night reflection', text: 'A late night birthday reflection that showed how deeply you value growth and self-awareness.' },
            { title: 'Radiant smile', text: 'Your smile at the end of your birthday made the entire celebration feel complete.' },
            { title: 'A hopeful note', text: 'A hopeful send-off into the birthday year ahead — full of confidence, clarity, and purpose for you.' }
        ]
    },

    ch9: {
        sender: 'Nashon',
        status: 'online',
        profileImage: 'mine/m1.jpg',
        bottomText: '🌟 The grand finale 🌟'
    }
};

const MEMORY_IMAGES = [
    { src: 'joan/j1.jpg', tag: 'OT in the making.' },
    { src: 'joan/jo2.jpg', tag: 'A victory earned ,a moment worth celebrating.' },
    { src: 'joan/jo3.jpg', tag: 'Dont know when is this but it is an evidence growth is envitable.' },
    { src: 'joan/jo4.jpg', tag: 'Live to blow many candles.' },
    { src: 'joan/jo5.jpg', tag: 'The girl is now 22.' },
    { src: 'joan/jo6.jpg', tag: '......' },
    { src: 'joan/jo7.jpg', tag: 'Emblem of what the world has not seen yet.' },
    { src: 'joan/jo8.jpg', tag: 'Keep smiling gem.' },
    { src: 'joan/jo9.jpg', tag: 'Don\'t forget your moments, let them replay in your head.' },
    { src: 'joan/jo10.jpg', tag: 'Queen of smiles init.' },
    { src: 'joan/jo11.jpg', tag: '.' },
    { src: 'joan/jo12.jpg', tag: 'A beautiful soul captured in a single frame.' },
    { src: 'joan/jo13.jpg', tag: 'Every photo holds a piece of forever.' },
    { src: 'joan/jo14.jpg', tag: 'That smile belongs on a billboard.' },
    { src: 'joan/jo15.jpg', tag: 'Moments like these make life worth living.' },
    { src: 'joan/jo16.jpg', tag: 'Strong indeed, once claimed she can\'t cry😁 .'},
    { src: 'joan/jo17.jpg', tag: 'A memory frozen in time, forever cherished.' },
    { src: 'joan/jo18.jpg', tag: 'Happy birthday, Gem!' },
    { src: 'joan/jo19.jpg', tag: 'Every glance, every smile, pure magic.' },
    { src: 'joan/jo20.jpg', tag: 'Let every sunsrise shining on you remind you purpose.Born to win.' },
    { src: 'joan/jo21.jpg', tag: 'The girl is working to transform lives even though ni juu ya mukuchu😉.' },
    { src: 'joan/jo22.jpg', tag: 'A confident, joyful moment worth remembering.' },
    { src: 'joan/jo23.jpg', tag: 'Ever wondered why somebody would be this serious on an a finalists Sunday?' },
    { src: 'joan/jo24.jpg', tag: 'May Your light shines brighter and brighter to the perfect day.' },
    { src: 'joan/jo25.jpg', tag: 'A beautiful memory that will stay forever.' },
    { src: 'joan/jo26.jpg', tag: 'Remember to stay happy😊.' }
];

let musicStarted = false;
let audioSyncInterval;
let currentChapter = null;
let currentBehavior = null;
let displayedMessages = new Set();
let collageImagesInterval = null;
let lyricsSourceHtml = '';
let sidebarLyricsInterval = null;
let overlayLyricsInterval = null;
let textScrollInterval = null;
let memoryCardCycleInterval = null;
let currentMessageTimeout = null;
let currentCardTimeout = null;

function getSectionId(chapterId) {
    return 'chapter' + chapterId.slice(2);
}

function getChapterConfig(chapterId) {
    return CHAPTER_CONTENT[chapterId] || {};
}

function buildBirthdayHtml() {
    return `
        <div class="birthday-card">
            <strong>🎂 Happy Birthday! 🎂</strong>
            <p>Sending you a soft birthday wish wrapped in music, memories, and a little whisper from the heart. May this moment feel as bright as your smile.</p>
        </div>
    `;
}

function buildMemoryHtml(memories) {
    if (!memories || !memories.length) {
        return '';
    }
    return memories.map(memory => `
        <div class="memory-card">
            <strong>${memory.title}</strong>
            <div>${memory.text}</div>
        </div>
    `).join('');
}

function startAutoScroll(container, speed, offset, shouldLoop = false) {
    if (!container) return null;
    
    if (typeof offset === 'number' && offset >= 0) {
        container.scrollTop = offset;
    }
    
    const scrollStep = 1;
    const intervalSpeed = speed || 30;
    let stuckTicks = 0;
    
    const intervalId = setInterval(() => {
        const maxScroll = container.scrollHeight - container.clientHeight;
        if (maxScroll <= 0) {
            stuckTicks += 1;
            if (stuckTicks > 10) {
                clearInterval(intervalId);
                setTimeout(() => {
                    startAutoScroll(container, speed, offset, shouldLoop);
                }, 500);
            }
            return;
        }
        stuckTicks = 0;
        
        if (container.scrollTop < maxScroll) {
            container.scrollTop += scrollStep;
        } else {
            clearInterval(intervalId);
        }
    }, intervalSpeed);

    return intervalId;
}

function stopInterval(intervalVar) {
    if (intervalVar) {
        clearInterval(intervalVar);
    }
}

function startSidebarLyricsScroll(container, speed, offset) {
    if (!container || sidebarLyricsInterval !== null) return;
    sidebarLyricsInterval = startAutoScroll(container, speed, offset, false, newId => {
        sidebarLyricsInterval = newId;
    });
}

function stopSidebarLyricsScroll() {
    if (sidebarLyricsInterval) {
        clearInterval(sidebarLyricsInterval);
        sidebarLyricsInterval = null;
    }
}

function startOverlayLyricsScroll(container, speed, offset) {
    stopInterval(overlayLyricsInterval);
    overlayLyricsInterval = null;
    if (!container) return;
    overlayLyricsInterval = startAutoScroll(container, speed, offset, false, newId => {
        overlayLyricsInterval = newId;
    });
}

function stopOverlayLyricsScroll() {
    if (overlayLyricsInterval) {
        clearInterval(overlayLyricsInterval);
        overlayLyricsInterval = null;
    }
}

function startTextScroll(container, speed) {
    stopInterval(textScrollInterval);
    textScrollInterval = null;
    if (!container) return;
    textScrollInterval = startAutoScroll(container, speed, 0, true, newId => {
        textScrollInterval = newId;
    });
}

function stopTextScroll() {
    if (textScrollInterval) {
        clearInterval(textScrollInterval);
        textScrollInterval = null;
    }
}

function stopAllScrolling() {
    stopSidebarLyricsScroll();
    stopOverlayLyricsScroll();
    stopTextScroll();
    if (memoryCardCycleInterval) {
        clearInterval(memoryCardCycleInterval);
        memoryCardCycleInterval = null;
    }
    if (currentMessageTimeout) {
        clearTimeout(currentMessageTimeout);
        currentMessageTimeout = null;
    }
    if (currentCardTimeout) {
        clearTimeout(currentCardTimeout);
        currentCardTimeout = null;
    }
}

function stopCollageImages() {
    if (collageImagesInterval) {
        clearInterval(collageImagesInterval);
        collageImagesInterval = null;
    }
}

function startCollageImages(chapterId) {
    stopCollageImages();
    const sectionId = getSectionId(chapterId);
    const section = document.getElementById(sectionId);
    if (!section) return;

    const collageContainer = section.querySelector('.collage-container');
    if (!collageContainer) return;

    function updateCollage() {
        collageContainer.innerHTML = '';
        const shuffled = [...MEMORY_IMAGES].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, 3);
        
        selected.forEach((img, index) => {
            const floatDiv = document.createElement('div');
            floatDiv.className = 'floating-image';
            
            const positions = [
                { top: '25%', left: '30%' },
                { top: '45%', left: '55%' },
                { top: '35%', left: '20%' }
            ];
            
            const pos = positions[index] || { top: '40%', left: '40%' };
            const rotate = -8 + Math.random() * 16;
            
            floatDiv.style.top = pos.top;
            floatDiv.style.left = pos.left;
            floatDiv.style.setProperty('--rotate', rotate + 'deg');
            floatDiv.style.animationDelay = (index * 0.7) + 's';
            
            floatDiv.innerHTML = `
                <img src="${img.src}" alt="${img.tag}">
                <div class="floating-tag">${img.tag}</div>
            `;
            
            collageContainer.appendChild(floatDiv);
        });
    }

    updateCollage();
    collageImagesInterval = setInterval(updateCollage, IMAGE_DURATION * 1000);
}

function addLyricsOverlay(chapterId, speed, offset) {
    const sectionId = getSectionId(chapterId);
    const section = document.getElementById(sectionId);
    if (!section) return;

    const existingOverlay = section.querySelector('.lyrics-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }
    stopOverlayLyricsScroll();

    const lyricsOverlay = document.createElement('div');
    lyricsOverlay.className = 'lyrics-overlay';
    
    const scrollDiv = document.createElement('div');
    scrollDiv.className = 'lyrics-scroll';
    scrollDiv.innerHTML = lyricsSourceHtml;
    
    lyricsOverlay.appendChild(scrollDiv);
    
    const chatArea = section.querySelector('.chat-area');
    if (chatArea) {
        chatArea.appendChild(lyricsOverlay);
    }
    
    setTimeout(() => {
        const scrollContainer = lyricsOverlay.querySelector('.lyrics-scroll');
        if (scrollContainer) {
            startOverlayLyricsScroll(scrollContainer, speed, offset);
        }
    }, 200);
}

function removeLyricsOverlay(chapterId) {
    const sectionId = getSectionId(chapterId);
    const section = document.getElementById(sectionId);
    if (!section) return;

    const lyricsOverlay = section.querySelector('.lyrics-overlay');
    if (lyricsOverlay) {
        lyricsOverlay.remove();
    }
    stopOverlayLyricsScroll();
}

function setupFinaleChapter(chapterId) {
    const sectionId = getSectionId(chapterId);
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Hide sidebar, show full screen
    const sidebar = section.querySelector('.sidebar');
    const chat = section.querySelector('.chat-area');
    const chatContent = section.querySelector('.chat-content');
    const collageContainer = section.querySelector('.collage-container');
    const bottomBar = section.querySelector('.bottom-bar');
    
    if (sidebar) sidebar.style.display = 'none';
    if (chat) {
        chat.style.width = '100%';
        chat.style.minWidth = '100%';
    }
    if (chatContent) chatContent.innerHTML = '';
    if (collageContainer) collageContainer.innerHTML = '';
    if (bottomBar) bottomBar.textContent = '🌟 With love, Nashkay 🌟';
    
    // Add finale background and text
    const finaleHtml = document.createElement('div');
    finaleHtml.className = 'finale-container';
    finaleHtml.innerHTML = `
        <img src="joan/jo12.jpg" alt="Happy Birthday" class="finale-bg">
        <div class="finale-overlay"></div>
        <div class="finale-content">
            <h1 class="finale-title">Happy Birthday</h1>
            <p class="finale-subtitle">DAKTARI M.J/O.T</p>
            <P class="finale-description">.</p>Lebe! Liebe! Lache!</p>
            <div class="finale-hearts">❤️ 💕 ✨ 💕 ❤️</div>
            <p class="finale-message">Mögen alle deine Wünsche in Erfüllung gehen!</p>
        </div>
    `;
    
    if (chat) {
        chat.appendChild(finaleHtml);
    }
    
    removeLyricsOverlay(chapterId);
    stopCollageImages();
}

function updateChapterContent(chapterId, timingInfo) {
    const sectionId = getSectionId(chapterId);
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Remove existing finale if switching away
    const existingFinale = section.querySelector('.finale-container');
    if (existingFinale) existingFinale.remove();

    const sidebar = section.querySelector('.sidebar');
    const chat = section.querySelector('.chat-area');
    const sidebarContent = section.querySelector('.sidebar-content');
    const chatContent = section.querySelector('.chat-content');
    const profilePhoto = section.querySelector('.profile-photo');
    const profileName = section.querySelector('.profile-name');
    const profileStatus = section.querySelector('.profile-status');
    const bottomBar = section.querySelector('.bottom-bar');
    const collageContainer = section.querySelector('.collage-container');

    const config = getChapterConfig(chapterId);
    if (profilePhoto) profilePhoto.src = config.profileImage || 'mine/m1.jpg';
    if (profileName) profileName.textContent = config.sender || 'Nashon';
    if (profileStatus) profileStatus.textContent = config.status || 'online';
    if (bottomBar) bottomBar.textContent = '';

    if (timingInfo.behavior === 'A') {
        // Sidebar + Chat layout with cinematic card display
        if (sidebar) sidebar.style.display = 'flex';
        if (chat) {
            chat.style.width = '75%';
            chat.style.minWidth = '600px';
        }
        if (sidebarContent) {
            sidebarContent.innerHTML = `<div class="sidebar-lyrics-title">Lyrics</div><div class="lyrics-scroll">${lyricsSourceHtml}</div>`;
            setTimeout(() => {
                startSidebarLyricsScroll(sidebarContent, timingInfo.lyricsSpeed, timingInfo.lyricsOffset);
            }, 800);
        }
        if (chatContent) {
            chatContent.innerHTML = '';
            // Calculate chapter duration: end - start
            const chapterDuration = timingInfo.end - timingInfo.start;
            startMemoryCardCycle(chapterId, chapterDuration);
        }
        if (collageContainer) collageContainer.innerHTML = '';
        removeLyricsOverlay(chapterId);
        stopCollageImages();
    } else if (timingInfo.behavior === 'B') {
        // Full view with floating photos
        if (sidebar) sidebar.style.display = 'none';
        if (chat) {
            chat.style.width = '100%';
            chat.style.minWidth = '100%';
        }
        if (chatContent) {
            chatContent.innerHTML = '';
        }
        if (collageContainer) {
            startCollageImages(chapterId);
        }
        addLyricsOverlay(chapterId, timingInfo.lyricsSpeed, timingInfo.lyricsOffset);
        stopTextScroll();
    } else if (timingInfo.behavior === 'C') {
        // Finale chapter
        setupFinaleChapter(chapterId);
        stopTextScroll();
    }
}

function showChapter(chapterId, timingInfo) {
    const targetId = getSectionId(chapterId);
    if (!targetId) return;
    if (currentChapter === targetId) return;

    stopAllScrolling();
    stopCollageImages();

    const currentActive = document.querySelector('.chapter.active');
    if (currentActive) {
        currentActive.classList.remove('active');
        const oldOverlay = currentActive.querySelector('.lyrics-overlay');
        if (oldOverlay) oldOverlay.remove();
        const oldFinale = currentActive.querySelector('.finale-container');
        if (oldFinale) oldFinale.remove();
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.classList.add('active');
        currentChapter = targetId;
        currentBehavior = timingInfo.behavior;
        updateChapterContent(chapterId, timingInfo);
    }

    displayedMessages.clear();
}

function startExperience() {
    const music = document.getElementById('background-music');
    music.currentTime = 13;
    music.volume = 0.3;
    music.playbackRate = PLAYBACK_RATE;
    music.play().catch(err => console.log('Music play failed:', err));
    musicStarted = true;

    document.getElementById('welcome').classList.remove('active');
    const firstChapter = 'ch1';
    showChapter(firstChapter, TIMING[firstChapter]);
    startAudioSync();
}

function startAudioSync() {
    const music = document.getElementById('background-music');

    audioSyncInterval = setInterval(() => {
        if (!musicStarted) return;

        const currentTime = music.currentTime - 13;
        if (currentTime < 0) return;

        let currentTimingInfo = null;
        let currentChapterId = null;

        for (let ch in TIMING) {
            const timing = TIMING[ch];
            if (currentTime >= timing.start && currentTime < timing.end) {
                currentTimingInfo = timing;
                currentChapterId = ch;
                break;
            }
        }

        if (!currentTimingInfo) return;

        showChapter(currentChapterId, currentTimingInfo);
        checkAndDisplayMessages(currentTime);
    }, 100);
}

function checkAndDisplayMessages(currentTime) {
    MESSAGES.forEach(msg => {
        if (Math.abs(currentTime - msg.time) < 1 && !displayedMessages.has(msg.time)) {
            displayMessage(msg);
            displayedMessages.add(msg.time);
        }
    });
}

function displayMessage(msg) {
    const activeChat = document.querySelector('.chapter.active .chat-content');
    if (!activeChat) return;

    // Clear any existing message
    const existingMsg = activeChat.querySelector('.chat-message');
    if (existingMsg) {
        existingMsg.remove();
    }
    if (currentMessageTimeout) {
        clearTimeout(currentMessageTimeout);
    }

    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-message incoming message-enter';
    msgDiv.innerHTML = `
        <div class="message-sender">${msg.sender}</div>
        <div class="message-typing">
            <span></span><span></span><span></span>
        </div>
    `;
    activeChat.appendChild(msgDiv);

    // Show typing dots for 1.5s
    currentMessageTimeout = setTimeout(() => {
        // Replace typing with text
        msgDiv.innerHTML = `
            <div class="message-sender">${msg.sender}</div>
            <div class="message-text">${msg.text}</div>
        `;
        msgDiv.classList.remove('message-enter');

        // Show text for 4s, then fade out
        currentMessageTimeout = setTimeout(() => {
            msgDiv.classList.add('message-exit');
            currentMessageTimeout = setTimeout(() => {
                msgDiv.remove();
                currentMessageTimeout = null;
            }, 500); // Exit animation duration
        }, 4000);
    }, 1500);
}

function displayCard(cardHtml) {
    const activeChat = document.querySelector('.chapter.active .chat-content');
    if (!activeChat) return;

    // Clear any existing card
    const existingCard = activeChat.querySelector('.birthday-card, .memory-card');
    if (existingCard) {
        existingCard.remove();
    }
    if (currentCardTimeout) {
        clearTimeout(currentCardTimeout);
    }

    const cardDiv = document.createElement('div');
    cardDiv.innerHTML = cardHtml;
    const card = cardDiv.firstElementChild;
    card.classList.add('card-enter');
    activeChat.appendChild(card);

    // Show card for 4s, then fade out
    currentCardTimeout = setTimeout(() => {
        card.classList.remove('card-enter');
        card.classList.add('card-exit');
        currentCardTimeout = setTimeout(() => {
            card.remove();
            currentCardTimeout = null;
        }, 500); // Exit animation duration
    }, 4000);
}

function startMemoryCardCycle(chapterId, chapterDuration) {
    const config = getChapterConfig(chapterId);
    const birthdayCardHtml = buildBirthdayHtml();
    const memoryCards = config.memories || [];
    
    const totalCards = 1 + memoryCards.length; // birthday + memory cards
    if (totalCards === 0) return;
    
    const intervalPerCard = (chapterDuration * 1000) / totalCards; // Convert to ms
    let cardIndex = 0;
    
    // Show birthday card first
    displayCard(birthdayCardHtml);
    cardIndex = 1;
    
    if (memoryCardCycleInterval) {
        clearInterval(memoryCardCycleInterval);
    }
    
    memoryCardCycleInterval = setInterval(() => {
        if (cardIndex < totalCards) {
            const memory = memoryCards[cardIndex - 1];
            const memoryCardHtml = `
                <div class="memory-card">
                    <strong>${memory.title}</strong>
                    <div>${memory.text}</div>
                </div>
            `;
            displayCard(memoryCardHtml);
            cardIndex++;
        } else {
            // Cycle complete
            if (memoryCardCycleInterval) {
                clearInterval(memoryCardCycleInterval);
                memoryCardCycleInterval = null;
            }
        }
    }, intervalPerCard);
}

function loadLyricsSource() {
    const sourceElement = document.getElementById('lyrics-source');
    if (sourceElement) {
        const lyricsElement = sourceElement.querySelector('#lyrics');
        lyricsSourceHtml = lyricsElement ? lyricsElement.innerHTML : sourceElement.innerHTML;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const beginBtn = document.getElementById('begin-btn');
    if (beginBtn) {
        beginBtn.addEventListener('click', startExperience);
    }

    document.querySelectorAll('.petals').forEach(generatePetals);
    document.querySelectorAll('.hearts').forEach(generateHearts);
    loadLyricsSource();
    
    // Hide lyrics controls from view
    const controls = document.getElementById('lyrics-controls');
    if (controls) {
        controls.style.display = 'none';
    }
});

function generatePetals(container) {
    if (!container) return;
    for (let i = 0; i < 20; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDelay = Math.random() * 10 + 's';
        petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
        container.appendChild(petal);
    }
}

function generateHearts(container) {
    if (!container) return;
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
}