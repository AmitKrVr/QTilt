const PersonLoading = () => {
    return (
        <div className="max-w-[1160px] flex flex-col md:flex-row mx-auto">
            <div className="w-96 h-[480px] bg-gray-600 animate-pulse rounded-lg md:mr-3 mb-5" />

            <div className="md:pl-5 w-full">
                <div className="h-8 w-80 bg-gray-600 rounded animate-pulse" />
                <div className="mt-8">
                    <h2 className="text-xl font-semibold">Personal Info</h2>

                    <hr className="mt-5" />

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-4">
                        <div className="">
                            <h3 className="font-semibold tracking-wider mb-2">
                                Known For
                            </h3>
                            <p className="h-4 w-40 bg-gray-600 rounded animate-pulse" />
                        </div>

                        <div>
                            <h3 className="font-semibold tracking-wider mb-2">
                                Gender
                            </h3>
                            <p className="h-4 w-40 bg-gray-600 rounded animate-pulse" />
                        </div>

                        <div>
                            <h3 className="font-semibold tracking-wider mb-2">
                                Birthday
                            </h3>
                            <p className="h-4 w-40 bg-gray-600 rounded animate-pulse" />
                        </div>

                        <div>
                            <h3 className="font-semibold tracking-wider mb-2">
                                Place of Birth
                            </h3>
                            <p className="h-4 w-40 bg-gray-600 rounded animate-pulse" />
                        </div>

                        <div>
                            <h3 className="font-semibold tracking-wider mb-2">
                                Also Known As
                            </h3>
                            <div className="space-y-2">
                                <p className="h-4 w-40 bg-gray-600 rounded animate-pulse" />
                                <p className="h-4 w-40 bg-gray-600 rounded animate-pulse" />
                                <p className="h-4 w-40 bg-gray-600 rounded animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="font-semibold text-xl mb-2 text-gray-200">
                        Biography
                    </h2>
                    <hr className="my-5" />
                    <div className="h-40 w-full bg-gray-600 rounded animate-pulse" />
                </div>
            </div>
        </div>
    );
};
export default PersonLoading;
