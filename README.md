
# Arohana

This is a basic MERN (MongoDB, Express.js, React, Node.js) stack application.

## Project Structure

```
.
├── client/        # React frontend (Vite)
│   ├── src/
│   │   └── ...
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── server/        # Express.js backend
│   ├── server.js     # Main server file
│   ├── routes/
│   │   └── ...
│   ├── models/
│   │   └── ...
│   └── ...
├── .gitignore
├── README.md
└── package.json    # Root package.json
```

## Prerequisites

-   Node.js (>= 18)
-   npm or yarn
-   MongoDB

## Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2.  **Install server dependencies:**

    ```bash
    npm install  # or yarn install in root directory
    ```

3.  **Install client dependencies:**

    ```bash
    cd client
    npm install  # or yarn install
    cd ..
    ```

4.  **Set up MongoDB:**

    -   Ensure MongoDB is running.
    -   Create a `.env` file in the `server` directory with your MongoDB connection string:

        ```
        MONGODB_URI=mongodb://<username>:<password>@<host>:<port>/<database>
        PORT=5000 #or whatever port you wish to use
        ```

        Replace `<username>`, `<password>`, `<host>`, `<port>`, and `<database>` with your MongoDB credentials.
        Add any other server side environment variables to this .env file.

5.  **Set up client environment variables:**
    - Create a `.env.local` file in the `client` directory.
    - Add the server URL:
        ```
        VITE_API_BASE_URL=http://localhost:5000 #or whatever url your server is running on
        ```

## Running the Application

1.  **Start the server:**

    ```bash
    cd server
    npm run start #or node index.js, or yarn start
    ```

    The server will run on the port specified in your `.env` file (e.g., `http://localhost:5000`).

2.  **Start the client:**

    Open a new terminal and run:

    ```bash
    cd client
    npm run dev # or yarn dev
    ```

    The client will run on a development server (usually `http://localhost:5173`).

3.  **Access the application:**

    Open your web browser and navigate to the client's URL (e.g., `http://localhost:5173`).

## Development

-   **Server:**
    -   Modify files in the `server/` directory.
    -   The server will need to be restarted to reflect changes (or use `nodemon`).
-   **Client:**
    -   Modify files in the `client/src/` directory.
    -   Vite will automatically reload the browser on file changes.

## Build for Production

1.  **Build the client:**

    ```bash
    cd client
    npm run build # or yarn build
    ```

    This will create a `dist` folder in the `client` directory containing the production build.

2.  **Serve the production build:**

    -   You can serve the `client/dist` folder using a static file server (e.g., `serve`, `nginx`, or Express.js).
    -   For example, using `serve`:

        ```bash
        npm install -g serve
        serve -s client/dist
        ```
    -   Or, to serve the client from the express server, add the following to your server/index.js file.

    ```javascript
    const path = require('path');
    const express = require('express');
    const app = express();

    //...other server setup...

    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });

    //...server listen...
    ```
    Then run the server as normal.
    -   Ensure your server side environment variables are set correctly for production.
    -   Ensure the client side environment variables are set correctly for production, rebuilding if necessary.

## Dependencies

-   **Server:**
    -   Express.js
    -   MongoDB (Mongoose)
    -   dotenv
    -   cors (if needed)
-   **Client:**
    -   React
    -   Vite
    -   Any other necessary frontend libraries.

## Notes

-   This is a basic setup. You can expand it with more features, authentication, and other functionalities.
-   Remember to secure your API endpoints and handle errors appropriately.
-   Consider using environment variables for sensitive data and configuration.
-   Add more specific instructions based on the actual functionality of your application.
