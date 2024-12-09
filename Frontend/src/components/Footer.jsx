import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="relative max-w-[1160px] m-auto overflow-hidden pb-10">
            <hr className="pb-10" />
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <Link to="/">
                                <div className="mb-4 text-xl font-extrabold inline-flex items-center">
                                    Q
                                    <span className="text-[var(--main-color)]">
                                        Tilt
                                    </span>
                                </div>
                            </Link>
                            <div>
                                <p className="text-sm text-gray-500">
                                    &copy; Copyright 2024. All Rights Reserved
                                    by QTilt.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-200">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <a
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        href="#">
                                        Features
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        href="#">
                                        Pricing
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        href="#">
                                        Affiliate Program
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        href="#">
                                        Press Kit
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-200">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <a
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        href="#">
                                        Account
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        href="#">
                                        Help
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        href="#">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        href="#">
                                        Customer Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-200">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <a
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        href="#">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        href="#">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        href="#">
                                        Licensing
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
