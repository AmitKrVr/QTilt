const MovieCard = ({ movieDetails }) => {
    const {
        original_title,
        overview,
        release_date,
        status,
        tagline,
        genres,
        production_countries,
        production_companies,
        runtime,
        original_language,
        budget,
    } = movieDetails;

    const genresData = genres ? genres.map((genre) => genre.name) : [];
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return (
        <div className="flex flex-col gap-y-3 pb-5">
            <div className="font-extrabold text-3xl">{original_title}</div>
            <div className="flex items-center gap-x-2 font-medium text-sm">
                <span className="px-3 py-1 bg-[var(--btn-color)] rounded-full">
                    {release_date}
                    <span className="text-xs">
                        {production_countries &&
                            `(${production_countries[0].iso_3166_1})`}
                    </span>
                </span>
                <span className="px-3 py-1 bg-[var(--btn-color)] rounded-full">
                    {genresData.join(", ")}
                </span>
                <span className="px-3 py-1 bg-[var(--btn-color)] rounded-full">
                    {hours}h {minutes}m
                </span>
            </div>
            <div className="">
                <span className="font-medium">Tagline: </span>
                <span className="text-sm font-medium text-gray-300">
                    {tagline}
                </span>
            </div>
            <div className="mt-3">
                <h2 className="text-xl font-bold">Overview</h2>
                <p className="text-sm text-gray-300">{overview}</p>
            </div>

            <hr className="" />

            <div className="grid grid-cols-4 py-4 items-center gap-y-3">
                <span>
                    <h3 className="font-semibold">Status</h3>
                    <p className="text-sm text-gray-300">{status}</p>
                </span>
                <span>
                    <h3 className="font-semibold">Language</h3>
                    <p className="text-sm text-gray-300">{original_language}</p>
                </span>
                <span>
                    <h3 className="font-semibold">Budget</h3>
                    <p className="text-sm text-gray-300">
                        {budget
                            ? budget.toLocaleString("en-US", {
                                  style: "currency",
                                  currency: "USD",
                                  minimumFractionDigits: 2,
                              })
                            : "Null"}
                    </p>
                </span>
                <span>
                    <h3 className="font-semibold">Production Countries</h3>
                    <p className="text-sm text-gray-300">
                        {production_countries
                            ? production_countries[0].iso_3166_1
                            : "Null"}
                    </p>
                </span>
                <span>
                    <h3 className="font-semibold">Production Companies</h3>
                    {production_companies &&
                        production_companies.map((company) => (
                            <p
                                key={company.id}
                                className="text-sm text-gray-300">
                                {company.name}
                            </p>
                        ))}
                </span>
            </div>
        </div>
    );
};
export default MovieCard;
