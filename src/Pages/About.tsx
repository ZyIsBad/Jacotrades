import Image from "../assets/team.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-24 bg-[#030406] text-white overflow-hidden  "
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* 🔹 Left Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-lg">
            <img
              src={Image} // ← replace with your image path
              alt="About Us"
              className="w-full h-full object-cover"
            />
            {/* optional overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
          </div>
        </div>

        {/* 🔹 Right Text */}
        <div className="md:pl-8">
          <h2 className=" About-h2 text-4xl font-bold mb-4">
            About <span className="text-[#6083fd]">Us</span>
          </h2>
          <p className="About-p text-gray-300 text-lg leading-relaxed mb-6">
            We turn ideas into digital solutions. Founded with a passion for innovation and problem-solving, we specialize in building reliable, scalable, and user-friendly software tailored to our clients’ needs.
          </p>
          <p className="About-p text-gray-400">
            Whether you’re a startup or an established business, we’re here to help you thrive in the digital world.
          </p>

          <div className="mt-8">
            <a
              href="#services"
              className="button inline-block p-8 rounded-full bg-[#9B5DE5] text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
