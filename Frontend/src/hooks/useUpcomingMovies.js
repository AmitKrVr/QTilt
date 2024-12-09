import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_API } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const upcomingMovies = async () => {
        try {
            const data = await fetch(
                TMDB_API + "/upcoming?language=en-US&page=1",
                API_OPTIONS
            );
            const json = await data.json();

            dispatch(addUpcomingMovies(json?.results));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        upcomingMovies();
    }, []);
};

export default useUpcomingMovies;
