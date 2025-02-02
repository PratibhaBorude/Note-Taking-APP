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
git clone https://github.cs/:id: Delete a note by ID.

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
   
