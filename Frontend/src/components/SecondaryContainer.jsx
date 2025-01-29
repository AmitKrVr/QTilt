import { useSelector } from "react-redux";
import Section from "./Section";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
    const { loading: nowPlayingLoading } = useNowPlayingMovies();
    const { loading: topRatedLoading } = useTopRatedMovies();
    const { loading: upcomingLoading } = useUpcomingMovies();

    const movies = useSelector((store) => store?.movies?.popularMovies);
    const nowPlaying = useSelector((store) => store?.movies?.nowPlayingMovies);
    const topRated = useSelector((store) => store?.movies?.topRatedMovies);
    const upcomingMovies = useSelector(
        (store) => store?.movies?.upcomingMovies
    );

    return (
        <>
            <Section
                title="Now Playing Movies"
                movies={nowPlaying}
                loading={nowPlayingLoading}
            />
            <Section
                title="Top Rated Movies"
                movies={topRated}
                loading={topRatedLoading}
            />
            <Section
                title="Upcoming Movies"
                movies={upcomingMovies}
                loading={upcomingLoading}
            />
            <Section title="Popular Movies" movies={movies} />
        </>
    );
};
export default SecondaryContainer;
