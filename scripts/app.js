import cities from '../data/cities.js';
import generateNavigation from './generateNavigation.js';
import handleSlidingBorder from "./handleSlidingBorder.js";
import updateCityContent from "./updateTimezone.js";

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById("city-navigation");
    const slidingBorder = document.getElementById("sliding-border");

    generateNavigation(cities, nav, () => {
        return true;
    });

    handleSlidingBorder(nav, slidingBorder);

    updateCityContent();
});



