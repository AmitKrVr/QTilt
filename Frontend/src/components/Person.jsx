import usePersonData from "../hooks/usePersonData";
import { IMAGE_URL } from "../utils/constant";
import useScrollToTop from "../hooks/useScrollToTop";
import PersonLoading from "./skeleton/PersonLoading";

const Person = () => {
    const { loading, error, data: person } = usePersonData();

    useScrollToTop();

    if (loading) return <PersonLoading />;

    if (error)
        return (
            <div className="text-center text-red-500">
                <p>Error: {error}</p>
            </div>
        );

    const {
        biography,
        also_known_as,
        birthday,
        gender,
        known_for_department,
        name,
        place_of_birth,
        profile_path,
    } = person;

    return (
        <div className="max-w-[1160px] m-auto grid md:grid-flow-col">
            <div className="w-full md:col-span-4 md:mr-3 mb-5">
                <img
                    loading="lazy"
                    src={IMAGE_URL + profile_path}
                    alt=""
                    className="sm:w-80 rounded-lg"
                />
            </div>
            <div className="md:col-span-9 text-justify md:pl-5">
                <div className="text-3xl tracking-wider font-bold">{name}</div>

                <div className="py-4">
                    <h2 className="text-xl font-semibold">Personal Info</h2>
                    <hr className="mt-2" />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-4">
                        {known_for_department && (
                            <div className="">
                                <h3 className="font-semibold tracking-wider">
                                    Known For
                                </h3>
                                <p className="text-sm font-medium text-gray-300">
                                    {known_for_department}
                                </p>
                            </div>
                        )}
                        {gender && (
                            <div>
                                <h3 className="font-semibold tracking-wider">
                                    Gender
                                </h3>
                                <p className="text-sm font-medium text-gray-300">
                                    {gender === 2 ? "Male" : "Female"}
                                </p>
                            </div>
                        )}
                        {birthday && (
                            <div>
                                <h3 className="font-semibold tracking-wider">
                                    Birthday
                                </h3>
                                <p className="text-sm font-medium text-gray-300">
                                    {birthday}
                                </p>
                            </div>
                        )}
                        {place_of_birth && (
                            <div>
                                <h3 className="font-semibold tracking-wider">
                                    Place of Birth
                                </h3>
                                <p className="text-sm font-medium text-gray-300">
                                    {place_of_birth}
                                </p>
                            </div>
                        )}
                        {also_known_as.length > 0 && (
                            <div>
                                <h3 className="font-semibold tracking-wider">
                                    Also Known As
                                </h3>
                                <div className="text-sm font-medium text-gray-300">
                                    {also_known_as.map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {biography && (
                    <div className="">
                        <h2 className="font-semibold text-xl mb-2 text-gray-200">
                            Biography
                        </h2>
                        <hr className="mt-2 mb-2" />
                        <p className="text-sm leading-5 text-gray-400 ">
                            {biography}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Person;
