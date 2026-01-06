# 🧠 Emotion-Aware Study Assistant

> A smart, emotion-driven study planner that adapts to your mental state and exam timeline

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38BDF8?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.3.0-646CFF?logo=vite)](https://vitejs.dev/)

## 📖 Overview

The Emotion-Aware Study Assistant is an intelligent web application that generates personalized study plans based on two key factors:

1. **Your Current Mood** (Fresh 🤩, Okay 🙂, Tired 😴, or Stressed 😫)
2. **Days Left Until Exam** (0-365 days)

The app uses smart decision algorithms to recommend:
- **Study Strategy** - Optimized approach based on your energy and urgency
- **Session Duration** - Ideal study/break intervals
- **Break Advice** - Tailored recovery activities
- **Motivation** - Personalized encouragement to keep you going

## ✨ Features

### 🎯 Smart Plan Generation
- Intelligent mood-based recommendations
- Urgency-aware study strategies
- Adaptive session lengths
- Personalized break suggestions

### 🎨 Beautiful UI/UX
- Modern, responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- Dark mode support
- Confetti celebrations 🎉
- Glass-morphism effects

### ⚡ Performance
- Lightning-fast with Vite
- Frontend-only architecture (no backend required)
- Instant plan generation
- Optimized for Vercel deployment

### 📱 Responsive
- Works seamlessly on desktop, tablet, and mobile
- Touch-optimized interactions
- Adaptive layouts

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ or 20+
- **yarn** (recommended) or npm

### Installation

```bash
# Navigate to frontend directory
cd /app/frontend

# Install dependencies
yarn install

# Start development server
yarn dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
yarn build

# Preview production build locally
yarn preview
```

## 📁 Project Structure

```
/app/
├── frontend/                    # Main React application
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── ui/             # Reusable UI components (Toast, Tooltip)
│   │   │   ├── MoodSelector.tsx # Mood selection interface
│   │   │   └── PlanCard.tsx    # Study plan display
│   │   ├── hooks/              # Custom React hooks
│   │   │   └── use-toast.ts    # Toast notification hook
│   │   ├── lib/                # Utility functions
│   │   │   ├── studyPlanner.ts # Core logic for plan generation
│   │   │   ├── utils.ts        # Helper functions
│   │   │   └── queryClient.ts  # React Query configuration
│   │   ├── pages/              # Page components
│   │   │   ├── Home.tsx        # Main application page
│   │   │   └── not-found.tsx   # 404 page
│   │   ├── App.tsx             # Root component
│   │   ├── main.tsx            # Application entry point
│   │   └── index.css           # Global styles
│   ├── index.html              # HTML template
│   ├── package.json            # Dependencies
│   ├── tsconfig.json           # TypeScript configuration
│   ├── vite.config.ts          # Vite configuration
│   └── tailwind.config.ts      # Tailwind CSS configuration
│
├── java_submission/            # Original Java implementation (reference)
│   ├── Main.java
│   ├── MoodHandler.java
│   ├── StudyPlanner.java
│   └── Result.java
│
└── README.md                   # This file
```

## 🧪 How It Works

### The Algorithm

The study planner uses a decision-tree algorithm that considers:

1. **Exam Urgency**
   - Last minute (≤ 1 day): Crisis management strategies
   - Short term (< 7 days): Intensive review mode
   - Long term (≥ 7 days): Sustainable learning pace

2. **Energy Level** (based on mood)
   - Fresh: High-intensity deep work
   - Okay: Balanced study sessions
   - Tired: Light learning with frequent breaks
   - Stressed: Anxiety management + basics

### Example Plans

**Scenario 1:** Fresh mood, 10 days left
```
Study Type: Concept Building
Duration: 50 mins study / 10 mins break
Break Advice: Do something you enjoy
Motivation: Building a strong foundation pays off
```

**Scenario 2:** Stressed mood, 1 day left
```
Study Type: Panic Control & Key Concepts
Duration: 20 mins study / 5 mins breathing
Break Advice: Do deep breathing exercises. Don't learn new topics
Motivation: You got this. Just focus on the basics
```

## 🎨 Tech Stack

### Frontend
- **React 18.3** - UI framework
- **TypeScript 5.6** - Type safety
- **Vite 7.3** - Build tool
- **Tailwind CSS 3.4** - Styling
- **Framer Motion 11** - Animations
- **Radix UI** - Accessible components
- **React Query** - State management
- **Wouter** - Lightweight routing
- **Lucide React** - Icons
- **Canvas Confetti** - Celebration effects

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set build settings:
     - **Framework Preset:** Vite
     - **Root Directory:** `frontend`
     - **Build Command:** `yarn build`
     - **Output Directory:** `dist`
   - Deploy! 🚀

### Other Platforms

The app is a standard Vite React app and works with:
- **Netlify** - Drag & drop the `frontend/dist` folder
- **GitHub Pages** - Use `gh-pages` package
- **Cloudflare Pages** - Connect via GitHub
- **Railway** - Deploy from GitHub

## 🛠️ Development

### Available Scripts

```bash
# Development server
yarn dev

# Type checking
yarn tsc

# Build for production
yarn build

# Preview production build
yarn preview

# Lint code
yarn lint
```

### Adding New Features

1. **New Mood Option:**
   - Update `Mood` type in `/frontend/src/lib/studyPlanner.ts`
   - Add mood in `moods` array in `MoodSelector.tsx`
   - Update logic in `generateStudyPlan()` function

2. **Customize Study Plans:**
   - Edit decision logic in `/frontend/src/lib/studyPlanner.ts`
   - Modify conditions and return values

3. **UI Customization:**
   - Update Tailwind theme in `tailwind.config.ts`
   - Modify CSS variables in `index.css`
   - Edit component styles directly

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ by passionate developers who understand the stress of exam preparation.

## 🙏 Acknowledgments

- Design inspiration from modern web apps
- Study techniques based on cognitive science research
- Java implementation reference included for academic purposes

## 📧 Support

Having issues? Found a bug? Have suggestions?

- Open an issue on GitHub
- Contact: [your-email@example.com]

---

<div align="center">

**Built with React, TypeScript, and lots of coffee ☕**

[Demo](https://your-demo-url.vercel.app) • [Report Bug](https://github.com/your-username/repo/issues) • [Request Feature](https://github.com/your-username/repo/issues)

</div>
