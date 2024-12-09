import { IMAGE_URL } from "../utils/constant";
import CastCard from "./CastCard";
import { useParams } from "react-router-dom";

const Crew = ({ crews, loading }) => {
    // const { personId } = useParams();

    if (loading)
        return (
            <div className="flex items-center justify-center pb-3 overflow-hidden">
                <div className="scroll grid grid-flow-col gap-x-3 overflow-x-scroll cursor-pointer">
                    {[...Array(10)].map((_, index) => (
                        <div
                            key={index}
                            className="overflow-hidden w-32 rounded-lg bg-[var(--container-color)]">
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

    // Filter out duplicate entries based on the id
    const uniqueCrews = crews.filter(
        (crew, index) => crews.findIndex((c) => c.id === crew.id) === index
    );

    return (
        <div className="mt-4 pb-4">
            <div className="font-bold text-2xl pb-3">Top Crews</div>
            <div className="scroll grid grid-flow-col gap-x-2 overflow-x-scroll">
                {uniqueCrews &&
                    uniqueCrews.map(
                        (crew) =>
                            crew.profile_path && (
                                <CastCard
                                    key={crew.id}
                                    personId={crew.id}
                                    name={crew.name}
                                    image={IMAGE_URL + crew.profile_path}
                                    subtitle={crew.known_for_department}
                                />
                            )
                    )}
            </div>
        </div>
    );
};
export default Crew;
