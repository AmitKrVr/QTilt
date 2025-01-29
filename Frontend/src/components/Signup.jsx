import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkAuthStatus, registerUser } from "../utils/authSlice";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        <div className="max-w-[1160px] bg-[var(--container-color)] m-auto pb-6 space-y-6 rounded-2xl shadow-lg p-8 md:p-12 w-full">
            <div className="mx-auto max-w-xl px-4 flex items-center space-y-4 flex-col">
                <div className="space-y-2 text-center">
                    <h1
                        className="text-3xl md:text-4xl font-bold 
            text-[var(--main-color)] mb-4">
                        Sign Up
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Enter your information to create an account
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="w-full ">
                    <div className="pt-6 space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 lg:gap-4">
                            <div className="space-y-2">
                                <label htmlFor="first-name">First name</label>
                                <Input
                                    id="first-name"
                                    name="firstName"
                                    placeholder="Amit"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className=""
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="last-name">Last name</label>
                                <Input
                                    id="last-name"
                                    name="lastName"
                                    placeholder="Kumar"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className=""
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email">Email</label>
                            <Input
                                id="email"
                                name="email"
                                placeholder="m@example.com"
                                required
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className=""
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password">Password</label>
                            <Input
                                id="password"
                                required
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                className=""
                            />
                        </div>
                    </div>

                    <div className="pt-6 pb-6 space-y-4">
                        <div className="flex-center">
                            <Button
                                type="submit"
                                className="bg-[var(--main-color)] hover:bg-[var(--hover-color)] 
                                    text-[var(--body-color)] px-8 py-3 rounded-lg w-full">
                                Sign Up
                            </Button>
                        </div>
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
