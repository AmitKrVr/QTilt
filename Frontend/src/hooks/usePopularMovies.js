import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_API } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const [loading, SetLoading] = useState(true);
    const [error, setError] = useState(null);

    const popularMovies = async () => {
        try {
            const data = await fetch(TMDB_API + "/now_playing", API_OPTIONS);
            if (!data.ok) {
                throw new Error("Failed to Fetch Data");
            }

            const json = await data.json();

            dispatch(addPopularMovies(json?.results));
            SetLoading(false);
        } catch (error) {
            setError(error.message);
            SetLoading(false);
        }
    };
    useEffect(() => {
        popularMovies();
    }, []);

    return { loading, error };
};
export default usePopularMovies;
