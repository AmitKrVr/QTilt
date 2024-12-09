import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkAuthStatus, loginUser } from "../utils/authSlice";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const handleChange = async (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resposnse = await dispatch(loginUser(formData)).unwrap();

            if (resposnse.success) {
                await dispatch(checkAuthStatus()).unwrap()
                setFormData({
                    email: "",
                    password: ""
                })
                navigate("/");
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="rounded-lg  bg-card text-card-foreground shadow-sm w-full max-w-md mx-auto mt-2 mb-8">
            <div className="flex flex-col text-center p-6 space-y-1">
                <h3 className="whitespace-nowrap tracking-tight text-3xl font-bold">
                    Login
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Enter your email below to login to your account
                </p>
            </div>
            <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="signup-label">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="signup-input"
                            placeholder="m@example.com"
                            required
                            value={email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="relative space-y-2" data-id="10">
                        <div className="flex items-center" data-id="11">
                            <label
                                className="signup-label"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <a
                                className="ml-auto inline-block text-sm underline"

                                href="#">
                                Forgot your password?
                            </a>
                        </div>
                        <input
                            className="signup-input"
                            id="password"
                            required=""
                            name="password"
                            value={password}
                            onChange={handleChange}
                            type={showPassword ? "text" : "password"}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground absolute bottom-1 right-1 h-7 w-7"
                        >
                            {showPassword ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="gray"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5"
                                >
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                    className="h-4 w-4"
                                    fill="gray">
                                    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" />
                                </svg>
                            )}
                            <span className="sr-only" data-id="17">
                                Toggle password visibility
                            </span>
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="bg-[var(--main-color)] hover:bg-yellow-600 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 h-10 px-4 py-2 w-full">
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?
                    <Link to="/signup" className="underline ml-1">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
