# NimbleS2P-assignment

A full-stack web application built with React for the frontend and Node.js for the backend. This README provides instructions for setting up, running, and deploying both the frontend and backend.

Project Overview : 
This project includes a React frontend and a Node.js backend. The frontend handles user interaction and displays data, while the backend manages data storage, business logic, and API endpoints.

Technologies Used :
* Frontend: React, React Router, Axios
* Backend: Node.js, Express, MongoDB (or other databases)
* Development Tools: npm, Git, etc.

Setup Instructions :
Frontend Setup : 
1. Navigate to the Frontend Directory:
cd frontend

2. Install Dependencies:
npm install

3. Run the Development Server:
npm run dev

This will start the React development server and the frontend will be available at http://localhost:5173/.

Backend Setup :
1. Install Dependencies:
npm install

2. Set Up Environment Variables:
Create a .env file in the backend directory with the following variables:
PORT = 5050
sql_PORT = your_sql_connection_port
host = your_sql_connection_host
mySQL_uri = your_sql_connection_url

3. Run the Backend Server:
npm run start

This will start the Node.js server and the backend will be available at http://localhost:5050.

Running the Application in local:
1. Start the Backend:
Ensure the backend server is running by following the Backend Setup instructions.

2. Start the Frontend:
Ensure the frontend server is running by following the Frontend Setup instructions.

3. Access the Application:
Open your web browser and navigate to http://localhost:5173 to view the React application. The frontend will interact with the backend API running at http://localhost:5050.

Live Demo :
The application is deployed and can be accessed live at the following URL: https://nimble-s2-p-assignment-cmdw.vercel.app/.

Feel free to check out the live demo to see the app in action!
