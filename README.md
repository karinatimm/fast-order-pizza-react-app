# Fast Pizza App

Welcome to the **Fast Pizza App**, an interactive application designed to help users browse, order, and manage their pizza selections effortlessly. This app offers a seamless user experience by integrating advanced features like a menu system, cart management, and user authentication using React Router. The project is built using **Vite**, providing a fast and efficient development environment.

You can try out the app and see how the order process looks by using the fake order credentials: **IIDSAT**.

This project was completed by me as part of the course "The Ultimate React Course 2024: React, Redux & More" created by [Jonas Schmedtmann](https://twitter.com/jonasschmedtman) on the Udemy educational platform.

## Features

## Features

- **Dynamic Menu Navigation**: Fast Pizza uses React Router to handle navigation across multiple pages, including the homepage, menu, cart, and order history, with URLs reflecting the current page.
- **User Authentication**: The app includes a simple login system where users can create accounts and log in to access their cart and order history, showcasing authentication and protected routes in a React app.
- **Pizza Selection Management**: Users can browse through a variety of pizzas, add them to their cart, and customize their orders. The app automatically calculates the total price based on selected items.
- **Order Priority Selection**: Users can choose a priority level for their orders, allowing them to expedite their order processing and receive their pizzas more quickly.
- **Cart Functionality**: Users can view their cart, update item quantities, and proceed to checkout. The cart allows for easy management of selected items.
- **Responsive Design**: The app is fully responsive, ensuring a smooth user experience across various devices, from desktops to mobile phones.
- **Loading Indicators**: The app incorporates spinners and loading indicators while fetching data or processing orders, enhancing user experience by providing feedback during asynchronous operations.
- **State Management with Redux**: Fast Pizza uses Redux for state management, efficiently handling global state for user authentication and cart items without prop drilling.

### Deployment

This project has been deployed on Vercel and is accessible at the following URL:
**[Fast Pizza App on Vercel](https://fast-order-pizza-react-app.vercel.app/)**

## System Requirements:

To run this application locally, ensure you have the following software installed on your system:

- Node.js (version 20.3.0 LTS or higher) **(https://nodejs.org/)**
- Node Package Manager (npm) **(https://www.npmjs.com/)**

### Getting Started:

Follow these steps to set up the project locally:

- Clone the repository:

Open the terminal or command prompt, navigate to your desired directory, and clone the repository from GitHub using the provided link:

**git clone https://github.com/karinatimm/fast-order-pizza-react-app.git**

- Navigate to the project directory:

**cd fast-order-pizza-react-app**

- Install project dependencies using npm:

**npm install**

- Execute the following command to start working with this project locally by opening the localhost reference in the browser:

**npm run dev**

### Quality Assurance

Linter Status: The project follows best practices and is linted using ESLint. Ensure your code adheres to the project's linting rules before pushing any changes.

### Linter status:

[![ESLint Status](https://img.shields.io/badge/ESLint-Passing-brightgreen.svg)](https://github.com/karinatimm/fast-order-pizza-react-app.git)
