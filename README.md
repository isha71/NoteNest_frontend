# NoteNest
NoteNest is a web application that allows users to securely manage their notes. It provides features for user registration, login, adding, editing, and deleting notes, as well as deleting user accounts.

# Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Contributing](#contributing)
7. [License](#license)

### Features

- **User registration** with full name, username, and password
- **User authentication and login** with username and password
- **Adding, editing, and deleting notes**
- **Deleting user accounts**
- **Token-based authentication** with JSON Web Tokens (JWT)
- **Secure password storage** with bcrypt hashing
- Frontend built with **React.js**
- Backend built with **Node.js** and **Express**
- Database management with **PostgreSQL**

### Technologies Used

- React.js
- Node.js
- Express.js
- PostgreSQL
- Axios
- bcrypt
- cors
- jwt
- MUI (Material-UI)

### Getting Started

#### Prerequisites

- Node.js installed on your machine
- PostgreSQL installed and running locally or accessible via a URL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/NoteNest.git
   ```
2. Navigate to the project directory:
   ```bash
   cd NoteNest
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Usage

1. Start the backend server:
   ```bash
   npm start
   ```
2. Start the frontend server:
   ```bash
   cd frontend
   npm start
   ```
3. Open your web browser and visit http://localhost:3000 to use the NoteNest application.

### API Endpoints

- **POST /register:** Register a new user.
- **POST /login:** Authenticate and log in a user.
- **POST /addNote:** Add a new note for the authenticated user.
- **POST /editNote:** Edit an existing note for the authenticated user.
- **DELETE /deleteNote:** Delete a note for the authenticated user.
- **DELETE /deleteUser:** Delete the user account of the authenticated user.
- **POST /getUserData:** Retrieve user data and existing notes for the authenticated user.

### Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

### License

This project is licensed under the MIT License.
