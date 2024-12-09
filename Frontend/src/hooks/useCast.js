import { useEffect, useState } from "react";
import { API_OPTIONS, TMDB_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieCast } from "../utils/movieSlice";
import { useParams } from "react-router-dom";

const useCast = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { id } = useParams();

    const castDetails = async () => {
        try {
            const response = await fetch(
                `${TMDB_API}/${id}/credits?language=en-US`,
                API_OPTIONS
            );
            if (!response.ok) {
                throw new Error("Failed to Fetch Data");
            }
            const json = await response.json();

            dispatch(addMovieCast(json));

            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        castDetails();
    }, []);

    return { loading, error };
};

export default useCast;
