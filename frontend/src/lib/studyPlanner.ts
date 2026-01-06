export type Mood = "Fresh" | "Okay" | "Tired" | "Stressed" | "Anxious" | "Bored" | "Motivated";

export interface StudyPlan {
  mood: Mood;
  daysLeft: number;
  studyType: string;
  duration: string;
  breakAdvice: string;
  motivation: string;
  tasks: string[];
}

export function generateStudyPlan(mood: Mood, daysLeft: number): StudyPlan {
  let studyType: string;
  let duration: string;
  let breakAdvice: string;
  let motivation: string;
  let tasks: string[] = [];

  const isUrgent = daysLeft <= 2;
  const isModerate = daysLeft > 2 && daysLeft <= 7;
  const isRelaxed = daysLeft > 7;

  if (isUrgent) {
    switch (mood) {
      case "Stressed":
      case "Anxious":
        studyType = "Panic Mitigation & Core Concepts";
        duration = "25 mins study / 10 mins meditation";
        breakAdvice = "Box breathing (4s in, 4s hold, 4s out). Avoid caffeine.";
        motivation = "You don't need to know everything. Just focus on the 20% that gives 80% results.";
        tasks = ["Flashcards for key terms", "Review one summary sheet", "Quick active recall session"];
        break;
      case "Tired":
        studyType = "Low-Energy Survival Review";
        duration = "15 mins study / 10 mins movement";
        breakAdvice = "Splash cold water on your face. Step outside for 2 mins.";
        motivation = "Consistency over intensity. Just 15 minutes counts.";
        tasks = ["Watch one summary video", "Look over diagrams", "Read bolded sections only"];
        break;
      case "Fresh":
      case "Motivated":
        studyType = "High-Intensity Active Recall";
        duration = "50 mins study / 10 mins active break";
        breakAdvice = "Quick stretch or 20 pushups to keep the energy up.";
        motivation = "You're in the zone! Let's crush this final prep.";
        tasks = ["Solve 2 past papers", "Teach a concept to an imaginary student", "Drill difficult formulas"];
        break;
      default:
        studyType = "Focused Cramming";
        duration = "45 mins study / 15 mins break";
        breakAdvice = "Healthy snack - nuts or fruit. No scrolling social media.";
        motivation = "Final push! You'll be resting soon.";
        tasks = ["Review highlighted notes", "Practice 5 hard problems", "Outline exam strategy"];
    }
  } else if (isModerate) {
    switch (mood) {
      case "Bored":
        studyType = "Gamified Practice";
        duration = "20 mins study / 5 mins reward";
        breakAdvice = "Eat one piece of chocolate or play one song you love.";
        motivation = "Change the environment! Go to a café or library.";
        tasks = ["Quiz yourself with an app", "Turn a boring chapter into a mind map", "Change study location"];
        break;
      case "Fresh":
      case "Motivated":
        studyType = "Deep Dive Exploration";
        duration = "90 mins study / 20 mins reset";
        breakAdvice = "Full disconnect. Leave your desk. Go for a walk.";
        motivation = "This is when the real learning happens. Keep pushing!";
        tasks = ["Read complex chapters", "Write detailed notes", "Identify and fix knowledge gaps"];
        break;
      case "Tired":
        studyType = "Audio-Visual Passive Learning";
        duration = "30 mins video / 15 mins rest";
        breakAdvice = "Listen to ambient lofi or nature sounds.";
        motivation = "It's okay to slow down. Rest is part of the work.";
        tasks = ["Watch educational YouTube videos", "Listen to lecture recordings", "Sketch rough diagrams"];
        break;
      default:
        studyType = "Balanced Topic Rotation";
        duration = "50 mins study / 10 mins break";
        breakAdvice = "Tidy your workspace during the break.";
        motivation = "Steady progress wins the race.";
        tasks = ["Rotate between two subjects", "Summarize 3 pages", "Practice 10 multiple choice questions"];
    }
} else if (isRelaxed) {
  // Relaxed (DaysLeft > 7)
      switch (mood) {
      case "Stressed":
      case "Anxious":
        studyType = "Foundational Confidence Building";
        duration = "30 mins study / 20 mins hobby";
        breakAdvice = "Do something completely unrelated to study.";
        motivation = "Time is on your side. Let's build a solid base slowly.";
        tasks = ["Organize all study materials", "Create a weekly schedule", "Read intro chapters"];
        break;
      default:
        studyType = "Light Concept Scanning";
        duration = "45 mins study / 15 mins break";
        breakAdvice = "Stay hydrated and keep a regular sleep schedule.";
        motivation = "A little bit every day makes the exam week easy.";
        tasks = ["Familiarize with the syllabus", "Skim the textbook", "Set goals for next week"];
    }
  }

  return {
    mood,
    daysLeft,
    studyType,
    duration,
    breakAdvice,
    motivation,
    tasks,
  };
}
