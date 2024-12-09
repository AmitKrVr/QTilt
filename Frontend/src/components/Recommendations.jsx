import { useSelector } from "react-redux";
import useRecommendations from "../hooks/useRecommendations";
import Section from "./Section";

const Recommendations = () => {
    useRecommendations();

    const recommendations = useSelector(
        (store) => store.movies?.recommendations
    );

    if (
        !recommendations.length > 0 ||
        !recommendations ||
        recommendations === undefined ||
        recommendations === null
    )
        return null;

    return (
        <>
            <Section title="Recommendations" movies={recommendations} />
        </>
    );
};
export default Recommendations;
