# Adding Lyrics to Your Website

## How to Add the TikTok Song Lyrics

Since song lyrics are protected by copyright, I cannot fetch them directly from TikTok for you. However, here's how to add them:

### Option 1: Manual Transcription (Recommended)
1. Watch the TikTok video: https://www.tiktok.com/@africanlovesongs/video/7604918831349271825
2. Write down the lyrics as you hear them
3. Paste them into the template below (in `index.html`)

### Option 2: Find Lyrics Online
- Search the song title + artist on Google
- Visit lyrics sites like Genius, AZLyrics, or SongLyrics
- Copy the lyrics (make sure you can use them for this purpose)

## Template to Update in index.html

Find this section:
```html
<div id="lyrics">
    [Intro]<br>
    Yeah, yeah<br>
    Kodong Klan<br>
    Better Days<br><br>
    ...
</div>
```

Replace with your actual lyrics in this format:

```html
<div id="lyrics">
    [Intro]<br>
    YOUR_INTRO_LYRICS_HERE<br><br>
    
    [Verse 1]<br>
    YOUR_FIRST_VERSE_HERE<br><br>
    
    [Chorus]<br>
    YOUR_CHORUS_HERE<br><br>
    
    [Verse 2]<br>
    YOUR_SECOND_VERSE_HERE<br><br>
    
    [Bridge]<br>
    YOUR_BRIDGE_HERE<br><br>
    
    [Outro]<br>
    YOUR_OUTRO_HERE<br>
</div>
```

**Important**: Keep the `<br>` tags for line breaks. Each line should end with `<br>`

## Example Format
```html
<div id="lyrics">
    [Intro]<br>
    Yeah, yeah<br>
    Kodong Klan<br><br>
    
    [Verse 1]<br>
    Nilikuwa katika giza<br>
    Sikuwa na mwanga<br>
    Lakini sasa nimeona nuru<br><br>
    
    [Chorus]<br>
    Better days are coming<br>
    Siku njema zinakuja<br><br>
</div>
```

## Display Rules
- Lyrics appear **centered at TOP** of screen
- They show at **60% opacity** (subtle)
- They appear during the **second half** of each 63-second section
- They scroll smoothly in the background

Once you have the lyrics from that video, paste them in the template above!
