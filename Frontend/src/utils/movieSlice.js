import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        popularMovies: {},
        nowPlayingMovies: {},
        topRatedMovies: {},
        upcomingMovies: {},
        movieDetails: {},
        recommendations: {},
        movieCast: {},
        personData: {},
        trailerVideo: {},
    },
    reducers: {
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addNowPLayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addMovieDetails: (state, action) => {
            const { id, details } = action.payload;
            state.movieDetails[id] = details;
        },
        addRecommendations: (state, action) => {
            state.recommendations = action.payload;
        },
        addMovieCast: (state, action) => {
            state.movieCast = action.payload;
        },
        addPersonData: (state, action) => {
            state.personData = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    },
});

export const {
    addPopularMovies,
    addNowPLayingMovies,
    addTopRatedMovies,
    addUpcomingMovies,
    addMovieDetails,
    addRecommendations,
    addMovieCast,
    addPersonData,
    addTrailerVideo,
} = movieSlice.actions;

export default movieSlice.reducer;
