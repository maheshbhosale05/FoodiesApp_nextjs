# Foodies

A Next.js 15 food discovery starter project built for food lovers.

## Overview

Foodies is a recipe-sharing app with a homepage, community section, and meal detail pages. The project includes a local SQLite seed script for meal data and reusable UI components such as an image slideshow and meal list.

## Features

- Next.js 15 app router structure
- React 19-based UI
- Local SQLite support via `better-sqlite3`
- Meals listing with detail pages
- Community and share sections
- Responsive image slideshow and navigation

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build for production

```bash
npm run build
npm start
```

## Database Initialization

This project includes `initdb.js` for seeding a local SQLite database (`meals.db`) with example meals.

If you want to initialize the database manually, run:

```bash
node initdb.js
```

## Project Structure

- `app/` - Next.js app router pages and layouts
- `components/` - UI components and feature modules
- `lib/` - shared data utilities
- `public/images/` - meal and UI image assets
- `initdb.js` - SQLite seed data script

## Scripts

- `npm run dev` - start development server
- `npm run build` - build production app
- `npm run start` - serve built app
- `npm run lint` - run ESLint

## Notes

- `better-sqlite3` is used for local data storage.
- The app is configured for the Next.js app directory and modern React.

## License

This repository is currently private and intended as a starter project for recipe and food-sharing UI development.
