# Product Store — Frontend

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Live Demo](#live-demo)
- [Contact Me](#contact-me)

## Overview

Product Store Frontend is a modern React application for browsing and managing products. Built with **Vite** and **React 18**, it provides a responsive UI powered by **Chakra UI** and connects to a REST API for full CRUD operations on products.

The app includes a product listing page, a create-product form, inline edit/delete actions, and light/dark mode support.

## Features

- **Product listing** — View all products in a responsive grid layout
- **Create products** — Add new products with name, price, and image URL
- **Update products** — Edit product details via a modal dialog
- **Delete products** — Remove products with confirmation feedback
- **Dark / light mode** — Toggle color theme from the navbar
- **State management** — Global product state with **Zustand**
- **API integration** — HTTP requests via **Axios** to `/api/products`
- **Routing** — Client-side navigation with **React Router**
- **Toast notifications** — Success and error feedback for user actions

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm or yarn
- Backend API running locally, or use the configured proxy target

### Steps

1. Clone the repository and navigate to the Frontend directory:

   ```bash
   git clone <repository-url>
   cd product-store/Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. (Optional) Update the API proxy in `vite.config.js` if your backend runs on a different URL:

   ```js
   server: {
     proxy: {
       "/api": {
         target: "http://localhost:8000",
       },
     },
   }
   ```

## Usage

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Build for production

```bash
npm run build
```

Output is written to the `dist/` folder.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Project structure

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation and theme toggle
│   └── ProductCard.jsx  # Product card with edit/delete
├── pages/
│   ├── HomePage.jsx     # Product listing
│   └── CreatePage.jsx   # Create new product
├── store/
│   └── product.js       # Zustand store and API calls
├── App.jsx              # Routes and layout
└── main.jsx             # App entry point
```

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please keep changes focused, follow existing code style, and test locally before submitting.

## Live Demo

**[https://product-store-xi.vercel.app](https://product-store-xi.vercel.app)**

## Contact Me

- **Name:** Adham
- **Email:** your-email@example.com
- **GitHub:** [your-github-username](https://github.com/your-github-username)
- **LinkedIn:** [your-linkedin-profile](https://linkedin.com/in/your-profile)

Feel free to reach out for questions, feedback, or collaboration.
