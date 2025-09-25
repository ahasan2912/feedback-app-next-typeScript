# Project Name: FeedbackPro
FeedbackPro app is a simple yet effective feedback management tool where users can submit their name, email, and feedback through a form. Once submitted, the feedback is instantly displayed below in a card layout, making it easy to view all responses in an organized way. This provides a clean and interactive experience for collecting and showcasing user feedback.

# Overview
- The app uses a **hybrid data storage approach**:
- An **in-memory array** with default feedback data is rendered on the first run.
- All data is also **saved to localStorage** for persistence across reloads.
- If localStorage data is not found, feedback is fetched from the **`/api/feedback` route** as a fallback.

## Tech Stack
- Next.js
- TypeScript
- React hook form
- LocalStorage
- Tailwind CSS

## Features
- Form input validation (e.g. required fields)  
- Instant display of submitted feedback as cards  
- Type safety with TypeScript  
- Built with Next.js for client-side interactivity 

## Installation & Setup
- https://github.com/ahasan2912/feedback-app-next-typeScript
- cd feedback-app
- npm install
- npm run dev

## Deploying with Vercel
## [Live-site: ](https://feedback-app-next-type-script.vercel.app/)
