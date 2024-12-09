import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPersonData } from "../utils/personSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const usePersonData = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { personId } = useParams();
    const cachedData = useSelector(
        (state) => state.person.personData[personId]
    );

    const personData = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/person/${personId}?language=en-US`,
                API_OPTIONS
            );
            if (!response.ok) {
                throw new Error("Failed to Fetch Data");
            }
            const json = await response.json();

            dispatch(addPersonData({ personId, data: json }));

            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };

    useEffect(() => {
        if (!cachedData) {
            personData();
        } else {
            setLoading(false);
        }
    }, [personId]);

    return { loading, error, data: cachedData };
};

export default usePersonData;
