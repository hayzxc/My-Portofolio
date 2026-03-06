<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=for-the-badge&logo=framer&logoColor=white" />
</p>

# 🎮 Hayu Kurniawan — Personal Portfolio

A **neo-brutalist**, game-inspired personal portfolio built with React, TypeScript, and Framer Motion. Features bold typography, chunky borders, pixel-perfect shadows, and smooth micro-animations throughout.

## ✨ Features

- **🌍 Multilingual Splash Screen** — Welcome loading screen that cycles through "Hello" in 16+ languages with smooth animations
- **⭐ Animated Starfield Background** — Dynamic parallax star layers for an immersive cosmic feel
- **💬 AI Chat Widget** — Real-time chat powered by Socket.IO with a backend AI handler
- **🎯 Scroll-Triggered Reveals** — Sections animate into view as you scroll using Framer Motion
- **⌨️ Typewriter Effect** — Dynamic hero text cycling through roles and titles
- **📱 Fully Responsive** — Optimized for mobile, tablet, and desktop
- **🎨 Neo-Brutalist Design** — Bold yellow accents, thick black borders, and chunky box shadows

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS 3, Custom CSS Variables |
| **Animations** | Framer Motion 11, CSS Keyframes |
| **Icons** | Lucide React |
| **Chat Backend** | Node.js, Socket.IO, Google Gemini AI |

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Hero.tsx              # Hero section with typewriter effect
│   │   ├── Projects.tsx          # Project showcase cards
│   │   ├── About.tsx             # About me section
│   │   ├── Contact.tsx           # Contact form & social links
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── SplashScreen.tsx      # Multilingual welcome loading screen
│   │   ├── AnimatedBackground.tsx# Starfield parallax background
│   │   ├── SectionReveal.tsx     # Scroll-triggered reveal wrapper
│   │   └── chat/                 # AI chat widget components
│   ├── App.tsx                   # Main app with splash screen logic
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles & design tokens
├── server/                       # Chat backend (Node.js + Socket.IO)
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/hayzxc/My-Portofolio.git
cd My-Portofolio

# Install frontend dependencies
npm install

# Install server dependencies
cd server
npm install
cd ..
```

### Development

```bash
# Start the frontend dev server
npm run dev

# In a separate terminal, start the chat backend
cd server
node index.js
```

The app will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

## 📬 Contact

- **Email**: hayukurniawan2@gmail.com
- **LinkedIn**: [Hayu Kurniawan](https://www.linkedin.com/in/hayyu-k-436133221/)
- **GitHub**: [hayzxc](https://github.com/hayzxc)

---

<p align="center">
  Built with ☕ and 🎮 by <strong>Hayu Kurniawan</strong>
</p>
