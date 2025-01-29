import { Link, NavLink, useNavigate } from "react-router-dom";
import {
    LogOut,
    TrendingUpIcon,
    Globe,
    Film,
    CircleUser,
    Search,
    Menu,
    Bookmark,
    HelpCircle,
    Tv,
    UserRoundPen,
} from "lucide-react";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthStatus, logoutUser } from "../utils/authSlice";
import { API_OPTIONS } from "@/utils/constant";

const user_menu = [
    {
        link: "/profile",
        title: "Manage Profile",
        icon: <UserRoundPen className="mr-2 h-5 w-5 inline" />,
    },
    {
        link: "/wishlist",
        title: "Wishlist",
        icon: <Bookmark className="mr-2 h-5 w-5 inline" />,
    },
    {
        link: "/help",
        title: "Help",
        icon: <HelpCircle className="mr-2 h-5 w-5 inline" />,
    },
];

const dropdown_menu = [
    {
        link: "/trending",
        title: "Trending",
        icon: <TrendingUpIcon className="mr-2 h-5 w-5 inline" />,
    },
    {
        link: "/explore",
        title: "Explore",
        icon: <Globe className="mr-2 h-5 w-5 inline" />,
    },
    {
        link: "/movies",
        title: "Movie",
        icon: <Film className="mr-2 h-5 w-5 inline" />,
    },
    {
        link: "/tv-shows",
        title: "TV Shows",
        icon: <Tv className="mr-2 h-5 w-5 inline" />,
    },
];

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const dropdownRef = useRef(null);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    useEffect(() => {
        dispatch(checkAuthStatus());
    }, [dispatch]);

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser()).unwrap();
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    useEffect(() => {
        const fetchMovies = async () => {
            if (!searchQuery) {
                setSearchResults([]);
                return;
            }

            setIsLoading(true);
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
                        searchQuery
                    )}&include_adult=false&language=en-US&page=1`,
                    API_OPTIONS
                );
                const data = await response.json();
                setSearchResults(data.results || []);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setIsLoading(false);
            }
        };

        const debounceTimeout = setTimeout(() => fetchMovies(), 300);
        return () => clearTimeout(debounceTimeout);
    }, [searchQuery]);

    const handleOutsideClick = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setSearchQuery("");
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div className="w-full sticky top-0 left-0 z-50 bg-[var(--body-color)]">
            <div className="max-w-[1160px] m-auto">
                <div className="z-50 flex justify-between items-center h-20">
                    {/* Mobile Menu */}
                    <div className="relative md:hidden group py-5 pr-3">
                        <Menu className="group-hover:bg-gray-700 rounded-md px-1 py-1 size-8 group-hover:text-[var(--hover-color)] transition-all" />
                        <div className="origin-top-left absolute left-0 mt-5 w-40 rounded-md shadow-lg bg-white bg-opacity-75 backdrop-blur-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block transition-all duration-300">
                            <div className="py-1" role="menu">
                                {dropdown_menu.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        to={item.link}
                                        className="block px-4 py-2 text-sm text-black hover:bg-[var(--container-color)] hover:text-[var(--hover-color)] font-medium"
                                        role="menuitem">
                                        {item.icon}
                                        {item.title}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="md:flex items-center hidden">
                        <Link to="/" className="">
                            <div className="text-lg sm:text-2xl font-bold">
                                Q
                                <span className="text-[var(--main-color)]">
                                    Tilt
                                </span>
                            </div>
                        </Link>

                        <div className="hidden md:block ml-10 space-x-6">
                            <Link
                                to="/"
                                className="font-medium px-3 py-1.5 hover:text-[var(--hover-color)] hover:bg-gray-700 rounded-md">
                                Home
                            </Link>
                            <Link
                                to="/movies"
                                className="font-medium px-3 py-1.5 hover:text-[var(--hover-color)] hover:bg-gray-700 rounded-md">
                                Movie
                            </Link>
                            <Link
                                to="/trending"
                                className="font-medium px-3 py-1.5 hover:text-[var(--hover-color)] hover:bg-gray-700 rounded-md">
                                Trending
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Logo */}
                    <Link to="/" className="md:hidden">
                        <div className="text-lg sm:text-2xl font-bold">
                            Q
                            <span className="text-[var(--main-color)]">
                                Tilt
                            </span>
                        </div>
                    </Link>

                    {/* Right Side - Search and User */}
                    <div className="flex-center gap-x-4 justify-between">
                        {/* Search Box */}
                        <div className="hidden md:flex items-center w-40 max-w-60 sm:w-full gap-x-2 pl-4 pr-2 py-2 bg-[var(--container-color)] rounded-full mr-1">
                            <input
                                className="w-full border-none outline-none text-[var(--text-color)] bg-transparent text-sm"
                                type="search"
                                placeholder="Search movie"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <Search className="h-4 cursor-pointer text-[var(--text-color)] hover:text-[var(--hover-color)]" />
                        </div>
                        <Search className="block md:hidden cursor-pointer text-[var(--text-color)] hover:text-[var(--hover-color)]" />

                        {/* Search Results Dropdown */}
                        {searchQuery && searchResults.length > 0 && (
                            <div
                                ref={dropdownRef}
                                className="absolute bg-white text-black rounded-lg shadow-md mt-2 top-16 w-full max-w-sm overflow-hidden z-50">
                                {searchResults.slice(0, 5).map((movie) => (
                                    <Link
                                        to={`movie/${movie.id}`}
                                        key={movie.id}
                                        onClick={() => setSearchQuery("")}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
                                        {movie.poster_path && (
                                            <img
                                                src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                                                alt={movie.title}
                                                className="w-12 h-18 rounded-md mr-4"
                                            />
                                        )}
                                        <div>
                                            <p className="font-medium line-clamp-1">
                                                {movie.title}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {movie.release_date}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {isLoading && (
                            <div className="absolute top-16  bg-white text-black rounded-lg shadow-md mt-2 w-full max-w-sm overflow-hidden z-50 px-4 py-2">
                                Loading...
                            </div>
                        )}

                        {/* User Menu */}
                        <div className="relative pl-3 py-5 group">
                            {isAuthenticated ? (
                                // Authenticated User View
                                <>
                                    <CircleUser className="size-8 group-hover:text-[var(--main-color)] group-hover:scale-125 transition-all duration-300 cursor-pointer" />
                                    <div className="hidden group-hover:block origin-top-right absolute right-0 mt-5 w-44 rounded-md shadow-lg bg-white bg-opacity-75 backdrop-blur-lg ring-1 ring-black ring-opacity-5 transition-all duration-300">
                                        <div className="py-1" role="menu">
                                            {/* User Name */}
                                            <div className="block px-4 py-2 text-sm text-black font-bold text-center text-[var(--hover-color)]">
                                                {user?.name}
                                            </div>
                                            {/* Menu Items */}
                                            {user_menu.map((item, index) => (
                                                <NavLink
                                                    key={index}
                                                    to={item.link}
                                                    className="block px-4 py-2 text-sm text-black hover:bg-[var(--container-color)] hover:text-[var(--hover-color)] font-medium"
                                                    role="menuitem">
                                                    {item.icon}
                                                    {item.title}
                                                </NavLink>
                                            ))}
                                            {/* Logout Button */}
                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left block px-4 py-2 text-sm text-black hover:bg-[var(--container-color)] hover:text-[var(--hover-color)] font-medium"
                                                role="menuitem">
                                                <LogOut className="mr-2 h-5 w-5 inline" />{" "}
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                // Non-authenticated User View
                                <CircleUser
                                    onClick={() => navigate("/login")}
                                    className="size-8 hover:text-[var(--main-color)] hover:scale-125 transition-all duration-300 cursor-pointer"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
