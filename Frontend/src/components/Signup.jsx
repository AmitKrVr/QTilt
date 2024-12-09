import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkAuthStatus, registerUser } from "../utils/authSlice";

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { loading, error } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await dispatch(registerUser(formData)).unwrap();
            if (result.success) {
                // Check auth status after successful registration
                await dispatch(checkAuthStatus()).unwrap();
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                });
                navigate("/"); // Navigate to home page instead of login
            }
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <div className="max-w-[1060px] m-auto pb-6 space-y-6">
            <div className="mx-auto max-w-xl px-4 flex items-center space-y-4 flex-col">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Sign Up</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Enter your information to create an account
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="w-full divide-y divide-gray-200 dark:divide-gray-800">
                    <div className="pt-6 space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 lg:gap-4">
                            <div className="space-y-2">
                                <label
                                    className="signup-label"
                                    htmlFor="first-name">
                                    First name
                                </label>
                                <input
                                    className="signup-input"
                                    id="first-name"
                                    name="firstName"
                                    placeholder="Amit"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    className="signup-label"
                                    htmlFor="last-name">
                                    Last name
                                </label>
                                <input
                                    className="signup-input"
                                    id="last-name"
                                    name="lastName"
                                    placeholder="Kumar"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="signup-label" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="signup-input"
                                id="email"
                                name="email"
                                placeholder="m@example.com"
                                required
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="signup-label" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="signup-input"
                                id="password"
                                required
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="pt-6 pb-6 space-y-4">
                        <button
                            className="bg-[var(--main-color)] hover:bg-yellow-600 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground  h-10 px-4 py-2 w-full"
                            type="submit">
                            Sign Up
                        </button>
                        {/* <div
                            data-orientation="horizontal"
                            role="none"
                            className="shrink-0 bg-gray-100 h-[1px] w-full"></div> */}
                        <div className="mt-4 text-center text-sm">
                            Already have an account?
                            <Link className="underline ml-1" to="/login">
                                Login
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Signup;
