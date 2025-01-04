/**
 * Sets the active menu item and removes the active state from others.
 * @param {HTMLElement} currentItem - The current menu item to set as active.
 * @param {HTMLElement} nav - The navigation container that holds all menu items.
 */
const toggleActiveMenuItem = (currentItem, nav) => {
    const isActive = currentItem.classList.contains('active');

    // Remove 'active' class from all items
    nav.querySelectorAll('li a').forEach(item => item.classList.remove('active'));

    // Toggle active state: add 'active' class if it wasn't already active
    if (!isActive) {
        currentItem.classList.add('active');
    }
}

export default toggleActiveMenuItem;