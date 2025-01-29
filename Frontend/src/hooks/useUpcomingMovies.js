import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_API } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect, useState } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const upcomingMovies = async () => {
        setLoading(true);
        try {
            const data = await fetch(
                TMDB_API + "/upcoming?language=en-US&page=1",
                API_OPTIONS
            );
            const json = await data.json();

            dispatch(addUpcomingMovies(json?.results));

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        upcomingMovies();
    }, []);

    return { loading };
};

export default useUpcomingMovies;
