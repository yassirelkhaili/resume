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
  education1_header: string;
  education1_title: string;
  position1_description: string;
  position2_description: string;
  position3_description: string;
  education1_description: string;
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
    position3_title: "Intern",
    position1_description: "At 21 knowledge, I developed innovative features for prominent websites, including smiyli.com and partnercorner.com. Leveraging my expertise in PHP, Laravel, SQL and Javascript to inhance the company's digital landscape by blending creativity and technical expertise to deliver significant value.",
    position2_description: "During my Webcinq internship, I crafted dynamic websites for diverse clients, including Skipcash.com, utilizing technologies like TypeScript and Tailwind CSS. This experience offered insights into creating responsive and visually appealing websites.",
    position3_description: " At Eureka Digital, I started my professional journey using HTML, CSS, Bootstrap, JavaScript to create static websites for small and medium-sized enterprises. As I advanced, I delved into ReactJS and Laravel, gaining a deeper understanding of client-specific needs.",
    education1_header: "Cadi Ayyad University",
    education1_title: "Faculty of Sciences and Technologies",
    education1_description: "During my time at the Faculty of Sciences and Technology, I gained a foundational understanding of general programming fundamentals as well as C language basics, setting the stage for my journey into computer science and software development.",
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
    position3_title: "Stagiaire",
    position1_description: "Chez 21 Knowledge, j'ai développé des fonctionnalités innovantes pour des sites web comme smiyli.com et partnercorner.com. En utilisant mes compétences en PHP, Laravel, SQL et Javascript, j'ai enrichi le panorama numérique de l'entreprise en alliant créativité et expertise technique pour apporter une valeur significative.",
    position2_description: "Pendant mon stage chez Webcinq, j'ai conçu des sites web dynamiques pour une clientèle variée, dont Skipcash.com, en utilisant des technologies telles que TypeScript et Tailwind CSS. Cette expérience m'a apporté des perspectives sur la création de sites web réactifs et esthétiquement attrayants.",
    position3_description: "Chez Eureka Digital, j'ai entamé mon parcours professionnel en utilisant HTML, CSS, Bootstrap et JavaScript pour créer des sites web statiques destinés aux petites et moyennes entreprises. En progressant, j'ai aquis ReactJS et Laravel pour approfondir ma compréhension des besoins spécifiques des clients.",
    education1_header: "Université Cadi Ayyad",
    education1_title: "Faculté des sciences et technologies",
    education1_description: "Pendant mes études à la Faculté des sciences et de la technologie, j'ai appris une compréhension fondamentale des principes généraux de programmation ainsi que des bases du langage C, préparant ainsi le terrain pour mon parcours en informatique et en développement logiciel.",
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
    position3_title: "Praktikant",
    position1_description: "Bei 21 Knowledge trieb ich die Entwicklung innovativer Funktionen für Websites wie smiyli.com und partnercorner.com voran. Mit Expertise in PHP, Laravel, SQL und JavaScript optimierte ich das digitale Umfeld des Unternehmens durch kreatives Denken und technisches Wissen, um signifikanten Mehrwert zu schaffen.",
    position2_description: "Während meines Praktikums bei Webcinq habe ich dynamische Websites für verschiedene Kunden erstellt, einschließlich Skipcash.com, unter Verwendung von Technologien wie TypeScript und Tailwind CSS. Diese Erfahrung gab Einblicke in die Erstellung responsiver und visuell ansprechender Websites.",
    position3_description: "Bei Eureka Digital begann meine berufliche Reise. Dort erstellte ich statische Websites für kleine und mittelständische Unternehmen mit HTML, CSS, Bootstrap und JavaScript. Später vertiefte ich mein Verständnis für die Kundenanforderungen durch das Studium von ReactJS und Laravel.",
    education1_header: "Universität Cadi Ayyad.",
    education1_title: "Fakultät für Naturwissenschaften und Technologien",
    education1_description: "Während meines Studiums an der Fakultät für Naturwissenschaften und Technologie habe ich ein grundlegendes Verständnis für allgemeine Programmiergrundlagen sowie die Grundlagen der Programmiersprache C erworben und somit den Weg für meine Reise in die Informatik und Softwareentwicklung geebnet.",
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
