/** 
 * @author Yassir Elkhaili
 * @license MIT
*/

let currentTheme: string = "";

const handleInitialTheme = () => {
  const rootClasses: Array<string> = ["transition", "duration-100"];
  rootClasses.forEach((rootClass: string) =>
    document.documentElement.classList.add(rootClass)
  );

const themeStored = localStorage.getItem("color-theme");
if (themeStored === "dark" || (themeStored === null && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
    currentTheme = "dark";
} else {
    localStorage.setItem("color-theme", "light");
    currentTheme = "light";
}
};

handleInitialTheme();

document.addEventListener("DOMContentLoaded", () => {
    const themeChanger = document.querySelector(".theme-changer") as HTMLImageElement;

    const handleThemeChangerIcon = (): void => {
        const oldthemeChangerSrc: string | null = themeChanger.getAttribute("src");
        if (oldthemeChangerSrc) {
            const lastSrcElement: string = oldthemeChangerSrc.split("/")[oldthemeChangerSrc.split("/").length - 1];
            let newThemeChangerSrc: string = "";
            lastSrcElement === "sun--v1.png" ? newThemeChangerSrc = oldthemeChangerSrc.replace(lastSrcElement, "bright-moon.png") : newThemeChangerSrc = oldthemeChangerSrc.replace(lastSrcElement, "sun--v1.png");
            themeChanger.setAttribute("src", newThemeChangerSrc);
        }
    }

    const changeImagesColor = () : void => {
        const images = document.querySelectorAll(".hobby-icon") as NodeListOf<HTMLImageElement>;
        images.forEach((image: HTMLImageElement) => {
            const oldImageSrc: string | null = image.getAttribute("src");
            if (oldImageSrc) {
                let newImageSrc: string = ""
                currentTheme === "dark" ? newImageSrc = oldImageSrc.replace(oldImageSrc.split("/")[5], "f8fafc") : newImageSrc = oldImageSrc.replace(oldImageSrc.split("/")[5], "707071");
                image.setAttribute("src", newImageSrc);
            }
        })
    }

    changeImagesColor();

    const themeChangeHandler = (): void => {
        if (currentTheme === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
            currentTheme = "dark";
            changeImagesColor();
            handleThemeChangerIcon();
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
            currentTheme = "light";
            changeImagesColor();
            handleThemeChangerIcon();
        }
    }
 
    themeChanger && themeChanger.addEventListener("click", themeChangeHandler);

    const initializeThemeChangerIcon = (): void => {
        currentTheme === "light" ? themeChanger.setAttribute("src", "https://img.icons8.com/ios-filled/20/707071/bright-moon.png") : themeChanger.setAttribute("src", "https://img.icons8.com/ios-filled/20/f8fafc/sun--v1.png");
    }

    initializeThemeChangerIcon();

})