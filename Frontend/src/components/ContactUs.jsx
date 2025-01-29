import { useState } from "react";
import { Mail, User, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log("Form submitted:", formData);
    };

    return (
        <div
            className="max-w-[1160px] m-auto bg-[var(--container-color)] 
        rounded-2xl shadow-lg p-8 md:p-12 w-full">
            <div className="text-center mb-10">
                <h1
                    className="text-3xl md:text-4xl font-bold 
            text-[var(--main-color)] mb-4">
                    Contact Us
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Have a question or want to work together? Fill out the form
                    below, and we&apos;ll get back to you as soon as possible.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label
                            htmlFor="name"
                            className="signup-label flex items-center gap-2">
                            <User className="w-5 h-5 text-[var(--main-color)]" />
                            Full Name
                        </label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className=""
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="phone"
                            className="signup-label flex items-center gap-2">
                            <Phone className="w-5 h-5 text-[var(--main-color)]" />
                            Phone Number
                        </label>
                        <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className=""
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="signup-label flex items-center gap-2">
                        <Mail className="w-5 h-5 text-[var(--main-color)]" />
                        Email Address
                    </label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className=""
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="message"
                        className="signup-label flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-[var(--main-color)]" />
                        Your Message
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        className="w-full min-h-[150px] "
                        required
                    />
                </div>

                <div className="flex-center">
                    <Button
                        type="submit"
                        className="bg-[var(--main-color)] hover:bg-[var(--hover-color)] 
                            text-[var(--body-color)] px-8 py-3 rounded-lg 
                            transition-all duration-300 ease-in-out 
                            hover:scale-105 active:scale-95">
                        Send Message
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;
