interface Role {
    id: number;
    name: string;
}
interface Skill {
    id: number;
    name: string;
    category: string;
    popular?: boolean;
}

interface Categorie {
    id: number;
    name: string;
}
interface Experience {
    id: number;
    name: string;
    value: string;
}
export interface DataContentItem {
    roles: Role[];
    skills: Skill[];
    categorie: Categorie[];
    experience:Experience[];
    
}

export const DataContents: DataContentItem = 
  {
    roles: [
      { id: 1, name: "UI/UX Designer" },
      { id: 2, name: "Frontend Developer" },
      { id: 3, name: "Senior Frontend Developer" },
      { id: 4, name: "Backend Developer" },
      { id: 5, name: "Full Stack Developer" },
      { id: 6, name: "Mobile App Developer" },
      { id: 7, name: "Product Designer" },
      { id: 8, name: "Graphic Designer" },
      { id: 9, name: "DevOps Engineer" },
      { id: 10, name: "QA Engineer" }
    ],
    skills: [
      // Popular Skills 
      { id: 1, name: "React", category: "Frontend", popular: true },
      { id: 2, name: "Figma", category: "Design", popular: true },
      { id: 3, name: "Python", category: "Backend", popular: true },
      { id: 4, name: "AWS", category: "Cloud", popular: true },
      { id: 5, name: "Flutter", category: "Mobile", popular: true },
      { id: 6, name: "Node.js", category: "Backend", popular: true },
      { id: 7, name: "UI/UX", category: "Design", popular: true },
      
      // Other Skills
      { id: 8, name: "Next.js", category: "Frontend", popular: false },
      { id: 9, name: "TypeScript", category: "Frontend", popular: false },
      { id: 10, name: "Tailwind CSS", category: "Frontend", popular: false },
      { id: 11, name: "Styled Components", category: "Frontend", popular: false },
      { id: 12, name: "Dart", category: "Mobile", popular: false },
      { id: 13, name: "React Native", category: "Mobile", popular: false },
      { id: 14, name: "Express.js", category: "Backend", popular: false },
      { id: 15, name: "PostgreSQL", category: "Database", popular: false },
      { id: 16, name: "MongoDB", category: "Database", popular: false },
      { id: 17, name: "Firebase", category: "Backend", popular: false }
    ],
    categorie: [
        {id: 1, name:"Web Development"},
        {id: 2, name:"Mobile Apps"},
        {id: 3, name:" Graphic Design"}
    ],
    experience: [
        {id: 1, value:"All+", name:"Exp"},
        {id: 2, value:"Medium", name:"Exp"},
        {id: 3, value:"Lavel 5+", name:"Exp"}
    ],
    
  }
