import { Link } from "react-router-dom";

const CastCard = ({ name, image, subtitle, personId }) => {
    return (
        <Link to={`/person/${personId}`}>
            <div className="w-36 bg-[var(--container-color)] text-white rounded-lg overflow-hidden cursor-pointer">
                {!image ? (
                    <div className="animate-pulse flex space-x-4">
                        <div className="w-full h-48 bg-gray-700"></div>
                    </div>
                ) : (
                    <img src={image} alt="" />
                )}
                <div className="px-2 pt-1 pb-3">
                    <p className="text-base font-medium overflow-hidden whitespace-nowrap text-ellipsis">
                        {name}
                    </p>
                    <p className="text-sm">{subtitle}</p>
                </div>
            </div>
        </Link>
    );
};
export default CastCard;
