import Cast from "./Cast";
import Crew from "./Crew";
import MovieCard from "./MovieCard";
import Recommendations from "./Recommendations";
import VideoContainer from "./VideoContainer";
import useScrollToTop from "../hooks/useScrollToTop";
import { useParams } from "react-router-dom";
const MovieDetails = () => {
    const { id } = useParams();
    useScrollToTop();

    return (
        <div className="max-w-[1160px] m-auto">
            <>
                <VideoContainer id={id} />
                <MovieCard id={id} />
                <Recommendations />
                <Cast />
                <Crew />
            </>
            {/* )} */}
        </div>
    );
};
export default MovieDetails;
