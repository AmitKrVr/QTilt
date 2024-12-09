import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useParams } from "react-router-dom";

const useTrailerVideo = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    const trailerId = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
                API_OPTIONS
            );

            if (!response.ok) {
                throw new Error("Failed to Fetch Data");
            }
            const json = await response.json();
            dispatch(addTrailerVideo(json?.results));
        } catch (error) {
            setError(error.message);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        trailerId();
    }, [id]);

    return { loading, error };
};

export default useTrailerVideo;
