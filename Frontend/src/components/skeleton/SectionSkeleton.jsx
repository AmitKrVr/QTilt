const SectionSkeleton = () => {
    return (
        <div>
            <div className="scroll grid grid-flow-col gap-5 overflow-x-auto hover:overflow-x-scroll h-[450px] items-center">
                {Array.from({ length: 7 }, (_, index) => (
                    <Card key={index} />
                ))}
            </div>
        </div>
    );
};
export default SectionSkeleton;

const Card = () => {
    return (
        <div className="w-72 cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:origin-center">
            <div className="relative w-full h-96 ">
                <div className="h-96 w-72 bg-gray-600 animate-pulse" />
            </div>
        </div>
    );
};
