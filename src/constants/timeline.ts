interface TimelineItem {
  date: string;
  company: string;
  title: string;
  description: string;
  responsibilities: string[];
}

export const timeline: TimelineItem[] = [
  {
    date: "2023 - Present",
    company: "Example Company",
    title: "Senior Developer",
    description: "Leading development of web applications",
    responsibilities: [
      "Architecting scalable solutions",
      "Managing team of developers",
      "Implementing best practices"
    ]
  }
];