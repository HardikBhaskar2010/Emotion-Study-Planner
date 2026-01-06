export type Mood = "Fresh" | "Okay" | "Tired" | "Stressed";

export interface StudyPlan {
  mood: Mood;
  daysLeft: number;
  studyType: string;
  duration: string;
  breakAdvice: string;
  motivation: string;
}

export function generateStudyPlan(mood: Mood, daysLeft: number): StudyPlan {
  let studyType: string;
  let duration: string;
  let breakAdvice: string;
  let motivation: string;

  // Logic mirrored from Java backend and TypeScript server
  if (daysLeft <= 1) {
    if (mood === "Stressed") {
      studyType = "Panic Control & Key Concepts";
      duration = "20 mins study / 5 mins breathing";
      breakAdvice = "Do deep breathing exercises. Don't learn new topics.";
      motivation = "You got this. Just focus on the basics.";
    } else if (mood === "Tired") {
      studyType = "Survival Mode";
      duration = "15 mins study / 10 mins nap";
      breakAdvice = "Power naps are essential right now.";
      motivation = "Better done than perfect.";
    } else {
      studyType = "High-Intensity Cramming";
      duration = "50 mins study / 10 mins active break";
      breakAdvice = "Walk around to keep blood flowing.";
      motivation = "Final push! Give it everything.";
    }
  } else if (daysLeft < 7) {
    if (mood === "Fresh") {
      studyType = "Deep Dive & Practice Papers";
      duration = "60 mins study / 10 mins break";
      breakAdvice = "Stretch or grab a healthy snack.";
      motivation = "Maximize this energy!";
    } else {
      studyType = "Structured Review";
      duration = "45 mins study / 15 mins break";
      breakAdvice = "Listen to music or meditate.";
      motivation = "Consistency is key.";
    }
  } else {
    if (mood === "Tired") {
      studyType = "Light Reading & Videos";
      duration = "30 mins study / 15 mins rest";
      breakAdvice = "Rest your eyes. Hydrate.";
      motivation = "Slow progress is still progress.";
    } else {
      studyType = "Concept Building";
      duration = "50 mins study / 10 mins break";
      breakAdvice = "Do something you enjoy.";
      motivation = "Building a strong foundation pays off.";
    }
  }

  return {
    mood,
    daysLeft,
    studyType,
    duration,
    breakAdvice,
    motivation,
  };
}