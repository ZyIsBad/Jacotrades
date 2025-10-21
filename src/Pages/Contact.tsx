import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
          to_email: "jacotradesdevs@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("❌ Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-16"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="text-gray-300 text-lg">
            If you have any questions, ideas for collaboration, or just want to connect, we’d be delighted to hear from you.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <form
          onSubmit={handleSubmit}
          className="bg-none rounded-xl p-8 text-gray-900 shadow-lg space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="contactfill w-full px-4 py-3 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="contactfill w-full px-4 py-3 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="contactfill w-full px-4 py-3 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="contactfill w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={isLoading}
            className={`contactfill w-full py-3 rounded-full font-semibold transition ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`text-sm font-medium mt-2 ${
                status.includes("✅")
                  ? "text-green-400"
                  : status.includes("⚠️")
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
