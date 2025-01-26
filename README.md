# DRIVE

## Description
**DRIVE** is a web application built with **Node.js**, **Express**, and **MongoDB**. It allows users to register, login, upload, and download files. The app integrates **Firebase** for file storage and uses **Tailwind CSS** for a responsive, modern UI.

## Features
- **User Registration and Login**: Secure user authentication with JWT.
- **File Upload and Download**: Upload files to Firebase and download them securely.
- **Authentication Middleware**: Protects routes to ensure only authenticated users can access them.
- **Responsive Design**: Fully responsive layout powered by Tailwind CSS.

## Installation

### Step 1: Clone the repository
```bash
git clone https://github.com/padamkhandelwal9/DRIVE.git
cd DRIVE
Step 2: Install dependencies
bash
Copy
npm install
Step 3: Set up environment variables
Create a .env file in the root directory and add the following variables:

plaintext
Copy
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Step 4: Set up Firebase
Go to the Firebase Console and create a new project.
Generate a new private key for your service account and download the JSON file.
Place the JSON file in the config directory and update the path in firebase.config.js.
Usage
Step 1: Start the server
bash
Copy
npm start
Step 2: Open the application
Navigate to http://localhost:3000 in your browser.

Project Structure
plaintext
Copy
.
├── config
│   ├── db.js               # Database configuration
│   ├── firebase.config.js   # Firebase configuration
│   ├── multer.config.js     # Multer (file upload) configuration
├── middlewares
│   ├── authe.js             # Authentication middleware
├── models
│   ├── files.model.js       # File model
│   ├── user.model.js        # User model
├── routes
│   ├── index.routes.js      # Routes for homepage and file upload/download
│   ├── user.routes.js       # Routes for user authentication
├── views
│   ├── home.ejs             # Home page view
│   ├── login.ejs            # Login page view
│   ├── register.ejs         # Register page view
├── .env                     # Environment variables
├── app.js                   # Main application entry point
├── package.json             # NPM package configuration
└── README.md                # Project documentation
Routes
User Routes
GET /user/login - Render the login page
POST /user/login - Handle user login
GET /user/register - Render the registration page
POST /user/register - Handle user registration
Index Routes
GET /home - Render the home page (protected)
POST /upload - Handle file upload (protected)
GET /download/:path - Handle file download (protected)
Middleware
authe.js: Middleware to protect routes and ensure only authenticated users can access them.
License
This project is licensed under the MIT License.
