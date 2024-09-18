### Prerequisites:

- Python: Version 3.10 or higher.
- Node.js / npm: You can install this via nvm (Node Version Manager) for better version control. You will need Node.js version 20 or higher
- nvm: Highly recommend you install nvm to manage your Node.js versions efficiently.

#### Create a Virtual Environment

**Python Virtual Environment**

- `python -m venv .venv`
- Activate it:
  - Windows: `source .venv\Scripts\activate`
  - Linux: `source .venv/bin/activate`

Alternatively, if you use Conda to manage your environments:

**Conda**

- Run: `conda create -n venv python=3.10`
- Activate it: `conda activate venv`

#### Install Python Dependencies:

- `pip install -r requirements.txt`

#### Install Node.js / npm Dependencies:

Install Node.js [Install npm](https://nodejs.org/en/download/package-manager)
Install nvm [install nvm](https://github.com/nvm-sh/nvm)

- Run `nvm use node`
  - To get the latest version of node

### Front End

1. Creating a new project
   -run: `npm create vite@latest front-end-temp -- --template react`

This command uses Vite's project creation tool to set up a new React app in a directory called front-end-temp. Try it, create a separate react app with a different name.

2. Navigate to the Project Directory:

   - run: `cd front-end-temp`

3. Install Depencies:

   - run: `npm install`

4. Start the development server:

   - run`npm run dev`

5. Project Structure:

   src/: Contains your React components and application code.

6. Why we like Vite

Fast Development Server: Quick startup times and hot module replacement.
Minimal Configuration: Works out of the box with simple defaults.
Modern Features: Supports ES6 modules and modern JavaScript features.

### Back End

- Try explaining how the backend works with a similar format of how the front end is explained

### Running the app:

Back-End:

1. Make sure the backend (Flask) is running on a separate port (I have it set to port 5000):

2. cd into back-end/

- run: `python app.py`

Front-End:

3. cd into back-end/

- run: `npm run dev`

The Flask API will be available at `http://<localhost>:5000/`
The React front end will be available at `http://<localhost>:5173/`
These are just the default ports, feel free to change them
