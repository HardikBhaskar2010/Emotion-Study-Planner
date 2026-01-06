export type Mood =
  | "Fresh"
  | "Okay"
  | "Tired"
  | "Stressed"
  | "Anxious"
  | "Bored"
  | "Motivated";

export interface StudyPlan {
  mood: Mood;
  daysLeft: number;
  studyType: string;
  duration: string;
  breakAdvice: string;
  motivation: string;
  tasks: string[];
}

export function generateStudyPlan(
  mood: Mood,
  daysLeft: number
): StudyPlan {
  // ✅ defaults (strict TS happy)
  let studyType = "General Study";
  let duration = "30 mins study / 10 mins break";
  let breakAdvice = "Stay hydrated and stretch.";
  let motivation = "Every step forward counts.";
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
        breakAdvice = "Box breathing (4-4-4). Avoid caffeine.";
        motivation =
          "You don’t need everything. Focus on high-yield topics.";
        tasks = [
          "Flashcards for key terms",
          "Review one summary sheet",
          "Quick active recall",
        ];
        break;

      case "Tired":
        studyType = "Low-Energy Survival Review";
        duration = "15 mins study / 10 mins movement";
        breakAdvice = "Cold water splash + 2 min walk.";
        motivation = "Even 15 minutes matters.";
        tasks = [
          "Watch one summary video",
          "Scan diagrams",
          "Read bold keywords",
        ];
        break;

      case "Fresh":
      case "Motivated":
        studyType = "High-Intensity Active Recall";
        duration = "50 mins study / 10 mins active break";
        breakAdvice = "Stretch or quick body-weight exercise.";
        motivation = "You’re locked in. Let’s finish strong.";
        tasks = [
          "Solve 2 past papers",
          "Teach a concept aloud",
          "Drill weak formulas",
        ];
        break;

      default:
        studyType = "Focused Cramming";
        duration = "45 mins study / 15 mins break";
        breakAdvice = "Healthy snack. No doom-scrolling.";
        motivation = "Final push now = peace later.";
        tasks = [
          "Review highlighted notes",
          "Practice hard problems",
          "Plan exam strategy",
        ];
    }
  } else if (isModerate) {
    switch (mood) {
      case "Bored":
        studyType = "Gamified Practice";
        duration = "20 mins study / 5 mins reward";
        breakAdvice = "Small reward after each session.";
        motivation = "Change vibes, not goals.";
        tasks = [
          "Quiz yourself",
          "Create a mind map",
          "Change study location",
        ];
        break;

      case "Fresh":
      case "Motivated":
        studyType = "Deep Dive Exploration";
        duration = "90 mins study / 20 mins reset";
        breakAdvice = "Full disconnect during breaks.";
        motivation = "This is where mastery is built.";
        tasks = [
          "Read difficult chapters",
          "Write structured notes",
          "Fix weak concepts",
        ];
        break;

      case "Tired":
        studyType = "Audio-Visual Learning";
        duration = "30 mins video / 15 mins rest";
        breakAdvice = "Lofi / nature sounds only.";
        motivation = "Rest is productive when used right.";
        tasks = [
          "Watch lectures",
          "Listen to explanations",
          "Sketch rough diagrams",
        ];
        break;

      default:
        studyType = "Balanced Rotation";
        duration = "50 mins study / 10 mins break";
        breakAdvice = "Light cleanup during break.";
        motivation = "Consistency beats bursts.";
        tasks = [
          "Rotate subjects",
          "Summarize key points",
          "MCQ practice",
        ];
    }
  } else if (isRelaxed) {
    switch (mood) {
      case "Stressed":
      case "Anxious":
        studyType = "Confidence Building";
        duration = "30 mins study / 20 mins hobby";
        breakAdvice = "Do something non-academic.";
        motivation = "Plenty of time. Build calm foundations.";
        tasks = [
          "Organize materials",
          "Create weekly plan",
          "Read intro chapters",
        ];
        break;

      default:
        studyType = "Light Concept Scanning";
        duration = "45 mins study / 15 mins break";
        breakAdvice = "Good sleep > extra hours.";
        motivation = "Small daily effort = easy exam week.";
        tasks = [
          "Scan syllabus",
          "Skim textbook",
          "Set next-week goals",
        ];
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
