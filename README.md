# SoundSnooze Website

A landing page for SoundSnooze, a Mac utility that automatically mutes your audio when you lock your screen, sleep, or disconnect headphones.

## Features

- Landing page showcasing SoundSnooze features
- Direct download option for users
- Optional donation link for those who want to support

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Place your SoundSnooze.dmg file in the `public/downloads` directory.

## Development

Run the development server:

```
npm run dev
```

## Production

Build the project for production:

```
npm run build
```

Start the production server:

```
npm start
```

## Customization

- To change the download link: Update the href in the Download button in `src/pages/SoundSnooze.tsx`
- To change the donation link: Update the href in the Support Us button in `src/pages/SoundSnooze.tsx`

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Express for serving static files
