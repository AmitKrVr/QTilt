import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_API } from "../utils/constant";
import { addNowPLayingMovies } from "../utils/movieSlice";
import { useEffect, useState } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const nowPlaying = async () => {
        setLoading(true);
        try {
            const data = await fetch(
                TMDB_API + "/now_playing?language=en-US&page=1",
                API_OPTIONS
            );

            const json = await data.json();

            dispatch(addNowPLayingMovies(json?.results));

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        nowPlaying();
    }, []);

    return { loading };
};

export default useNowPlayingMovies;
