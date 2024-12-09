import { useSelector } from "react-redux";
import Section from "./Section";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
    useNowPlayingMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    const movies = useSelector((store) => store?.movies?.popularMovies);
    const nowPlaying = useSelector((store) => store?.movies?.nowPlayingMovies);
    const topRated = useSelector((store) => store?.movies?.topRatedMovies);
    const upcomingMovies = useSelector(
        (store) => store?.movies?.upcomingMovies
    );

    if (!movies || movies.length === 0) return null;


    return (
        <>
            <Section title="Now Playing Movies" movies={nowPlaying} />
            <Section title="Top Rated Movies" movies={topRated} />
            <Section title="Upcoming Movies" movies={upcomingMovies} />
            <Section title="Popular Movies" movies={movies} />
        </>
    );
};
export default SecondaryContainer;
