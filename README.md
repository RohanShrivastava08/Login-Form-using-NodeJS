# Login Form using NodeJS

![Screenshot (51)](https://github.com/RohanShrivastava08/Login-Form-using-NodeJS/assets/94133270/68d5a275-3088-49f3-a1fd-e8f4e6846dd6)

## Table of Contents

-  Description
- Features
- Technologies Used
- Screenshots
- Installation
- Usage
- Project Structure
- Contributing
- License
- Contact

## Description

- This project is a simple login form application built using Node.js, Express, HBS (Handlebars), and MongoDB.
-  The application allows users to register, log in, and manage their sessions.
-  It uses nodemon for development purposes to automatically restart the server when code changes are detected.

## Features

- User registration with validation
- User login with authentication
- Session management to keep users logged in
- Password encryption for security
- User-friendly error messages and form validation feedback

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **HBS (Handlebars)**: A simple templating language used to create HTML templates.
- **MongoDB**: A NoSQL database for storing user data.
- **Nodemon**: A tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Screenshots


![Screenshot (51)](https://github.com/RohanShrivastava08/Login-Form-using-NodeJS/assets/94133270/68d5a275-3088-49f3-a1fd-e8f4e6846dd6)

Login Page

![Screenshot (52)](https://github.com/RohanShrivastava08/Login-Form-using-NodeJS/assets/94133270/d1edb438-2c1e-4180-a58c-09c427248ae5)

Made a Simple Blog Page

![Screenshot (53)](https://github.com/RohanShrivastava08/Login-Form-using-NodeJS/assets/94133270/586b3b27-a315-49eb-a631-77586830503c)

Sign Up Form

![Screenshot (54)](https://github.com/RohanShrivastava08/Login-Form-using-NodeJS/assets/94133270/428cbe59-b5ce-4dc6-902d-0406a66c190b)

MongoDB Database


## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/login-form-nodejs.git
    cd login-form-nodejs
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up MongoDB:**
    - Make sure you have MongoDB installed and running on your machine.
    - Create a database named `loginFormDB`.

4. **Configure environment variables:**
    - Create a `.env` file in the root directory of the project.
    - Add the following environment variables:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/loginFormDB
    SESSION_SECRET=your_secret_key
    ```

5. **Start the application:**
    ```bash
    npm start
    ```
    - The server will start on `http://localhost:3000`.

## Usage

- Navigate to `http://localhost:3000/signup` to create a new account.
- Navigate to `http://localhost:3000/login` to log in with an existing account.
- After logging in, you will be redirected to the dashboard where you can see user-specific information.

## Project Structure

```bash
login-form-nodejs/
│
├── public/
│ ├── css/
│ └── js/
│
├── views/
│ ├── layouts/
│ ├── partials/
│ ├── register.hbs
│ ├── login.hbs
│ └── dashboard.hbs
│
├── .env
├── app.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for any bugs or feature requests.

- Fork the repository.
-  Create your feature branch (`git checkout -b feature/AmazingFeature`).
-  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
-  Push to the branch (`git push origin feature/AmazingFeature`).
- Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

- **GitHub**: RohanShrivastava08
- **Email**: rohansh0808l@example.com
