import { motion } from "framer-motion";
import { 
  Brain, 
  Timer, 
  Coffee, 
  Sparkles, 
  CheckCircle2, 
  Layout,
  MessageCircle
} from "lucide-react";
import { StudyPlan } from "@/lib/studyPlanner";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6 md:grid-cols-2 w-full max-w-4xl mx-auto"
      data-testid="plan-card"
    >
      <motion.div variants={item} className="md:col-span-2">
        <Card className="overflow-hidden border-2 border-primary/20 bg-zinc-900/40 backdrop-blur-md">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <Sparkles className="w-8 h-8" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight">Your Custom Strategy</CardTitle>
            <CardDescription className="text-lg">
              Optimized for <span className="font-semibold text-primary">{plan.mood}</span> mood • <span className="font-semibold text-primary">{plan.daysLeft}</span> days left
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center pt-0">
            <div className="relative inline-block">
              <MessageCircle className="absolute -left-8 -top-2 w-6 h-6 text-primary/20" />
              <p className="italic text-muted-foreground max-w-lg mx-auto text-lg leading-relaxed">
                "{plan.motivation}"
              </p>
              <MessageCircle className="absolute -right-8 -bottom-2 w-6 h-6 text-primary/20 rotate-180" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="h-full bg-zinc-900/40 border-zinc-800 hover:border-blue-500/50 transition-colors">
          <CardHeader className="flex flex-row items-center space-x-4 space-y-0">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="text-xl">Focus Style</CardTitle>
              <CardDescription>Methodology</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium text-foreground" data-testid="study-type">{plan.studyType}</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="h-full bg-zinc-900/40 border-zinc-800 hover:border-orange-500/50 transition-colors">
          <CardHeader className="flex flex-row items-center space-x-4 space-y-0">
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
              <Timer className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="text-xl">Session Timing</CardTitle>
              <CardDescription>Pomodoro / Routine</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium text-foreground" data-testid="duration">{plan.duration}</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="h-full bg-zinc-900/40 border-zinc-800 hover:border-green-500/50 transition-colors">
          <CardHeader className="flex flex-row items-center space-x-4 space-y-0">
            <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="text-xl">Break Ritual</CardTitle>
              <CardDescription>Energy management</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium text-foreground" data-testid="break-advice">{plan.breakAdvice}</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="h-full bg-zinc-900/40 border-zinc-800 hover:border-purple-500/50 transition-colors">
          <CardHeader className="flex flex-row items-center space-x-4 space-y-0">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
              <Layout className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="text-xl">Action Items</CardTitle>
              <CardDescription>To-do list</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {plan.tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {task}
                  </span>
                </li>
              ))}
              {plan.tasks.length === 0 && (
                <li className="text-sm text-muted-foreground italic">No specific tasks identified yet.</li>
              )}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
