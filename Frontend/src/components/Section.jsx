import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/constant";

const Section = ({ movies, title }) => {
    if (!movies) return null;

    return (
        <section>
            <h2 className="bg-[var(--container-color)] py-5 px-3 text-xl font-medium border border-gray-300 border-opacity-10">
                {title}
            </h2>

            <div className="">
                <div className="scroll grid grid-flow-col gap-5 overflow-x-auto hover:overflow-x-scroll h-[450px] items-center">
                    {Array.isArray(movies) &&
                        movies.map(
                            (movie) =>
                                movie.poster_path && (
                                    <Link
                                        to={`/movie/${movie.id}`}
                                        key={movie.id}>
                                        <div className="w-72 cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:origin-center">
                                            <div className="relative w-full h-96 ">
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
        </section>
    );
};
export default Section;
