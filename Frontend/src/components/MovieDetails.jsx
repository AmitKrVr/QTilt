import useCast from "../hooks/useCast";
import Cast from "./Cast";
import Crew from "./Crew";
import MovieCard from "./MovieCard";
import Recommendations from "./Recommendations";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import useScrollToTop from "../hooks/useScrollToTop";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import useTrailerVideo from "../hooks/useTrailerVideo";
import Loading from "./Loading";

const MovieDetails = () => {
    const { id } = useParams();

    const movie = useMovieDetails(id);
    useScrollToTop();

    const casts = useSelector((store) => store.movies?.movieCast?.cast);
    const crews = useSelector((store) => store.movies?.movieCast?.crew);

    const { loading } = useCast();
    const { loading: trailerLoading } = useTrailerVideo();

    if (!movie)
        return (
            <div className="max-w-[1060px] m-auto min-h-[470px] grid place-content-center">
                <Loading />
            </div>
        );

    return (
        <div className="max-w-[1160px] m-auto">
            {movie.status_message ? (
                <div className="min-h-[470px] flex justify-center items-center">
                    {movie.status_message}
                </div>
            ) : (
                <>
                    <VideoContainer
                        movieDetail={movie}
                        id={id}
                        loading={trailerLoading}
                    />
                    <MovieCard movieDetails={movie} />
                    <Recommendations />
                    <Cast casts={casts} loading={loading} />
                    <Crew crews={crews} loading={loading} />
                </>
            )}
        </div>
    );
};
export default MovieDetails;
