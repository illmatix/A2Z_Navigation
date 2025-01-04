import cities from '../data/cities.js';
import generateNavigation from "./generateNavigation.js";
import handleActiveMenuItem from "./handleActiveMenuItem.js";

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');

    generateNavigation(cities, nav);
    handleActiveMenuItem(nav);
});



