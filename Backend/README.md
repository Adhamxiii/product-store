# Product Store — Backend

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Live Demo](#live-demo)
- [Contact Me](#contact-me)

## Overview

Product Store Backend is a RESTful API built with **Node.js** and **Express**. It manages product data in **MongoDB** via **Mongoose** and exposes CRUD endpoints under `/api/products`.

The server supports CORS, JSON request bodies, and can serve the frontend build in production when `NODE_ENV=production`.

## Features

- **REST API** — Full CRUD for products (Create, Read, Update, Delete)
- **MongoDB integration** — Persistent storage with Mongoose schemas
- **Validation** — Required fields and ObjectId checks on update/delete
- **CORS enabled** — Cross-origin requests supported
- **Environment config** — MongoDB URI loaded from `.env` via dotenv
- **Production ready** — Serves static frontend build and Vercel deployment config
- **Timestamps** — Automatic `createdAt` and `updatedAt` on product documents

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [MongoDB](https://www.mongodb.com/) — local instance or [MongoDB Atlas](https://www.mongodb.com/atlas) cluster

### Steps

1. Clone the repository and navigate to the Backend directory:

   ```bash
   git clone <repository-url>
   cd product-store/Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the Backend root:

   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
   ```

   Replace the connection string with your MongoDB URI.

## Usage

### Start the server

```bash
npm start
```

The API runs at `http://localhost:8000`.

### API endpoints

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| GET    | `/api/products`    | Get all products   |
| POST   | `/api/products`    | Create a product   |
| PUT    | `/api/products/:id`| Update a product   |
| DELETE | `/api/products/:id`| Delete a product   |

### Request body (Create / Update)

```json
{
  "name": "Product Name",
  "price": 29.99,
  "image": "https://example.com/image.jpg"
}
```

All three fields are required.

### Example responses

**Get products (200)**

```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "name": "Product Name",
      "price": 29.99,
      "image": "https://example.com/image.jpg",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```

**Create product (201)**

```json
{
  "success": true,
  "data": { ... }
}
```

**Error (400 / 500)**

```json
{
  "success": false,
  "message": "Please provide all fields"
}
```

### Production mode

Set `NODE_ENV=production` to serve the built frontend from `Frontend/dist`:

```bash
NODE_ENV=production npm start
```

### Deploy to Vercel

The project includes `vercel.json` for serverless deployment. Ensure `MONGO_URI` is set in your Vercel environment variables.

### Project structure

```
Backend/
├── config/
│   └── db.js                 # MongoDB connection helper
├── controllers/
│   └── product.controller.js # Route handlers
├── models/
│   └── product.model.js      # Mongoose product schema
├── routes/
│   └── product.route.js      # Express routes
├── server.js                 # App entry point
├── vercel.json               # Vercel deployment config
└── .env                      # Environment variables (not committed)
```

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please do not commit `.env` files or secrets. Test API changes locally before submitting.

## Live Demo

**API & App:** [https://product-store-xi.vercel.app](https://product-store-xi.vercel.app)

**Products endpoint:** [https://product-store-xi.vercel.app/api/products](https://product-store-xi.vercel.app/api/products)

## Contact Me

- **Name:** Adham
- **Email:** your-email@example.com
- **GitHub:** [your-github-username](https://github.com/your-github-username)
- **LinkedIn:** [your-linkedin-profile](https://linkedin.com/in/your-profile)

Feel free to reach out for questions, feedback, or collaboration.
