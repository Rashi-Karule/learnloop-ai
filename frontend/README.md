# LearnLoop AI — Frontend

React frontend for LearnLoop AI, built with Vite, Tailwind CSS, and React Router.

## Getting started

Make sure you have [Node.js](https://nodejs.org/) (v18 or later) installed, then run:

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project structure

```
src/
├── api/          # API client and backend request helpers
├── components/   # Reusable UI components (Navbar, Layout, etc.)
├── pages/        # Route-level page components
├── App.jsx       # Route definitions
├── main.jsx      # App entry point
└── index.css     # Global styles + Tailwind imports
```

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Build for production                 |
| `npm run preview` | Preview the production build locally |

## Environment variables

Create a `.env` file in this folder to override defaults:

```
VITE_API_BASE_URL=http://localhost:8000
```
