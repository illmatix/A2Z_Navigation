const generateNavigation = (cities, nav, updateCityContent) => {
    // Create a list for the navigation items
    const navList = document.createElement('ul');
    navList.className = 'nav-list';

    cities.forEach(city => {
        // Create list item
        const listItem = document.createElement('li');
        listItem.className = 'nav-item';

        // Create accessible link for each city
        const link = document.createElement('a');
        link.href = `#${city.section.toLowerCase().replace(/\s+/g, '-')}`;
        link.textContent = city.label;
        link.setAttribute('role', 'menuitem');
        link.setAttribute('aria-label', `Navigate to ${city.label}`);
        link.addEventListener('click', () => updateCityContent(city));

        listItem.appendChild(link);
        navList.appendChild(listItem);
    });

    nav.appendChild(navList);
}

export default generateNavigation;
