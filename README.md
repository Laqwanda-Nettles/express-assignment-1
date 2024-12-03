# Express Assignment 1

## Project Setup and Configuration

This project demonstrates a simple Express.js server implementation. It includes routes for basic GET and POST requests, utilizes nodemon for development, and outlines steps for testing routes.

## Setup

### _Option 1:_

1. Create a new repository and intialize it with a .gitignore for Node.js and a README.md.
2. Clone repository to your local machine and navigate to cloned repository's directory.
   ```bash
   git clone <repository url>
   cd <project directory/folder>
   ```
3. Intialize a Node.js Project.
   In your project directory run the following command:
   ```bash
   npm init -y
   ```
4. Install express.
   ```bash
   npm install express
   ```

### _Option 2:_

1. Open terminal in your project directory and create a new directory.
   ```bash
   mkdir <directory name>
   ```
2. Navigate to created directory.
   ```bash
   cd <directory name>
   ```
3. Intialize Node.js project.
   ```bash
   npm init -y
   ```
4. Intialize empty Git repository and commit.
   ```bash
   git init
   git add .
   git commit -m 'intialized'
   ```
5. Install Express
   `bash
    npm install express
    `
   Open VS Code with the following command:

```bash
code .
```

---

### Setup Options

The setup process is essentially the same for both options, differing only in workflow. Choose the option that best suits your preferences and workflow.

- **Option 1**: This workflow focuses on using a repository-based approach from the start, ideal for those who prefer version control integration early in the project setup. _(Preferred option)_
- **Option 2**: This workflow emphasizes setting up the project manually from scratch in your local environment, perfect for those who prefer to configure everything step by step before integrating with version control.

Both options lead to the same project structure and functionality. Proceed with the workflow that aligns best with how you like to work.

---

## Configuration

In `package.json`add type module after main.

```json
"type": "module",
```

Update `package.json` after installing `Nodemon`.

- Installing Nodemon

```bash
npm install --save-dev nodemon
```

- Add these scripts to `package.json`

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
}
```

## Implementing the Server

The server is built using Express.js and includes the following routes:

1. **Root Route (`/`)**

   - **Method**: GET
   - **Response**: `"Welcome to the Express server!"`

2. **About Route (`/about`)**

   - **Method**: GET
   - **Response**: `"This is the about page."`

3. **Data Route (`/data`)**
   - **Method**: POST
   - **Response**: A JSON object with details about a fictional character from One Piece anime:
     ```json
     {
       "name": "Monkey D. Luffy",
       "crew": "Straw Hat Pirates",
       "title": "captain",
       "age": 19
     }
     ```

The server listens on **port 3000**.

---

## Using Nodemon for Development

`nodemon` is a development dependency that automatically restarts the server when file changes are detected.

### Starting the Server

Run the following command to start the server in development mode:

```bash
npm run dev
```

This will use `nodemon` to monitor file changes in real time.

Alternatively, you can start the server without `nodemon` using:

```bash
npm start
```

---

## Testing Routes

### Testing Using Thunder Client

1. Open Thunder Client or a similar API testing tool.
2. Add a request for each route:
   - **GET**: `http://localhost:3000/`
   - **GET**: `http://localhost:3000/about`
   - **POST**: `http://localhost:3000/data`
3. Send the requests and verify the responses.
   - **Responses**
     - **Root Route (`/`)**
       ![alt text](<Screenshot 2024-12-02 223001.png>)
     - **About Route (`/about`)**
       ![alt text](<Screenshot 2024-12-02 223045.png>)
     - **Data Route (`/data`)**
       ![alt text](<Screenshot 2024-12-02 223116.png>)

---

## Scripts Reference

- **`npm start`**: Starts the server using Node.js.
- **`npm run dev`**: Starts the server in development mode using Nodemon.

---
