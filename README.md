Pizza World Co.
Welcome to the Pizza Ordering App! This is a modern web application that allows users to order pizza online, manage their cart, and view their order history. Built with React, Redux, and Tailwind CSS, this application provides a seamless and responsive user experience.

1. Table of Contents
2. Features
3. Technologies Used
4. Getting Started
5. Prerequisites
6. Installation
7 .Running the Application
8. Application Structure
Usage
Contributing
License
Features
User Registration: Users can create a profile by entering their name.
Menu Browsing: Users can view the available pizza options and their details.
Order Creation: Users can create orders for their selected pizzas.
Cart Management: Users can view and manage their cart before placing an order.
Order History: Users can view their previous orders.
Error Handling: Comprehensive error handling to manage user experience.
Technologies Used
Frontend:
React
Redux Toolkit
React Router
Tailwind CSS
API Integration:
Custom REST API for menu and order management
Geolocation API for address fetching
Build Tool: Vite
Getting Started
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (version 14 or later)
npm (Node package manager)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/007Harshvardhan/Pizza-World/tree/main
cd pizza-ordering-app
Install the dependencies:

bash
Copy code
npm install
Set up your environment variables (if necessary). For example, add your MapMyIndia API key in the apiGeocoding.js file.

Running the Application
To run the application in development mode, execute the following command:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000 to see the application in action.

Application Structure
Here’s a brief overview of the project structure:

bash
Copy code
/pizza-ordering-app
│
├── /public               # Static files
│
├── /src                  # Source files
│   ├── /api              # API service files for fetching data
│   ├── /features         # Feature slices for Redux (user, cart, menu, order)
│   ├── /ui               # UI components (layout, buttons, loader, etc.)
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point of the application
│   ├── store.js          # Redux store configuration
│   └── index.css         # Global styles (using Tailwind CSS)
│
├── tailwind.config.js     # Configuration for Tailwind CSS
├── vite.config.js         # Configuration for Vite
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
Key Components
CreateUser.jsx: Handles user registration and name input.
Username.jsx: Displays the logged-in user's name.
userSlice.js: Redux slice for managing user state.
apiGeocoding.js: Fetches user's address based on geolocation.
apiRestaurant.js: API functions for fetching menu items and managing orders.
AppLayout.jsx: Layout component that includes header, loader, and cart overview.
Button.jsx: Reusable button component with different styles.
Usage
Register User: Upon visiting the app, enter your name to register.
Browse Menu: Navigate to the menu page to view available pizzas.
Place Order: Select pizzas to add to your cart and proceed to checkout.
Manage Cart: Review your cart and adjust quantities before finalizing your order.
View Orders: Check your previous orders for tracking.
Contributing
Contributions are welcome! If you have suggestions for improvements or features, please create an issue or submit a pull request.

Fork the repository.
Create your feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Live:- https://stellular-crisp-1bc580.netlify.app
