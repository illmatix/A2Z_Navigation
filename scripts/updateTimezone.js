// Update city content dynamically (example function)
const updateCityContent = (city) => {
    const cityTitle = document.getElementById('city-title');
    const cityDescription = document.getElementById('city-description');
    const cityTime = document.getElementById('city-time');

    cityTitle.textContent = city.name;
    cityDescription.textContent = `Current time in ${city.name}:`;
    cityTime.textContent = new Date().toLocaleString('en-US', {
        timeZone: city.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
}

export default updateCityContent;