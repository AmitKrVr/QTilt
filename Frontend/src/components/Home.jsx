import { IMAGE_URL } from "../utils/constant";
import useHomeLogic from "../hooks/useHomeLogic";
import { Link } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";

const Home = () => {
    const { movieDetails, loading, error } = useHomeLogic();

    useScrollToTop();

    if (loading)
        return (
            <section className="h-[470px] w-full mb-8">
                <div className="animate-pulse flex  rounded-r-lg overflow-hidden">
                    <div className="w-[1160px] h-[470px] bg-gray-700"></div>
                </div>
            </section>
        );

    if (error)
        return (
            <section className="min-h-[470px] flex items-center justify-center pt-20 rounded-lg">
                {error}
            </section>
        );

    const { backdrop_path, original_title, release_date, id } = movieDetails;

    return (
        <section className="relative min-h-[470px] flex items-center rounded-lg top-4 mb-8">
            <img
                src={IMAGE_URL + backdrop_path}
                alt=""
                className="absolute w-full h-full  object-cover rounded-lg"
            />

            <div className="absolute h-full justify-end pb-14 bg-gradient-to-r from-black  pl-10 z-10 flex flex-col gap-y-5">
                <h1 className="text-4xl tracking-wider font-semibold">
                    {original_title}
                </h1>

                <p className="text-xs ml-0 text-[var(--main-color)]">
                    Releasing {release_date}
                </p>

                <div className="flex items-center gap-x-2">
                    <Link to={`/movie/${id}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-9 h-9 cursor-pointer bg-[var(--main-color)] rounded-full p-1">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                            />
                        </svg>
                    </Link>

                    <span className="font-medium">Watch the trailer</span>
                </div>
            </div>
        </section>
    );
};
export default Home;
