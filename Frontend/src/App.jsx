import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { checkAuthStatus } from "./utils/authSlice";

// Components
import Body from "./components/Body";
import Header from "./components/Header";
import MovieDetails from "./components/MovieDetails";
import Person from "./components/Person";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Wishlist from "./components/Wishlist";
import NotFound from "./components/NotFound";
import Trending from "./components/Trending";
import TermsAndConditions from "./components/TermsAndConditions";
import Privacy from "./components/Privacy";
import ContactUs from "./components/ContactUs";
import SectionSkeleton from "./components/skeleton/SectionSkeleton";

// Loading Spinner Component
const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
);

// Authentication wrapper component
const AuthCheck = ({ children }) => {
    const dispatch = useDispatch();
    const { loading, initialized } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!initialized) {
            dispatch(checkAuthStatus());
        }
    }, [dispatch, initialized]);

    if (loading && !initialized) {
        return <LoadingSpinner />;
    }

    return children;
};

// Public Route wrapper (for login/signup)
const PublicRoute = ({ children }) => {
    const { isAuthenticated, initialized } = useSelector((state) => state.auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (!initialized) {
        return <LoadingSpinner />;
    }

    if (isAuthenticated) {
        return <Navigate to={from} replace />;
    }

    return children;
};

// Protected Route wrapper
const PrivateRoute = ({ children }) => {
    const { isAuthenticated, initialized, loading } = useSelector(
        (state) => state.auth
    );
    const location = useLocation();

    if (!initialized || loading) {
        return <LoadingSpinner />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

function App() {
    return (
        <div className="relative min-h-screen bg-[var(--body-color)] text-white px-4">
            <AuthCheck>
                <Header />
                <main className="pb-16">
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<Body />} />
                        <Route path="trending" element={<Trending />} />
                        <Route path="/movie/:id" element={<MovieDetails />} />
                        <Route path="/person/:personId" element={<Person />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/loading" element={<SectionSkeleton />} />
                        <Route
                            path="/terms&conditions"
                            element={<TermsAndConditions />}
                        />
                        <Route path="/privacy" element={<Privacy />} />

                        {/* Auth Routes */}
                        <Route
                            path="/login"
                            element={
                                <PublicRoute>
                                    <Login />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <PublicRoute>
                                    <Signup />
                                </PublicRoute>
                            }
                        />

                        {/* Protected Routes */}
                        <Route
                            path="/profile"
                            element={
                                <PrivateRoute>
                                    <Profile />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/wishlist"
                            element={
                                <PrivateRoute>
                                    <Wishlist />
                                </PrivateRoute>
                            }
                        />

                        {/* 404 Route - Must be last */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </AuthCheck>
        </div>
    );
}

export default App;
