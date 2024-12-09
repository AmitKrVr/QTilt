import { useSelector } from "react-redux";
import usePopularMovies from "./usePopularMovies";
import { useEffect, useState } from "react";

const useHomeLogic = () => {
    const { loading, error } = usePopularMovies();

    const movies = useSelector((store) => store?.movies?.popularMovies);

    const [movieIndex, setMovieIndex] = useState(0);
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        if (movies && movies.length > 0) {
            const intervalId = setInterval(() => {
                const newIndex = (movieIndex + 1) % movies.length;
                setMovieIndex(newIndex);
            }, 10000); // 20 seconds

            // Clear interval on component unmount
            return () => clearInterval(intervalId);
        }
    }, [movieIndex, movies]);

    useEffect(() => {
        if (movies && movies.length > 0) {
            setMovieDetails(movies[movieIndex]);
        }
    }, [movieIndex, movies]);

    return { movieDetails, loading, error };
};

export default useHomeLogic;
