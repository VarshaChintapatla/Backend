# Simple HTTP Server using Node.js

## 📌 Project Overview
This is a beginner-friendly Node.js project that demonstrates how to create a basic HTTP server using the built-in `http` module.

The server handles different URL requests and sends appropriate responses to the browser.

## 🛠️ Technologies Used
- Node.js
- JavaScript
- HTTP Module

## 📂 Project Structure

```text
Simple HTTP Server/
│
├── server.js
├── package.json
└── package-lock.json
```

## ⚙️ Features
- Creates an HTTP server using Node.js.
- Handles multiple URL routes.
- Displays different responses for different routes.
- Returns a 404 status for unknown routes.
- Runs on port 3000.
- Supports automatic server restart during development.

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd "Simple HTTP Server"
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

Normal mode:

```bash
npm start
```

Development mode:

```bash
npm run dev
```

## 🌐 Available Routes

| URL | Response |
|---|---|
| `/` | Welcome to my Node.js Server! |
| `/about` | This is my About Page |
| `/contact` | Contact Us Page |
| Unknown URL | Page Not Found (404) |

## 📖 Node.js Concepts Learned
- `require()` – Importing built-in modules.
- `http.createServer()` – Creating an HTTP server.
- `req` – Handling incoming requests.
- `res` – Sending responses.
- `req.url` – Identifying requested URLs.
- `res.end()` – Ending the response.
- `server.listen()` – Starting the server.
- npm scripts – Running the application using start and dev commands.

## 🎯 Learning Outcome
Through this project, I learned how to create a basic HTTP server using Node.js without using Express.js and how to handle different client requests.

This is my first practical project in my Node.js learning journey!