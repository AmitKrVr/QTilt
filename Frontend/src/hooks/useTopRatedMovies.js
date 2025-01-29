import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect, useState } from "react";
import { TMDB_API } from "../utils/constant";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const topRated = async () => {
        setLoading(true);
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
            setLoading(false);
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        topRated();
    }, []);

    return { loading };
};

export default useTopRatedMovies;
