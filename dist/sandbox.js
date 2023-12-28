"use strict";
/**
 * @author Yassir Elkhaili
 * @license MIT
*/
let currentTheme = "";
const handleInitialTheme = () => {
    const rootClasses = ["transition", "duration-100"];
    rootClasses.forEach((rootClass) => document.documentElement.classList.add(rootClass));
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        currentTheme = "dark";
    }
    else if (!("color-theme" in localStorage)) {
        localStorage.setItem("color-theme", "light");
        currentTheme = "light";
    }
    else if (localStorage.getItem("color-theme") === "dark") {
        document.documentElement.classList.add("dark");
        currentTheme = "dark";
    }
    else {
        currentTheme = "light";
    }
};
handleInitialTheme();
document.addEventListener("DOMContentLoaded", () => {
    const themeChanger = document.querySelector(".theme-changer");
    const handleThemeChangerIcon = () => {
        const oldthemeChangerSrc = themeChanger.getAttribute("src");
        if (oldthemeChangerSrc) {
            const lastSrcElement = oldthemeChangerSrc.split("/")[oldthemeChangerSrc.split("/").length - 1];
            let newThemeChangerSrc = "";
            lastSrcElement === "sun--v1.png" ? newThemeChangerSrc = oldthemeChangerSrc.replace(lastSrcElement, "bright-moon.png") : newThemeChangerSrc = oldthemeChangerSrc.replace(lastSrcElement, "sun--v1.png");
            themeChanger.setAttribute("src", newThemeChangerSrc);
        }
    };
    const changeImagesColor = () => {
        const images = document.querySelectorAll(".hobby-icon");
        images.forEach((image) => {
            const oldImageSrc = image.getAttribute("src");
            if (oldImageSrc) {
                let newImageSrc = "";
                currentTheme === "dark" ? newImageSrc = oldImageSrc.replace(oldImageSrc.split("/")[5], "f8fafc") : newImageSrc = oldImageSrc.replace(oldImageSrc.split("/")[5], "707071");
                image.setAttribute("src", newImageSrc);
            }
        });
    };
    changeImagesColor();
    const themeChangeHandler = () => {
        if (currentTheme === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
            currentTheme = "dark";
            changeImagesColor();
            handleThemeChangerIcon();
        }
        else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
            currentTheme = "light";
            changeImagesColor();
            handleThemeChangerIcon();
        }
    };
    themeChanger && themeChanger.addEventListener("click", themeChangeHandler);
    const initializeThemeChangerIcon = () => {
        currentTheme === "light" ? themeChanger.setAttribute("src", "https://img.icons8.com/ios-filled/20/707071/bright-moon.png") : themeChanger.setAttribute("src", "https://img.icons8.com/ios-filled/20/f8fafc/sun--v1.png");
    };
    initializeThemeChangerIcon();
});
