"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Youtube, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import EarthCanvas from "../canvas/Earth";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData(event.currentTarget);
            formData.append("access_key", "40f67cb2-7079-4708-93de-bc52a09935e1");

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                alert("Thank you! I will get back to you as soon as possible.");
                setForm({ name: "", email: "", message: "" });
            } else {
                throw new Error(res.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Web3Forms Error:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Contact</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8">Let&apos;s build something <br /> extraordinary together.</h3>

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-6 glass p-10 rounded-[2.5rem] border-none"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Meetva"
                                    className="w-full px-6 py-4 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="kmeetva@gmail.com"
                                    className="w-full px-6 py-4 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Your Message</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="How can I help you today?"
                                    className="w-full px-6 py-4 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all resize-none"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-5 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:opacity-90 transition-all group disabled:opacity-50"
                            >
                                <span>{loading ? "Sending..." : "Send Message"}</span>
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-[400px] md:h-[600px] lg:h-[700px] xl:h-[800px]"
                    >
                        <EarthCanvas />
                    </motion.div>
                </div>
            </div>

            <motion.div
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                className="fixed bottom-8 right-8 z-[999] cursor-grab active:cursor-grabbing"
            >
                <div className="w-16 h-16 rounded-full bg-brand-primary shadow-lg shadow-brand-primary/30 flex items-center justify-center text-white text-2xl animate-bounce">
                    <MessageSquare size={28} />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
