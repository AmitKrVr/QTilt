import { useSelector } from "react-redux";
import { IMAGE_URL } from "../utils/constant";
import useScrollToTop from "../hooks/useScrollToTop";
import useMovieDetails from "@/hooks/useMovieDetails";
import useTrailerVideo from "@/hooks/useTrailerVideo";

const VideoContainer = ({ id }) => {
    const movieDetail = useMovieDetails(id);
    useScrollToTop(id);

    const { loading } = useTrailerVideo();

    const youtubeKey = useSelector((store) => store.movies?.trailerVideo);

    if (!movieDetail)
        return (
            <section className="h-[470px] w-full mb-8">
                <div className="animate-pulse flex  rounded-lg overflow-hidden">
                    <div className="w-[1160px] h-[470px] bg-gray-700"></div>
                </div>
            </section>
        );

    const { backdrop_path } = movieDetail;

    const key =
        !loading &&
        youtubeKey.filter(
            (key) =>
                key.name === "Official Trailer" ||
                key.name === "Original Trailer" ||
                key.name === "Official Teaser Trailer"
        );

    return (
        <section className="relative min-h-[470px] flex items-center rounded-lg top-4 mb-8">
            {loading || key.length === 0 ? (
                <img
                    src={IMAGE_URL + backdrop_path}
                    alt=""
                    className="absolute w-full h-full object-cover rounded-lg"
                />
            ) : (
                <iframe
                    loading="lazy"
                    className="absolute h-full w-full"
                    src={`https://www.youtube.com/embed/${key[0].key}?si=hN-hex3AN6WRPnHr&rel=0&loop=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            )}
        </section>
    );
};
export default VideoContainer;
