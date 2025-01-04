export default function generateNavigation(cities, nav) {
    const navList = document.createElement('ul');
    navList.className = 'nav-list';

    cities.forEach(city => {
        // Create list item
        const listItem = document.createElement('li');
        listItem.className = 'nav-item';

        const link = document.createElement('a');
        link.href = `#${city.section.toLowerCase().replace(/\s+/g, '-')}`;
        link.textContent = city.label;
        link.setAttribute('role', 'menuitem');
        link.setAttribute('aria-label', `Navigate to ${city.label}`);
        link.setAttribute('timezone', city.timezone);

        listItem.appendChild(link);
        navList.appendChild(listItem);
    });

    nav.prepend(navList);
};