const handleSlidingBorder = (nav, slidingBorder) => {
    nav.querySelector('li').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const itemRect = item.getBoundingClientRect();
            const navRect = nav.getBoundingClientRect();

            // Calculate the position and size of the sliding border
            const width = itemRect.width;
            const left = itemRect.left - navRect.left;

            // Apply styles to the sliding border
            slidingBorder.style.width = `${width}px`;
            slidingBorder.style.transform = `translateX(${left}px)`;
        });
    });

    nav.addEventListener('mouseleave', () => {
        // Reset the sliding border when leaving the navigation
        slidingBorder.style.width = '0';
    });
}

export default handleSlidingBorder;