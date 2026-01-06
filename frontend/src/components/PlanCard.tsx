import { motion } from "framer-motion";
import { Clock, Battery, Coffee, Quote } from "lucide-react";
import { StudyPlan } from "@/lib/studyPlanner";

interface PlanCardProps {
  plan: StudyPlan;
}

export function PlanCard({ plan }: PlanCardProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-3xl mx-auto space-y-6"
      data-testid="plan-card"
    >
      <motion.div variants={item} className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Your Personalized Strategy
        </h2>
        <p className="text-muted-foreground mt-2">
          Optimized for when you feel <span className="font-semibold text-foreground">{plan.mood.toLowerCase()}</span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Strategy Card */}
        <motion.div variants={item} className="glass-card rounded-2xl p-6 relative overflow-hidden group" data-testid="study-type-card">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Battery className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Study Mode</h3>
              <p className="text-2xl font-display font-bold text-primary mt-1" data-testid="study-type">{plan.studyType}</p>
            </div>
          </div>
        </motion.div>

        {/* Duration Card */}
        <motion.div variants={item} className="glass-card rounded-2xl p-6 relative overflow-hidden group" data-testid="duration-card">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors" />
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Session Length</h3>
              <p className="text-2xl font-display font-bold text-blue-600 mt-1" data-testid="duration">{plan.duration}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Break Advice */}
      <motion.div variants={item} className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden border-l-4 border-l-secondary" data-testid="break-advice-card">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="p-4 rounded-full bg-secondary/20 text-secondary-foreground shrink-0">
            <Coffee className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Break Strategy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="break-advice">
              {plan.breakAdvice}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Motivation Quote */}
      <motion.div variants={item} className="bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl p-8 text-center relative" data-testid="motivation-card">
        <Quote className="w-12 h-12 text-primary/20 absolute top-4 left-4 rotate-180" />
        <p className="text-xl md:text-2xl font-serif italic text-foreground/80 leading-relaxed px-6" data-testid="motivation">
          "{plan.motivation}"
        </p>
        <Quote className="w-12 h-12 text-primary/20 absolute bottom-4 right-4" />
      </motion.div>
    </motion.div>
  );
}