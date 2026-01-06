import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Mood } from "@/lib/studyPlanner";

interface MoodSelectorProps {
  selected: Mood | null;
  onSelect: (mood: Mood) => void;
}

const moods: { id: Mood; emoji: string; label: string }[] = [
  { id: "Fresh", emoji: "🤩", label: "Fresh" },
  { id: "Motivated", emoji: "🔥", label: "Motivated" },
  { id: "Okay", emoji: "🙂", label: "Okay" },
  { id: "Bored", emoji: "🥱", label: "Bored" },
  { id: "Tired", emoji: "😴", label: "Tired" },
  { id: "Stressed", emoji: "😫", label: "Stressed" },
  { id: "Anxious", emoji: "😰", label: "Anxious" },
];

export function MoodSelector({ selected, onSelect }: MoodSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full" data-testid="mood-selector">
      {moods.map((mood) => (
        <motion.button
          key={mood.id}
          whileHover={{ y: -5, scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(mood.id)}
          data-testid={`mood-${mood.id.toLowerCase()}`}
          className={cn(
            "relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 outline-none focus:ring-4 focus:ring-primary/20",
            selected === mood.id
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 ring-2 ring-offset-2 ring-offset-background ring-primary border-transparent"
              : "bg-zinc-900/50 border-zinc-800 hover:border-primary/50 text-muted-foreground hover:text-foreground hover:shadow-md hover:bg-zinc-800/50"
          )}
        >
          <span className="text-4xl mb-3 filter drop-shadow-sm">{mood.emoji}</span>
          <span className="font-display font-bold text-lg">{mood.label}</span>
          
          {selected === mood.id && (
            <motion.div
              layoutId="mood-indicator"
              className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shadow-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </motion.div>
          )}
        </motion.button>
      ))}
    </div>
  );
}