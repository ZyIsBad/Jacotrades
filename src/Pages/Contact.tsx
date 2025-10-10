import "../App.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-16"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
        {/* LEFT SIDE — Title & Subtitle */}
        <div className="flex flex-col justify-center text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="text-gray-300 text-lg">
            If you have any questions, ideas for collaboration, or just want to connect, I would be delighted to hear from you.
          </p>
        </div>

        {/* RIGHT SIDE — Contact Form */}
        <div className="bg-gray-900 rounded-xl p-8 text-gray-900 shadow-lg space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="contactfill w-full px-4 py-3 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contactfill w-full px-4 py-3 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="contactfill w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
          <button
            type="submit"
            className="contactfill w-full py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
