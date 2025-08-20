# Bookstore Management System

A full-stack application for managing books, users, and contacts with separate frontend and backend components.

## Project Structure

```
final_bookstore/
├── Backend/ - Node.js backend with Express
│   ├── controller/ - Business logic
│   ├── model/ - Database models
│   ├── route/ - API routes
│   └── index.js - Main server file
├── Frontend/ - React frontend with Vite
│   ├── public/ - Static assets
│   ├── src/ - React components
│   ├── tailwind.config.js - Tailwind CSS config
│   └── vite.config.js - Vite config
└── package.json - Root project dependencies
```

## Features

- **Backend**:
  - RESTful API for book management
  - User authentication system
  - Contact form handling

- **Frontend**:
  - React-based UI
  - Tailwind CSS for styling
  - Vite for fast development

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   cd Frontend && npm install
   cd ../Backend && npm install
   ```
3. Configure environment variables in Backend/.env
4. Start development servers:
   - Frontend: `npm run dev` (from Frontend directory)
   - Backend: `node index.js` (from Backend directory)

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB (Mongoose)

## License

MIT