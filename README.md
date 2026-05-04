# Birthday Love Letter Website 💕

A cinematic single-page website for a birthday surprise confession with M-Pesa gift integration.

## Overview

This is a fully synchronized, music-driven experience that:
- ✨ Displays 4 emotional chapters + finale
- 🎵 Syncs perfectly with "Better Days" by Kodong Klan (5:15 minutes)
- 📝 Shows original Swahili lyrics subtly at the top
- 💫 Auto-advances chapters with smooth fade transitions
- 🎁 Triggers M-Pesa gift on finaleComplete Timing Breakdown (5:15 total music):

| Chapter | Duration | Message | Transition | Timeline |
|---------|----------|---------|------------|----------|
| 1 | 63s | 0-31.5s | 31.5-63s | 0:00-1:03 |
| 2 | 63s | 63-94.5s | 94.5-126s | 1:03-2:06 |
| 3 | 63s | 126-157.5s | 157.5-189s | 2:06-3:09 |
| 4 | 63s | 189-220.5s | 220.5-252s | 3:09-4:12 |
| Finale | 63s | 252-283.5s | 283.5-315s | 4:12-5:15 |

## Setup Instructions

### 1. Replace Placeholders in `index.html`
```
[HER_NAME] → Recipient's name
[YOUR_NAME] → Your name
[MEMORY_1], [MEMORY_2], [MEMORY_3] → Your special memories
[VOICENOTE_1.mp3], [VOICENOTE_2.mp3], [VOICENOTE_3.mp3], [VOICENOTE_4.mp3] → Your voice notes (optional)
```

### 2. M-Pesa Configuration (in `script.js`)
```javascript
[MPESA_PHONE] → Your phone number (sender)
[AMOUNT] → Gift amount (e.g., "500")
[CONSUMER_KEY] → Daraja API Consumer Key
[CONSUMER_SECRET] → Daraja API Consumer Secret
```

### 3. Song File
- Place `betterdays.mp3` in the same folder
- File must be the actual "Better Days" by Kodong Klan
- Music starts at 00:13 (where the actual song begins)

### 4. Lyrics
- Original Swahili lyrics are already included
- Add your own translation if desired (edit the lyrics in HTML)

### 5. Hosting
- GitHub Pages ✅
- Netlify ✅
- Vercel ✅
- Any static host ✅

## Features

✨ **4 Emotional Chapters**
- Chapter 1: "Today is Your Day" (Birthday celebration)
- Chapter 2: "Remember When..." (Shared memories)
- Chapter 3: "What You Mean To Me" (Building emotion)
- Chapter 4: "The Confession" (The big reveal)
- Finale: Gift unwrapping (Surprise M-Pesa)

✨ **Visual Effects**
- Floating rose petals
- Pulsing hearts
- Fireworks burst
- Gift box unwrap animation
- Smooth crossfades

✨ **Audio Layer**
- Background music at 30% volume
- Original Swahili lyrics scrolling at top
- Voice note players (hidden from UI)
- Perfect synchronization with 5:15 music duration

✨ **Timing & Flow**
- Music with auto-sync chapters
- Each section: 31.5s message + 31.5s lyrics transition
- Automatic chapter advancement
- Manual "Next" buttons as backup

✨ **Mobile-First Design**
- Fully responsive
- Touch-friendly
- Optimized for phones

## Technical Details

- **Pure JavaScript** - No frameworks
- **Single File Ready** - Can be combined if needed
- **Mobile-Optimized** - Phone-first design
- **M-Pesa Sandbox Ready** - Swap to live credentials later
- **No Backend Required** - Except M-Pesa API call

## How It Works

1. User opens website on phone/browser
2. **Welcome screen** appears with "Begin the Experience" button
3. User clicks button → **Music starts immediately** at 00:13
4. Chapter 1 displays with typewriter message (0-31.5s)
5. Message fades, lyrics fade in (31.5-63s)
6. Auto-advances to Chapter 2 at 1:03 mark
7. Repeats for all chapters
8. At 4:12, auto-advances to Finale
9. Music ends at 5:15
10. User clicks "🎁 One Last Thing..." button
11. M-Pesa STK push sent to your phone
12. Beautiful gift animation appears for her

## M-Pesa Integration

The STK push is sent to **YOUR phone number** (sender), not hers:
- She sees: Beautiful gift animation + "Check your M-Pesa 🎀"
- You receive: M-Pesa STK confirmation prompt on your phone
- You approve: The transfer happensShe just sees the romantic gift experience!

## Customization Tips

- **Extend messages**: Edit text in `script.js` (typewriterEffect calls)
- **Change colors**: Edit CSS variables in `style.css`
- **Add more memories**: Add `<div class="memory-card">` in HTML
- **Adjust animations**: Modify keyframes in `style.css`
- **Change timing**: Update `TIMING` constants in `script.js`

## Browser Support

- Chrome/Chromium ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Samsung Internet ✅

## Notes

- Music autoplays on first user interaction (no controls visible)
- No login or authentication needed
- Chapters auto-advance with music (no manual clicking required)
- All animations are GPU-accelerated for smooth performance

**Ready to create an unforgettable moment! 🎬❤️**