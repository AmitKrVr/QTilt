import useCast from "../hooks/useCast";
import { IMAGE_URL } from "../utils/constant";
import CastCard from "./CastCard";
import { useSelector } from "react-redux";

const Cast = ({ casts, loading }) => {
    // const { loading, error } = useCast();
    // const casts = useSelector((store) => store.movies?.movieCast?.cast);

    if (loading)
        return (
            <div className="flex items-center justify-center pb-3 overflow-hidden">
                <div className="scroll grid grid-flow-col gap-x-3 overflow-x-scroll cursor-pointer">
                    {[...Array(10)].map((_, index) => (
                        <div
                            key={index}
                            className="overflow-hidden w-36 rounded-lg bg-[var(--container-color)]">
                            <div className="animate-pulse flex flex-col  ">
                                <div className="w-32 h-40 bg-gray-700"></div>
                                <div className="flex flex-col gap-2 px-2 py-3">
                                    <div className="h-3 bg-gray-700 rounded"></div>
                                    <div className="h-2 bg-gray-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );

    return (
        <div className="pt-2 pb-4">
            <div className="font-bold text-2xl pb-3">Top Billed Cast</div>
            <div className="scroll grid grid-flow-col gap-x-2 overflow-x-scroll">
                {casts &&
                    casts.map(
                        (cast) =>
                            cast.profile_path && (
                                <CastCard
                                    key={cast.id}
                                    personId={cast.id}
                                    name={cast.name}
                                    image={IMAGE_URL + cast.profile_path}
                                    subtitle={cast.known_for_department}
                                />
                            )
                    )}
            </div>
        </div>
    );
};
export default Cast;
