import { useEffect } from "react";
import { API_OPTIONS, TMDB_API } from "../utils/constant";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRecommendations } from "../utils/movieSlice";

const useRecommendations = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const recommendations = async () => {
        try {
            const data = await fetch(
                TMDB_API + `/${id}/recommendations?language=en-US&page=1`,
                API_OPTIONS
            );

            if (!data.ok) {
                throw new Error("Failed to Fatch Data");
            }

            const json = await data.json();

            dispatch(addRecommendations(json?.results));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        recommendations();
    }, [id]);
};

export default useRecommendations;
