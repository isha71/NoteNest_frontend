
# NoteNest
NoteNest is a web application that allows users to securely manage their notes. It provides features for user registration, login, adding, editing, and deleting notes, as well as deleting user accounts.

# Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Usage](#usage)
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

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/isha71/NoteNest_frontend.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Usage
Before starting the frontend server, ensure the backend server is running. Follow these steps:

1. Navigate to the backend repository of this project https://github.com/isha71/NoteNest_backend and start the server.

2. Create a .env file in the frontend directory.

3. Write down the backend server address in .env file 
REACT_APP_SERVER_ADDRESS=http://localhost:5000.

4. Start the frontend server:
   ```bash
   npm start
   ```


### Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

### License

This project is licensed under the MIT License.

