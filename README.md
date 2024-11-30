Task Manager Application
A simple CRUD (Create, Read, Update, Delete) application built with the MERN stack (MongoDB, Express, React, and Node.js). This application allows users to manage tasks with functionality to add, edit, delete, and view tasks.

Features
Create new tasks with a title and description.
View a list of tasks.
Edit existing tasks.
Delete tasks.
Responsive design and interactive UI.
Prerequisites
Before running this project, ensure you have the following installed on your machine:

Node.js (v14 or later)
MongoDB (Community Server or Atlas)
A code editor like VS Code
Getting Started
Follow these instructions to get a copy of the project running on your local machine.

1. Clone the Repository
git clone <repository-url>
cd task-manager
2. Backend Setup (Express & MongoDB)
Navigate to the backend folder (where server.js resides):
cd backend
Install the required dependencies:
npm install
Ensure MongoDB is running locally or configure the MONGO_URI in a .env file:
MONGO_URI=mongodb://localhost:27017/task-manager
PORT=5000
Start the backend server:
npm start
By default, the server runs on http://localhost:5000.
3. Frontend Setup (React)
Navigate to the frontend folder:
cd frontend
Install the required dependencies:
npm install
Start the React development server:
npm start
By default, the app runs on http://localhost:3000.
Folder Structure
Backend (server.js, routes/, models/)
The server-side application that handles API requests and communicates with the MongoDB database.
Frontend (src/)
The client-side application built with React.
