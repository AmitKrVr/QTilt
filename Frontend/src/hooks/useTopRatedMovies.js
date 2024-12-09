import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { TMDB_API } from "../utils/constant";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRated = async () => {
        try {
            const data = await fetch(
                TMDB_API + "/top_rated?language=en-US&page=1",
                API_OPTIONS
            );

            if (!data.ok) {
                throw new Error("Failed to fatch Data");
            }

            const json = await data.json();

            dispatch(addTopRatedMovies(json?.results));
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        topRated();
    }, []);
};

export default useTopRatedMovies;
