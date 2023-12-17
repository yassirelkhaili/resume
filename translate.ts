/** 
 * @author Yassir Elkhaili
 * @license MIT
*/

interface Translations {
  title: string;
  hero_title2: string;
  hero_title3: string;
  hero_title4: string;
  menu_home: string;
  menu_about: string;
  menu_member: string;
  menu_contact: string;
  login: string;
  signup: string;
  discover: string;
  watch: string;
  howitworksdesc: string;
  howitworks: string;
  howitworks1: string;
  howitworks2: string;
  howitworks3: string;
  search: string;
}

type Language = "EN" | "FR" | "DE";

const translations: Record<Language, Translations> = {
  EN: {
    title: "Full Stack Developer",
    hero_title2: "Freelance",
    hero_title3: "Potential",
    hero_title4: "Today!",
    menu_home: "Home",
    menu_about: "About",
    menu_member: "Become member",
    menu_contact: "Contact US",
    login: "login",
    signup: "Signup",
    discover: "Discover Now",
    watch: "watch video",
    howitworksdesc: "Easily initiate your quest for a fulfilling job with us.",
    howitworks: "How it works",
    howitworks1: "Complete Your Profile",
    howitworks2: "Search for Vacancies",
    howitworks3: "Apply for Jobs",
    search: "Search Here..."
  },
  FR: {
    title: "Développeur Full Stack",
    hero_title2: "potentiel en",
    hero_title3: "freelance dès",
    hero_title4: "aujourd'hui!",
    menu_home: "Accueil",
    menu_about: "A propos",
    menu_member: "Devenir membre",
    menu_contact: "Contact",
    login: "log in",
    signup: "S'inscrire",
    discover: "Découvrir maintenant",
    watch: "Regardez video",
    howitworksdesc: "Facilement lancez votre quête d'un emploi épanouissant avec nous.",
    howitworks: "comment ca marche",
    howitworks1: "Complétez votre profil",
    howitworks2: "Recherchez des postes vacants",
    howitworks3: "Postulez pour des emplois",
    search: "Recherche..."
  },
  DE: {
    title: "Full Stack Entwickler",
    hero_title2: "Freelance",
    hero_title3: "Potential",
    hero_title4: "Today!",
    menu_home: "Home",
    menu_about: "About",
    menu_member: "Become member",
    menu_contact: "Contact US",
    login: "login",
    signup: "Signup",
    discover: "Discover Now",
    watch: "watch video",
    howitworksdesc: "Easily initiate your quest for a fulfilling job with us.",
    howitworks: "How it works",
    howitworks1: "Complete Your Profile",
    howitworks2: "Search for Vacancies",
    howitworks3: "Apply for Jobs",
    search: "Search Here..."
  }
};

const languagesArray: Array<Language> = ["EN", "DE", "FR"];

let languageIndex: number = 1;

const handleTranslation = (language: Language): void => {
  const toTranslate = document.querySelectorAll<HTMLElement>("[data-translate]");
  toTranslate.forEach((translate) => {
    const key = translate.getAttribute("data-translate") as keyof Translations;
    const translation = translations[language] && translations[language][key];

    if (translation !== undefined) {
      if (key === "search") {
        (translate as HTMLInputElement).setAttribute("placeholder", translation);
      } else {
        translate.innerText = translation;
      }
    } else {
      console.warn(`Translation not found for key '${key}' in language '${language}'`);
    }
  });
  if (languageIndex === 2) {
    languageIndex = 0;
  } else {
    languageIndex++;
  }
};

document.addEventListener("DOMContentLoaded", () => {
    const languageToggler = document.querySelector(".languageToggler") as HTMLDivElement;
    languageToggler && languageToggler.addEventListener("click", () => handleTranslation(languagesArray[languageIndex]))
}
);
