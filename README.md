# Tech Quiz Test Suite

A MERN stack Tech Quiz application with comprehensive Cypress tests for both component and end-to-end testing.

---

## Table of Contents

* [Description](#description)
* [Demo Video](#demo-video)
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [File Structure](#file-structure)
* [Technologies](#technologies)
* [Contributing](#contributing)
* [Questions](#questions)
* [License](#license)

---

## Description

This project is a Tech Quiz application built on the **MERN** stack (MongoDB, Express.js, React, Node.js). It allows users to take a 10-question quiz and view their score upon completion. The primary focus of this repository is to demonstrate how to integrate **Cypress** for both component and end-to-end (E2E) testing, ensuring the reliability and robustness of modern web applications.

---

## Demo Video

A walkthrough video demonstrating the application functionality and test suites passing can be found here:

[![Watch the Demo](https://img.youtube.com/vi/VIDEO_ID/0.jpg)](https://youtu.be/VIDEO_ID)

*Replace `VIDEO_ID` with your actual YouTube video ID.*

---

## Features

* Start a randomized 10-question quiz
* Select and submit answers dynamically
* View final score and restart the quiz
* Comprehensive **component tests** using Cypress
* Robust **end-to-end tests** using Cypress with network stubbing

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/eholt19/Tech-Quiz-Test-Suite.git
   cd Tech-Quiz-Test-Suite
   ```

2. **Install dependencies** for both server and client

   ```bash
   npm run install
   ```

---

## Usage

### Full-Stack Development

1. **Start the API server** (connected to MongoDB Atlas)

   ```bash
   npm run server:dev
   ```
2. **Start the React client**

   ```bash
   npm run client:dev
   ```
3. **Open your browser** at `http://localhost:5173` (or the port shown in the console)
4. **Click** **Start Quiz** to begin

---

## Testing

All tests are configured in Cypress. You can run tests via these scripts:

* **End-to-End tests only** (runs with server stubbed by fixture):

  ```bash
  npm run test:e2e
  ```

* **Component tests only**:

  ```bash
  npm run test:component
  ```

* **Run both suites**:

  ```bash
  npm run test
  ```

Tests will execute headlessly and report pass/fail status for both component and E2E specs.

---

## File Structure

```
.
├── client/               # React front end
│   ├── src/              # Application source code
│   ├── vite.config.ts    # Vite config for dev server
│   └── ...
├── server/               # Express & MongoDB API server
│   ├── src/              # Server source code
│   ├── dist/             # Compiled output
│   ├── seeds/            # Database seeding scripts
│   └── ...
├── cypress/              # Cypress test specs & fixtures
│   ├── component/        # Component tests for React components
│   ├── e2e/              # End-to-end tests for application flow
│   └── fixtures/         # Stub data (questions.json)
├── cypress.config.ts     # Cypress configuration
├── package.json          # Root npm scripts & dependencies
└── README.md             # Project documentation
```

---

## Technologies

* **Front End:** React, Vite, Bootstrap
* **Back End:** Node.js, Express.js, MongoDB (Atlas)
* **Testing:** Cypress (component + E2E), Vitest (if applicable)
* **Tools:** start-server-and-test, concurrently, wait-on

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. For major changes, open an issue first to discuss what you would like to change.

---

## Questions

For any questions or issues, please open an issue on GitHub or contact me at \[[eholt179@gmail.com](mailto:eholt179@gmail.com)].

You can also find me on GitHub: [eholt19](https://github.com/eholt19)

---

## License

This project is licensed under the MIT License.
