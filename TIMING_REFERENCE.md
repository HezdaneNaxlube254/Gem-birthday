# Cinematic Birthday Website - Timing Breakdown

## Song Information
- **Song**: Better Days by Kodong Klan
- **Total Duration**: 5:28 (328 seconds)
- **Music Start Point**: 00:13 (intro)
- **Actual Music Duration**: 5:15 (315 seconds)

## Timing Distribution

The 315 seconds of actual music are distributed across 5 sections equally:
- **Each Section**: 63 seconds

### Detailed Breakdown

| Section | Duration | Message Time | Transition Time | Start | End |
|---------|----------|--------------|-----------------|-------|-----|
| Chapter 1 | 0-63s | 0-31.5s | 31.5-63s | 0:00 | 1:03 |
| Chapter 2 | 63-126s | 63-94.5s | 94.5-126s | 1:03 | 2:06 |
| Chapter 3 | 126-189s | 126-157.5s | 157.5-189s | 2:06 | 3:09 |
| Chapter 4 | 189-252s | 189-220.5s | 220.5-252s | 3:09 | 4:12 |
| Finale | 252-315s | 252-283.5s | 283.5-315s | 4:12 | 5:15 |

### How Each Section Works

**First Half (Message Phase)**
- Content shows and scrolls into view via typewriter effect
- **Duration**: ~31.5 seconds
- **Effect**: Message is fully visible and readable

**Second Half (Transition Phase)**
- Message gradually fades out (opacity: 1 → 0)
- Lyrics gradually fade in (opacity: 0 → 0.6)
- **Duration**: ~31.5 seconds
- **Effect**: Smooth crossfade creating atmospheric balance

## Flow Example - Chapter 1

- **0:00 - 0:31** → "Happy Birthday, [HER_NAME]" typewriter appears, fades in gently
- **0:31 - 1:03** → Message stays visible, then starts fading as lyrics appear at top
- **1:03** → Automatic transition to Chapter 2

## Audio Playback

- Music starts automatically on **first user interaction** (click/tap)
- `currentTime` is set to 13 seconds (skips intro)
- Music volume: 30% (soft background)
- Chapters advance automatically based on audio playback time

## Manual Override

You can still use the "Next →" buttons to manually advance if needed, but the website is designed to auto-advance with the music for a seamless cinematic experience.
