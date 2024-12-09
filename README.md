# QTilt

QTilt is a web application for movie enthusiasts to explore, discover, and stay updated with the latest movies. The platform features upcoming, trending, top-rated, most-watched, and currently-playing movies. By leveraging the TMDB API, QTilt provides detailed information on movies, including trailers, crew, and cast details.

## Project Structure

This project is divided into two main folders:

- **Frontend**: Built with Vite, React, and Tailwind CSS, this component handles the user interface and interaction.
- **Backend**: Built with Node.js and Express, this component manages authentication, user data, and integration with TMDB.

## Features

- **Browse Movies**: Access categories like Upcoming, Trending, Top Rated, Most Watched, and Now Playing.
- **Movie Details**: Click on a movie banner to see all details, including an embedded YouTube trailer, synopsis, cast, and crew.
- **User Authentication**: Sign up and log in to create a personal profile.
- **Wishlist**: Users can add movies to their wishlist for easy reference in their profile.
- **Top Crew and Cast**: Each movie page shows key people involved, including the top-billed cast and crew.

## Technologies Used

### Frontend

- **React** with **React Router** for navigation
- **Redux Toolkit** for state management
- **Vite** for fast development and bundling
- **Tailwind CSS** for styling
- **Axios** for API requests
- **ESLint** for code linting

### Backend

- **Node.js** and **Express** for building the API
- **MongoDB** as the database for user data and wishlist
- **JWT** for secure user authentication
- **bcrypt** for password hashing
- **Cookie Parser** and **CORS** middleware for handling cookies and CORS
- **Axios** for API calls to TMDB

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AmitKrVr/QTilt.git
   ```

2. **Navigate to each directory and install dependencies:**

   - Frontend
     ```bash
     cd frontend
     npm install
     ```
   - Backend
     ```bash
     cd backend
     npm install
     ```

3. **Environment Variables:**

   - In both `frontend` and `backend` folders, create a `.env` file and add your TMDB API key, database URL, and other necessary configurations.

4. **Run the Project:**
   - Start the frontend server:
     ```bash
     npm run dev
     ```
   - Start the backend server:
     ```bash
     npm run server
     ```

## Scripts

### Frontend

- `dev`: Starts the development server.
- `start`: Starts the app using `nodemon`.
- `build`: Builds the project.
- `lint`: Lints the project files.

### Backend

- `server`: Starts the backend server using `nodemon`.
- `start`: Runs the server in production mode.

## Contributing

Contributions are welcome! Please fork the repository, make changes, and submit a pull request for review.
