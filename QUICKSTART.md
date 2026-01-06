# ⚡ Quick Start Guide

Get the Emotion-Aware Study Assistant running in 60 seconds!

## 🎯 For Development

```bash
# 1. Navigate to frontend
cd /app/frontend

# 2. Install dependencies
yarn install

# 3. Start development server
yarn dev

# 4. Open in browser
# Visit: http://localhost:5173
```

That's it! The app is now running. 🎉

## 🚀 For Production

```bash
# Build the app
cd /app/frontend
yarn build

# Preview production build
yarn preview

# Deploy (see DEPLOYMENT.md for options)
```

## 📋 What You'll See

1. **Home Page** - Beautiful landing with mood selector
2. **Select Mood** - Choose: Fresh 🤩, Okay 🙂, Tired 😴, or Stressed 😫
3. **Enter Days** - Input days until exam (0-365)
4. **Generate Plan** - Get personalized study strategy with confetti! 🎉
5. **View Results** - See study type, duration, breaks, and motivation
6. **Start Over** - Reset and create a new plan

## 🧪 Test It Out

Try these combinations:

### Example 1: Well-Prepared Student
- **Mood:** Fresh 🤩
- **Days:** 14
- **Result:** "Concept Building" with 50-min sessions

### Example 2: Last-Minute Panic
- **Mood:** Stressed 😫
- **Days:** 1
- **Result:** "Panic Control" with breathing exercises

### Example 3: Exhausted But Committed
- **Mood:** Tired 😴
- **Days:** 3
- **Result:** "Structured Review" with longer breaks

## 🔧 Commands Cheat Sheet

```bash
# Development
yarn dev              # Start dev server
yarn build           # Build for production
yarn preview         # Preview production build

# Maintenance
yarn install         # Install dependencies
rm -rf node_modules  # Clear dependencies
yarn install         # Reinstall
```

## 📁 Key Files

```
/app/frontend/
├── src/
│   ├── lib/studyPlanner.ts  ← Core logic here
│   ├── pages/Home.tsx       ← Main page
│   └── components/          ← UI components
├── package.json             ← Dependencies
└── vite.config.ts          ← Build config
```

## 💡 Customization

### Change Colors
Edit `/app/frontend/tailwind.config.ts`

### Modify Study Plans
Edit `/app/frontend/src/lib/studyPlanner.ts`

### Add New Moods
1. Update `Mood` type in `studyPlanner.ts`
2. Add to `moods` array in `MoodSelector.tsx`
3. Update logic in `generateStudyPlan()`

## ❓ Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
yarn dev --port 3000
```

### Dependencies Not Installing
```bash
cd /app/frontend
rm -rf node_modules yarn.lock
yarn install
```

### Build Errors
```bash
# Check TypeScript errors
yarn tsc

# Clear cache
rm -rf dist .vite
yarn build
```

## 🎓 Next Steps

1. ✅ Run the app locally
2. 📖 Read [README.md](README.md) for full documentation
3. 🚀 Check [DEPLOYMENT.md](DEPLOYMENT.md) to deploy
4. 🔄 See [MIGRATION_NOTES.md](MIGRATION_NOTES.md) for architecture info

## 🆘 Need Help?

- **Frontend not starting?** Check if port 5173 is available
- **Styling broken?** Run `yarn install` again
- **Features not working?** Check browser console (F12)

---

**Happy coding! 🎉**

Need more details? Check the main [README.md](README.md)
