/**
 * Updates the displayed time for the selected location.
 * @param {string} timezone - The timezone of the selected location.
 */
function updateLocationTime(timezone) {
    const cityTimeEl = document.querySelector('#time-container .city-time');

    if (!cityTimeEl) {
        console.error('Time display element not found in the DOM.');
        return;
    }

    document.querySelector('#time-container').classList.remove('hidden');

    // Update time in the selected timezone
    const now = new Date();
    const formattedTime = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    }).format(now);

    cityTimeEl.textContent = formattedTime;
}

export default updateLocationTime;
