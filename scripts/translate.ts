/** 
 * @author Yassir Elkhaili
 * @license MIT
*/

interface Translations {
  job_title: string;
  about_me: string;
  experience: string;
  education: string;
  languages: string;
  skills: string;
  interests: string;
  references: string;
  position1_title: string;
  position2_title: string;
  position3_title: string;
  education1_title: string;
  education1_description: string;
  education2_header: string;
  education2_title: string;
  education2_description: string;
  position1_phrase1: string;
  position1_phrase2: string;
  position1_phrase3: string;
  position1_phrase4: string;
  position1_phrase5: string;
  position1_phrase6: string;
  position2_phrase1: string;
  position2_phrase2: string;
  position2_phrase3: string;
  position2_phrase4: string;
  position3_phrase1: string;
  position3_phrase2: string;
  position3_phrase3: string;
  position3_phrase4: string;
  french: string;
  english: string;
  arabic: string;
  german: string;
}

type Language = "EN" | "FR" | "DE";

const translations: Record<Language, Translations> = {
  EN: {
    job_title: "Full Stack Developer",
    about_me: "Passionate Full Stack Developer skilled in Typescript, PHP, and C. Expertise in designing scalable solutions. Collaborative team player with experience in high-quality project delivery. Actively exploring emerging technologies to stay ahead. Eager to contribute, solve complex challenges and drive impactful results.",
    experience: "Experience",
    education: "Education",
    languages: "Languages",
    skills: "Skills",
    interests: "Interests",
    references: "References",
    position1_title: "Full Stack Developer",
    position2_title: "Front End Developer",
    position3_title: "Developer Intern",
    position1_phrase1: "Developed features for websites like smiyli.com and partnercorner.com.",
    position1_phrase2: "Enhanced the company's digital landscape, operations and workflow.",
    position1_phrase3: "Maintained and updated web applications to meet evolving requirements.",
    position1_phrase4: "Collaborated with cross-functional teams to implement new functionalities.",
    position1_phrase5: "Enhanced the overall user experience and efficiency of targeted websites.",
    position1_phrase6: "Required Skills: PHP, Laravel, SQL, Javascript.",
    position2_phrase1: "Crafted dynamic websites for diverse clients, including skipcash.com.",
    position2_phrase2: "Demonstrated proficiency in creating dynamic and efficient web experiences.",
    position2_phrase3: "Gained insights into creating responsive and visually appealing websites.",
    position2_phrase4: "Required Skills: Typescript, TailwindCSS, ReactJS.",
    position3_phrase1: "Created static websites for small and medium-sized enterprises.",
    position3_phrase2: "Progressed to more advanced technologies, to meet specific client demands.",
    position3_phrase3: "Developed my understanding of client needs, tailoring solutions accordingly.",
    position3_phrase4: "Required Skills: HTML, CSS, Bootstrap, JavaScript, Laravel.",
    education1_title: "Developer Program",
    education1_description: "Recognizing the value of continuous learning, and despite my prior professional experience. I enrolled in the program to refine my skills, take advantage of the structured curriculum and engage with senior mentors, which fortified my foundation in software engineering.",
    education2_header: "Cadi Ayyad University",
    education2_title: "Faculty of Sciences and Technologies",
    education2_description: "During my time at the Faculty of Sciences and Technology, I gained a foundational understanding of general programming fundamentals as well as C language basics, setting the stage for my journey into computer science and software development.",
    english: "English: IELTS C1",
    french: "French: Fluent",
    german: "German: TELC C1",
    arabic: "Arabic: Native",
  },
  FR: {
    job_title: "Développeur Full Stack",
    about_me: "Développeur Full Stack passionné, compétent en Typescript, PHP et C. Expérience dans la conception de solutions évolutives et haute quelité. Joueur d'équipe collaboratif. Reste à jour avec les technologies émergentes. Avide de contribuer, résoudre des défis complexes et de générer des résultats impactants.",
    experience: "Expérience",
    education: "Éducation",
    languages: "Langues",
    skills: "Compétences",
    interests: "Intérêts",
    references: "Références",
    position1_title: "Développeur Full Stack",
    position2_title: "Développeur Front End",
    position3_title: "Développeur Stagiaire",
    position1_phrase1: "Développé des fonctionnalités pour les sites: smiyli.com et partnercorner.com.",
    position1_phrase2: "Amélioré les opérations numérique et le flux de travail de l'entreprise.",
    position1_phrase3: "Maintenu et mis à jour des applications web suivant l'évolution du marché.",
    position1_phrase4: "Collaboré avec l'équipes pour mettre en œuvre de nouvaux  fonctionnalités.",
    position1_phrase5: "Amélioré l'expérience utilisateur globale et l'efficacité des sites web ciblés.",
    position1_phrase6: "Compétences requises : PHP, Laravel, SQL, Javascript.",
    position2_phrase1: "Conçu des sites web dynamiques pour divers clients, y compris skipcash.com.",
    position2_phrase2: "Démontré expertise dans la conception d'expériences web dynamiques.",
    position2_phrase3: "Acquis une vision pour la création de sites web réactifs et attrayants.",
    position2_phrase4: "Compétences requises : Typescript, TailwindCSS, ReactJS.",
    position3_phrase1: "Créé des sites web statiques pour les petites et moyennes entreprises.",
    position3_phrase2: "Passé à des technologies avancées pour répondre aux demandes des clients.",
    position3_phrase3: "Développé ma compréhension des besoins spécifiques des clients.",
    position3_phrase4: "Compétences requises : HTML, CSS, Bootstrap, JavaScript, Laravel.",
    education2_header: "Université Cadi Ayyad",
    education2_title: "Faculté des sciences et technologies",
    education2_description: "Pendant mes études à la Faculté des sciences et de la technologie, j'ai appris une compréhension fondamentale des principes généraux de programmation ainsi que des bases du langage C, préparant ainsi le terrain pour mon parcours en informatique et en développement logiciel.",
  education1_title: "Programme Développeur",
  education1_description: "Reconnaissant la valeur de l'apprentissage continu et malgré mon expérience professionnelle antérieure, je me suis inscrit au programme pour perfectionner mes compétences, tirer parti du programme structuré et échanger avec des mentors seniors, renforçant ainsi ma base en ingénierie logicielle.",
  english: "Englais: IELTS C1",
  french: "Français: Courant",
  german: "Allemand: TELC C1",
  arabic: "Arabe: Natale",
  },
  DE: {
    job_title: "Full Stack Entwickler",
    about_me: "Full Stack Entwickler mit Kenntnissen in TypeScript, PHP und C. Mit Erfahrung in der Gestaltung skalierbarer und hochwertiger Lösungen. Teamplayer, stets auf dem neuesten Stand in aufkommenden Technologien. Bereit, komplexe Herausforderungen tatkräftig anzugehen und nachhaltige Ergebnisse zu erzielen.",
    experience: "Erfahrung",
    education: "Ausbildung",
    languages: "Sprachen",
    skills: "Fähigkeiten",
    interests: "Interessen",
    references: "Referenzen",
    position1_title: "Full Stack Entwickler",
    position2_title: "Front End Entwickler",
    position3_title: "Entwickler Praktikant",
    position1_phrase1: "Entwickelte Funktionen für Websites wie smiyli.com und partnercorner.com.",
    position1_phrase2: "Optimiert die digitalen Abläufe und den Workflow des Unternehmens.",
    position1_phrase3: "Wartete und aktualisierte Webanwendungen gemäß den Marktentwicklungen.",
    position1_phrase4: "Kollaborierte mit dem Team, um neue Funktionen umzusetzen.",
    position1_phrase5: "Optimierte die Nutzererfahrung und Effizienz der ausgewählten Websites.",
    position1_phrase6: "Erforderliche Fähigkeiten: PHP, Laravel, SQL, Javascript.",
    position2_phrase1: "Erstellte dynamische Websites für verschiedene Kunden wie skipcash.com.",
    position2_phrase2: "Zeigte Kompetenz in der Gestaltung effizienter Web-Erlebnisse.",
    position2_phrase3: "Erhielt Einblicke in die Entwicklung ansprechender und responsiver Webssites.",
    position2_phrase4: "Erforderliche Fähigkeiten: Typescript, TailwindCSS, ReactJS.",
    position3_phrase1: "Erstellte statische Websites für kleine und mittelständische Unternehmen.",
    position3_phrase2: "Erlernte moderne Technologien zur Erfüllung spezifischer Kundenbedürfnisse.",
    position3_phrase3: "Vertiefte mein Kundenverständnis um passende Lösungen zu entwickelen.",
    position3_phrase4: "Erforderliche Fähigkeiten: HTML, CSS, Bootstrap, JavaScript, Laravel.",
    education1_title: "Entwickler Programm",
    education1_description: "Die Wertschätzung für kontinuierliches Lernen und trotz meiner vorherigen Berufserfahrung habe ich mich für das Programm eingeschrieben. Ziel: Fähigkeiten schärfen, strukturierten Lehrplan nutzen und von erfahrenen Mentoren lernen. Eine Erfahrung, die meine Grundlagen in der Softwareentwicklung gestärkt hat.",
    education2_header: "Universität Cadi Ayyad.",
    education2_title: "Fakultät für Naturwissenschaften und Technologien",
    education2_description: "Während meines Studiums an der Fakultät für Naturwissenschaften und Technologie habe ich ein grundlegendes Verständnis der Programmierung und die C-Programmierung erlernt, was meinen Weg in die Informatik und Anwendungsentwicklung geebnet hat.",
  english: "Englisch: IELTS C1",
  french: "Französisch: Fließend",
  german: "Deutsch: TELC C1",
  arabic: "Arabisch: Muttersprache",
  }
};

const languagesArray: Array<Language> = ["EN", "DE", "FR"];

let languageIndex: number = 1;

const handleTranslation = (language: Language): void => {
  const toTranslate = document.querySelectorAll("[data-translate]") as NodeListOf<HTMLElement>;
  toTranslate.forEach((translate: HTMLElement) => {
    const key = translate.getAttribute("data-translate") as keyof Translations;
    const translation = translations[language] && translations[language][key];
    translation !== undefined ? translate.innerText = translation : console.warn(`Translation not found for key '${key}' in language '${language}'`);
  });
  languageIndex = languageIndex === 2 ? 0 : ++languageIndex;
};
document.addEventListener("DOMContentLoaded", () => {
    const languageToggler = document.querySelector(".languageToggler") as HTMLDivElement;
    languageToggler && languageToggler.addEventListener("click", () => handleTranslation(languagesArray[languageIndex]))
}
);
