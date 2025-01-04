import toggleActiveMenuItem from "./toggleActiveMenuItem.js";
import updateLocationTime from "./updateLocationTime.js";

const handleActiveMenuItem = (nav) => {
    let activeItem = null;

    nav.querySelectorAll('li a').forEach(item => {
        item.addEventListener('click', () => {
            activeItem = item;

            const itemRect = item.getBoundingClientRect();
            const navRect = nav.getBoundingClientRect();

            const width = itemRect.width;
            const left = itemRect.left - navRect.left;

            const slidingBorder = document.querySelector('#sliding-border');
            slidingBorder.style.width = `${width}px`;
            slidingBorder.style.transform = `translateX(${left}px)`;

            // Call toggleActiveMenuItem to manage the active state
            toggleActiveMenuItem(item, nav);

            const timezone = item.getAttribute('timezone');

            if (activeItem !== null && timezone) {
                updateLocationTime(timezone);
            }
        });
    });

    nav.addEventListener('mouseleave', () => {
        const slidingBorder = document.querySelector('#sliding-border');
        if (activeItem) {
            const itemRect = activeItem.getBoundingClientRect();
            const navRect = nav.getBoundingClientRect();

            const width = itemRect.width;
            const left = itemRect.left - navRect.left;

            slidingBorder.style.width = `${width}px`;
            slidingBorder.style.transform = `translateX(${left}px)`;
        } else {
            slidingBorder.style.width = '0';
        }
    });
}

export default handleActiveMenuItem;