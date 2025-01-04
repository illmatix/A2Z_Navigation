A2Z Navigation

A responsive, dynamic navigation application showcasing Apple-inspired design and functionality. This project demonstrates dynamic navigation rendering, city-specific timezone display, and smooth UI interactions using vanilla JavaScript (ES6), SCSS, and HTML.
Features

    Dynamic Navigation: Automatically generates a navigation menu based on the cities.js data file.
    Timezone Display: Updates and displays the current time for the selected city using the IANA timezone database.
    Sliding Border Effect: A sleek sliding border follows navigation item interactions for a polished UI.
    Responsive Design: Optimized for various screen sizes with Apple-inspired styling.
    Accessible: Includes semantic HTML and ARIA roles for better usability.

Installation
Installation

    Clone the repository:

git clone https://github.com/illmatix/A2Z_Navigation.git
cd A2Z_Navigation

Install dependencies:

npm install

Build the project:

npm run build

Start the development server:

    npm run start

File Structure

A2Z_Navigation/
├── public/
│   ├── index.html         # Main HTML file
│   └── assets/            # Static assets like images
├── src/
│   ├── styles/            # SCSS styles
│   ├── scripts/           # JavaScript modules
│   │   ├── app.js         # Main application logic
│   │   ├── generateNavigation.js
│   │   ├── handleSlidingBorder.js
│   │   └── updateTimezone.js
│   └── data/
│       └── cities.js      # City data with timezone info
└── dist/                  # Build output

Usage

    Open the application in your browser.
    Select a city from the navigation menu.
    View the current time for the selected city displayed below the menu.

Scripts

    npm run clean: Cleans the dist directory.
    npm run build: Builds the project into the dist directory.
    npm run start: Starts a local development server.

Technologies

    JavaScript (ES6): Handles dynamic interactions and logic.
    SCSS: Provides modular, maintainable styles.
    HTML: The foundation of the application's structure.

Accessibility

This project adheres to accessibility best practices:

    Semantic HTML elements.
    ARIA roles for navigation and interactive elements.
    Keyboard navigability.

Contribution

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
License

This project is licensed under the MIT License.