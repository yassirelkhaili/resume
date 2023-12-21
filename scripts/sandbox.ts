/** 
 * @author Yassir Elkhaili
 * @license MIT
*/

let currenTheme: string = "";

const handleInitialTheme = () => {
  const rootClasses: Array<string> = ["transition", "duration-100"];
  rootClasses.forEach((rootClass: string) =>
    document.documentElement.classList.add(rootClass)
  );
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
    currenTheme = "dark";
  } else if (!("color-theme" in localStorage)) {
    localStorage.setItem("color-theme", "light");
    currenTheme = "light";
  } else if (localStorage.getItem("color-theme") === "dark") {
    document.documentElement.classList.add("dark");
    currenTheme = "dark";
  }
};

handleInitialTheme();

document.addEventListener("DOMContentLoaded", () => {
    const themeChanger = document.querySelector(".theme-changer") as HTMLImageElement;

    const handleThemeChangerIcon = (): void => {
        console.log("triggerded")
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
                currenTheme === "dark" ? newImageSrc = oldImageSrc.replace(oldImageSrc.split("/")[5], "f8fafc") : newImageSrc = oldImageSrc.replace(oldImageSrc.split("/")[5], "707071");
                image.setAttribute("src", newImageSrc);
            }
        })
    }

    changeImagesColor();

    const themeChangeHandler = (): void => {
        if (currenTheme === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
            currenTheme = "dark";
            changeImagesColor();
            handleThemeChangerIcon();
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
            currenTheme = "light";
            changeImagesColor();
            handleThemeChangerIcon();
        }
    }
 
    themeChanger && themeChanger.addEventListener("click", themeChangeHandler);

    const initializeThemeChangerIcon = (): void => {
        currenTheme === "light" ? themeChanger.setAttribute("src", "https://img.icons8.com/ios-filled/20/f8fafc/bright-moon.png") : themeChanger.setAttribute("src", "https://img.icons8.com/ios-filled/20/f8fafc/sun--v1.png");
    }

    initializeThemeChangerIcon();

})