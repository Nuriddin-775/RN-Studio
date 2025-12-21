# RN Studio

**RN Studio** is a production-grade React Native portfolio application designed to showcase real-world mobile engineering skills.

This project is not a tutorial and not a demo app.  
It is a **professional portfolio tool** built to demonstrate how I design, structure, and ship real React Native applications using modern tooling and best practices.

The app is published on both App Store and Play Store and is fully open source.

---

## What is this?

RN Studio is a single mobile application that contains multiple **feature-focused modules**, each representing a real-world capability expected from a mid-to-senior React Native engineer.

Each module demonstrates:

- correct architecture
- clean folder structure
- practical state management
- real API / SDK usage
- production-level UI patterns

This app answers one simple question for recruiters and engineers:

> _“Can this developer build real mobile apps?”_

---

## Screenshots

> _Screenshots will be added here_

- Home / Feature Overview
- Feature Categories
- Feature Detail Screen
- Code Preview Screen
- Settings

---

## Tech Stack

- **React Native**
- **Expo (managed workflow)**
- **TypeScript**
- **Expo Router**
- **Zustand**
- **Redux Toolkit**
- **Context API**
- **Firebase (Auth, Notifications)**
- **WebSockets**
- **Expo SDKs**
  - Camera
  - Audio / Video
  - Media Library
  - Haptics
  - Sensors
- **Tailwind (NativeWind)**
- **AsyncStorage / SecureStore**
- **ESLint + Prettier**

---

## Labs Included (V1)

### State Management

- Zustand example
- Redux Toolkit example
- Context API comparison

### Authentication

- Apple Sign In
- Google Sign In
- Local auth simulation

### Real-time Features

- WebSocket-based chat (local / mock)
- Typing indicators
- Message state handling

### Notifications

- Push notifications
- Local notifications
- App state handling

### Media & Device APIs

- Camera usage
- Audio recording
- Video playback
- Permissions handling

### UI & UX

- Reusable component system
- Theming
- Dark / Light mode
- Animations & transitions

### Code Preview

- Selected features expose **read-only code previews**
- Folder-based navigation
- Clear explanation of architecture decisions

---

## Architecture

The app follows a **feature-first architecture**.

Each feature is:

- isolated
- testable
- easy to remove or extend

High-level structure:

- `app/` → routing & navigation
- `features/` → business logic
- `components/` → shared UI
- `services/` → integrations (auth, notifications)
- `store/` → global state
- `hooks/` → reusable logic
- `utils/` → helpers & constants

This mirrors how production apps are structured in real teams.

---

## Why no backend?

The goal of RN Studio is to demonstrate **client-side mobile engineering**, not backend development.

To keep the app:

- simple to run
- easy to review
- focused on React Native skills

All data is:

- static
- mocked
- or stored locally on device

This ensures reviewers can explore the app without external dependencies.

---

## App Store / Play Store

> _Links will be added after release_

- App Store: Coming soon
- Play Store: Coming soon

---

## How to run locally

```bash
git clone https://github.com/your-username/rn-studio.git
cd rn-studio
npm install
npx expo start
```

## Requirements:

- Node.js

- Expo CLI

- iOS Simulator or Android Emulator (or physical device)
