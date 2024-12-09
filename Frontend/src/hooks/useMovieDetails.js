import { useEffect } from "react";
import { API_OPTIONS, TMDB_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../utils/movieSlice";

const useMovieDetails = (id) => {
    const dispatch = useDispatch();
    const cachedDetails = useSelector((store) => store.movies.movieDetails[id]);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(
                    `${TMDB_API}/${id}?language=en-US`,
                    API_OPTIONS
                );
                const data = await response.json();
                dispatch(addMovieDetails({ id, details: data }));
            } catch (error) {
                console.log(error);
            }
        };

        if (!cachedDetails) {
            fetchMovie();
        }
    }, [id, cachedDetails, dispatch]);

    return cachedDetails;
};

export default useMovieDetails;
