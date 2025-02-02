Note-Taking App Backend | Node.js, Express.js, MongoDB

Backend for a note-taking app built using Node.js, Express.js, and MongoDB. This API allows users to manage their notes with full CRUD operations. It is designed for scalability and performance, with RESTful API endpoints for efficient communication between the frontend and the database.

Features:

User authentication and session management
CRUD operations (Create, Read, Update, Delete) for notes
RESTful API endpoints
Data storage with MongoDB

Built with:

Backend: Node.js, Express.js
Database: MongoDB
API Testing: Postman
## Installation

To set up and run the backend locally, follow these steps:

### 1. Clone the repository:
git clone https://github.com/PratibhaBorude/Note-Taking-App.git
### 2. Navigate to the project directory:
cd Note-Taking-App
### 3. Install dependencies:
npm install



 
Example Request Using Postman:
To test the API with Postman, follow these steps:

Register a user by sending a POST request to /api/auth/register with the following JSON body:

json

{
  "username": "exampleUser",
  "password": "examplePassword"
}
Login with the registered credentials by sending a POST request to /api/auth/login and include the received JWT token in the Authorization header for subsequent requests.

Access the Notes API:

Use http://localhost:9000/notes/id as the base URL for all routes related to notes.
Example: To retrieve all notes, send a GET request to http://localhost:9000/notes/.
### 4. Set up environment variables:
Create a .env file in the root directory of your project and add the following configuration:
MONGO_URI=mongodb://localhost/Notes
PORT=9000
### 5. Start the server:
npm start
### Note Routes:
GET /http://localhost:9000/notes/: Retrieve all notes for the authenticated user.
POST http://localhost:9000/notes/: Create a new note.
GET http://localhost:9000/notes/1: Retrieve a single note by ID.
PUT http://localhost:9000/notes/1: Update an existing note.
DELETE http://localhost:9000/notes/1: Delete a note by ID.


   
