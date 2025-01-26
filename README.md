# DRIVE

## Description
This project is a web application built with Node.js, Express, and MongoDB. It includes user authentication, file upload, and download functionalities. The application uses Firebase for file storage and Tailwind CSS for styling.

## Features
- User registration and login
- File upload and download
- Authentication middleware
- Responsive design with Tailwind CSS

## Installation

1. Clone the repository:
sh
   git clone https://github.com/padamkhandelwal9/DRIVE.git
   cd DRIVE
   
2. Install dependencies:
sh
   npm install
   
3. Set up environment variables:
   Create a 

.env

 file in the root directory and add the following variables:
plaintext
   PORT=3000
   MONGODB_URI=your_mongodb_uri
  JWT_SECRET
  

4. Set up Firebase:
   - Go to the Firebase Console and create a new project.
   - Generate a new private key for your service account and download the JSON file.
   - Place the JSON file in the 

config

 directory and update the path in firebase.config.js.

## Usage

1. Start the server:
   
sh
   npm start


2. Open your browser and navigate to http://localhost:3000.

## Project Structure

.
├── config
│   ├── db.js
│   ├── firebase.config.js
│   ├── multer.config.js
├── middlewares
│   ├── authe.js
├── models
│   ├── files.models.js
│   ├── user.model.js
├── routes
│   ├── index.routes.js
│   ├── user.routes.js
├── views
│   ├── home.ejs
│   ├── login.ejs
│   ├── register.ejs
├── .env
├── app.js
├── package.json
└── README.md


## Routes

### User Routes
- GET /user/login - Render login page
- POST /user/login - Handle login
- GET /user/register - Render registration page
- POST /user/register - Handle registration

### Index Routes
- GET /home - Render home page (protected)
- POST /upload - Handle file upload (protected)
- GET /download/:path - Handle file download (protected)

## Middleware
- authe.js - Authentication middleware to protect routes

## License
This project is licensed under the MIT License.
