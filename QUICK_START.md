# 🚀 Quick Start Guide

## What's Ready Now ✅

Your birthday website is **100% complete** and waiting for:
1. The MP3 file
2. Your personal customizations

## 3 Simple Steps to Launch

### Step 1: Add the Music File
```
📁 Your project folder:
├─ index.html
├─ style.css
├─ script.js
└─ ➕ betterdays.mp3 ← ADD THIS FILE HERE
```

**Where to get the song:**
- Search "Better Days by Kodong Klan" on Spotify/YouTube
- Download and convert to MP3 format
- Name it exactly: `betterdays.mp3`
- Place in the same folder as index.html

### Step 2: Personalize the Content

**In `index.html`, find and replace:**

```html
<!-- Line 68 -->
<h1 id="birthday-title">Happy Birthday, [HER_NAME]</h1>
→ Happy Birthday, Sarah

<!-- Lines 138-140 (Memory cards) -->
<div class="memory-card">[MEMORY_1]</div>
<div class="memory-card">[MEMORY_2]</div>
<div class="memory-card">[MEMORY_3]</div>
→ That time at the beach...
→ When you laughed so hard...
→ Our first trip together...
```

**In `script.js`, customize messages:**

```javascript
// Line 38 - Birthday message
'Today is your special day, [HER_NAME]. May it be filled...'
→ 'Today is your special day, Sarah. I...'

// Line 58 - Meaning message  
'You are the light in my darkest days...'
→ Your heartfelt words about her

// Line 63 - Confession message
'There\'s something I\'ve wanted to say...\n\nI love you.'
→ Your personal confession
```

### Step 3: M-Pesa Setup (For Gift)

**In `script.js`, find & update:**

```javascript
// Line 217 approx
[MPESA_PHONE] → '+254712345678' (your phone)
[AMOUNT] → '500' (KES amount)
[CONSUMER_KEY] → 'Your_API_Key'
[CONSUMER_SECRET] → 'Your_API_Secret'
```

**To get M-Pesa credentials:**
1. Go to https://developer.safaricom.co.ke/
2. Sign up for Daraja API
3. Create an app
4. Copy Consumer Key & Consumer Secret
5. Paste in `script.js`

## Test It Locally

```bash
# In your project folder
python -m http.server 8000

# Then open in browser
http://localhost:8000
```

**Click anywhere** → Music starts → Story begins!

## Deployment (Choose One)

### GitHub Pages (Free)
```bash
# Create repo named: yourusername.github.io
# Push files to main branch
# Your site: yourusername.github.io
```

### Netlify (Free)
```bash
# Drag & drop folder at netlify.com/drop
# Get instant link
```

### Vercel (Free)
```bash
# Import repo at vercel.com
# Auto-deploys on push
```

## What Happens When She Opens It

1. **Welcome Screen** appears
   - Elegant welcome message
   - "Begin the Experience" button with pulsing animation
   
2. **Click "Begin the Experience"** → Music starts immediately at 00:13
   - Chapter 1 loads instantly
   - Rose petals floating
   - Birthday message appears word by word
   
3. **After 31.5 seconds** → Lyrics appear at top
   - Birthday message fades
   - "Better Days" lyrics subtle in background
   
4. **Auto-advances every 63 seconds** through all chapters
   - No clicking needed (but buttons still work)
   - Smooth crossfades between sections
   
5. **At finale** → Gift unwrapping animation
   - She sees: "Check your M-Pesa 🎀"
   - You see on your phone: M-Pesa STK confirmation
   - You approve the transfer
   - Money appears in her M-Pesa! 💚

## Lyrics Note

**Current lyrics:** Original Swahili only

If you want to add English translation:
```html
<!-- In index.html, add after each Swahili line -->
Nilikuwa katika giza<br>
(I was in darkness)<br>
```

## Common Issues & Fixes

**Issue:** Music not playing
- ✅ Check `betterdays.mp3` exists in folder
- ✅ Click website first (music needs user interaction)
- ✅ Check browser console for errors (F12)

**Issue:** Chapter doesn't auto-advance
- ✅ Verify music is actually playing
- ✅ Check browser volume isn't muted
- ✅ Open console to see any errors

**Issue:** Lyrics not showing
- ✅ Lyrics appear at TOP center after 31.5 seconds
- ✅ They're quite subtle (60% opacity)
- ✅ Should appear under "Better Days by Kodong Klan"

**Issue:** M-Pesa not working
- ✅ First check: You clicked the gift button, right?
- ✅ Check M-Pesa credentials are correct
- ✅ Use LIVE credentials before deploying (sandbox has limits)
- ✅ Ensure your phone number is correct

## Timing Reference

```
Your message visible: 0:00 - 0:31  (Chapter 1)
                     1:03 - 1:34  (Chapter 2)
                     2:06 - 2:37  (Chapter 3)
                     3:09 - 3:40  (Chapter 4)
                     4:12 - 4:43  (Finale)

Lyrics visible:      0:31 - 1:03
                     1:34 - 2:06
                     2:37 - 3:09
                     3:40 - 4:12
                     4:43 - 5:15
```

## Pro Tips 💡

1. **Voice Notes (Optional)**
   - Record 4 voice notes (one per chapter)
   - Make them personal and heartfelt
   - Players are hidden from UI (but she can still play them manually if enabled)

2. **Test on Mobile**
   - This is designed for phone viewing
   - Test in portrait orientation
   - Check landscape too (works but portrait is best)

3. **Share the Link**
   - SMS text her the link
   - WhatsApp
   - Email with a sweet message
   - QR code pointing to your link

4. **Timing Tip**
   - It takes exactly 5:15 minutes
   - Play it during a special moment
   - Have M-Pesa ready on your phone

## Support Files

- `README.md` - Full documentation
- `TIMING_REFERENCE.md` - Detailed timing breakdown
- `IMPLEMENTATION_SUMMARY.md` - All changes explained

---

**You're ready! 🎬❤️ Add the song, personalize, and ship it!**
