import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import { IMAGE_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";

const Trending = () => {
    usePopularMovies();
    const popularMovies = useSelector((store) => store?.movies?.popularMovies);

    useScrollToTop();

    return (
        <div className="max-w-[1160px] mx-auto py-10">
            <div className="flex flex-wrap gap-8 justify-center">
                {Array.isArray(popularMovies) &&
                    popularMovies.map(
                        (movie) =>
                            movie.poster_path && (
                                <Link to={`/movie/${movie.id}`} key={movie.id}>
                                    <div className="w-72 sm:w-60 md:w-56 cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:origin-center">
                                        <div className="relative w-full h-96 sm:h-72 ">
                                            <img
                                                src={
                                                    IMAGE_URL +
                                                    movie.poster_path
                                                }
                                                alt=""
                                                className="h-full w-full object-cover"
                                            />
                                            <div className="background-linear absolute left-0 bottom-0 w-full h-full flex flex-col justify-end p-3 overflow-hidden">
                                                <h2 className="text-[1.1rem] font-medium mb-4 overflow-hidden whitespace-nowrap text-ellipsis">
                                                    {movie.original_title}
                                                </h2>
                                                <span className="text-s">
                                                    Action
                                                </span>
                                                <div className="watch-btn absolute bottom-3 right-3 cursor-pointer">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-9 h-9 bg-[var(--main-color)] rounded-full p-1">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                    )}
            </div>
        </div>
    );
};
export default Trending;
