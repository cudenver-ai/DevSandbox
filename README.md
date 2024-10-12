# DevSandbox

Welcome to the DevSandbox! This repository is designed for you to practice and get hands-on experience with the front-end and back-end development tools we use. Whether you're new to development or just looking to refine your skills, this project will help you get familiar with essential tools.

## Getting Started
### Prerequisites:

- Python: Version 3.10 or higher.
- Node.js / npm: You can install this via nvm (Node Version Manager) for better version control. You will need Node.js version 20 or higher
- nvm: Highly recommend you install nvm to manage your Node.js versions efficiently.

### Setting Up the Environment

**Python Virtual Environment**

1. Create a virtual environment:
  `python -m venv .venv`
2. Activate it:
  - Windows: `source .venv\Scripts\activate`
  - Linux: `source .venv/bin/activate`

Alternatively, if you use Conda to manage your environments:

**Conda Environment**
1. Create the environment:
  `conda create -n venv python=3.10`
2. Activate it:
  `conda activate venv`

### Install Python Dependencies:

- Run:
`pip install -r requirements.txt`

### Install Node.js / npm Dependencies:

1. Install Node.js via [nvm](https://github.com/nvm-sh/nvm)
2. Use the required version of Node:
  `nvm use node`

<hr>

## Front-End Setup

1. Navigate to the front-end directory:

  `cd front-end-temp`

2. Install Depencies:

  `npm install`

3. Start the development server:

  `npm run dev`

### Front-End Project Structure:

- src/App.jsx: Main entry point for the React app.
- src/CreateItem.jsx: Component to handle item creation.
- src/UsersList.jsx: Displays a list of users.

### Why We Use Vite:

- Fast and efficient development server with hot module replacement.
- Minimal configuration needed.
- Supports modern JavaScript features and ES6 modules.

#### To create your own React project with Vite:

- `npm create vite@latest front-end-temp -- --template react`

This command uses Vite's project creation tool to set up a new React app in a directory called front-end-temp. Try it, create a separate react app with a different name.

<hr>

## Back-End Setup (Flask)

1. Navigate to the Back-End Directory:

  `cd back-end`

2. Start the Flask application:

  `flask run`

The Flask server will run on `http://localhost:5000/`.

### API Endpoints:

- `/api/users`: Returns a list of users in JSON format.
- `/api/items`: Allows creation of new items through a POST request.

You can access the API at `http://localhost:5000/api/<endpoint>`.

<hr>

## Running the Full Stack Application

1. Start the Flask Back-End: Make sure the Flask back-end is running on port 5000:

  `python app.py`

2. Start the React Front-End: In another terminal, navigate to the front-end directory and start the Vite server:

- `npm run dev`

By default:
- Flask API will be available at `http://localhost:5000/`.
- React Front-End will be available at `http://localhost:5173/`.

### Key Files

#### Front-End (React)

- `src/App.jsx`: Main React component.
- `src/CreateItem.jsx`: Manages item creation.
- `src/UsersList.jsx`: Displays users fetched from the back-end.

#### Back-End (Flask)

- `app.py`: Main Flask application with API routes.
- `config.py`: Environment-specific configurations (CORS, etc.).

<hr>

## Customizing for Your Network

### Flask Back-End:

To make the Flask app accessible on your local network, modify the host in app.py:

  `app.run(host='0.0.0.0', port=5000)`

### Vite Front-End:

In vite.config.js, modify the server settings:

```js
{
    server: {
      host: '0.0.0.0',
      port: 5173,
      proxy: {
        "/api": {
          target: "http://<your-ip>:5000",
          changeOrigin: true,
          secure: false,
        },
      },
    },
}
```

Replace <your-ip> with your machine's IP address to access the app from other devices on the same network.
