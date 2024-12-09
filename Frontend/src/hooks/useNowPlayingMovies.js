import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_API } from "../utils/constant";
import { addNowPLayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlaying = async () => {
        try {
            const data = await fetch(
                TMDB_API + "/now_playing?language=en-US&page=1",
                API_OPTIONS
            );

            const json = await data.json();

            dispatch(addNowPLayingMovies(json?.results));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        nowPlaying();
    }, []);
};

export default useNowPlayingMovies;
