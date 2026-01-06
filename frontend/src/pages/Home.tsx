import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Calendar, ArrowRight, RotateCcw } from "lucide-react";
import { MoodSelector } from "@/components/MoodSelector";
import { PlanCard } from "@/components/PlanCard";
import { generateStudyPlan, type Mood, type StudyPlan } from "@/lib/studyPlanner";

export default function Home() {
  const [mood, setMood] = useState<Mood | null>(null);
  const [daysLeft, setDaysLeft] = useState<string>("");
  const [plan, setPlan] = useState<StudyPlan | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!mood || !daysLeft) return;
    
    setIsGenerating(true);
    
    // Small artificial delay for better UX (feel the "thinking")
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const generatedPlan = generateStudyPlan(mood, parseInt(daysLeft));
    setPlan(generatedPlan);
    setIsGenerating(false);
    
    // Trigger confetti for positive feedback
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8B5CF6', '#F472B6', '#38BDF8']
    });
  };

  const handleReset = () => {
    setPlan(null);
    setMood(null);
    setDaysLeft("");
  };

  const isValid = mood && daysLeft && parseInt(daysLeft) >= 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-float pointer-events-none" style={{ animationDelay: "-3s" }} />
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-4xl z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-zinc-300">AI-Powered Study Assistant</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-foreground mb-4">
            Study Smarter, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
              Not Harder
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Get a personalized study strategy based on your current mood and exam timeline.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!plan ? (
            <motion.div
              key="input-form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-3xl p-6 md:p-10"
              data-testid="input-form"
            >
              <div className="space-y-8">
                {/* Step 1: Mood */}
                <div className="space-y-4">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">1</span>
                    How are you feeling right now?
                  </label>
                  <MoodSelector selected={mood} onSelect={setMood} />
                </div>

                <div className="h-px bg-border/50 w-full" />

                {/* Step 2: Days Left */}
                <div className="space-y-4">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">2</span>
                    Days until your exam?
                  </label>
                  <div className="relative max-w-sm">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <input
                      type="number"
                      value={daysLeft}
                      onChange={(e) => setDaysLeft(e.target.value)}
                      placeholder="e.g. 7"
                      min="0"
                      data-testid="days-input"
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-zinc-900 border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-mono text-lg"
                    />
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleGenerate}
                    disabled={!isValid || isGenerating}
                    data-testid="generate-button"
                    className="
                      group relative px-8 py-4 rounded-xl font-bold text-lg
                      bg-primary text-primary-foreground shadow-lg shadow-primary/25
                      hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5
                      active:translate-y-0 active:shadow-md
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                      transition-all duration-200 ease-out w-full md:w-auto flex items-center justify-center gap-2
                    "
                  >
                    {isGenerating ? (
                      <>
                        <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                        Thinking...
                      </>
                    ) : (
                      <>
                        Generate My Plan
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result-view"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <PlanCard plan={plan} />
              
              <div className="flex justify-center pt-8">
                <button
                  onClick={handleReset}
                  data-testid="reset-button"
                  className="
                    flex items-center gap-2 px-6 py-3 rounded-full
                    bg-white dark:bg-zinc-800 border border-border
                    text-muted-foreground hover:text-foreground hover:border-primary
                    hover:shadow-md transition-all duration-200
                  "
                >
                  <RotateCcw className="w-4 h-4" />
                  Start Over
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-muted-foreground/60">
        <p>Built with React, Tailwind & Framer Motion</p>
      </footer>
    </div>
  );
}