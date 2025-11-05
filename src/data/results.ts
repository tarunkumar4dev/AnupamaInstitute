export type Toppers = {
    name: string;
    cls: string;      // "Class 10", "Class 12", etc.
    score: string;    // "96%", "483/500"
    subject?: string; // optional highlight
    year: number;
    photo?: string;
  };
  
  export const TOPPERS: Toppers[] = [
    { name: "Anuj Rathore", cls: "Class 10", score: "97%",subject: "in Maths", year: 2025 },
    { name: "Nanki", cls: "Class 9", score: "95%", subject: "Science", year: 2025 },
    { name: "Vyom", cls: "Class 9", score: "94%", subject: "Maths", year: 2025 },
  ];
  