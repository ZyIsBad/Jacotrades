import image from "../assets/IMAGE.png";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="section py-20 bg-[#030406] text-white text-center"
    >
      <div className="mb-10 items-center text-center">
        <h2 className="About-h2 text-4xl font-bold mb-4">PORTFOLIO</h2>
        <p className="About-p text-gray-300 text-lg mx-auto text-center">
          Project showcase, case studies, client work, and achievements gallery.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-6 align-center">
        {/* Card 1 */}
        <div className="bg-[#120a1d] rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <img
            src={image}  
            alt="Project 1"
            className="rounded-xl mb-4 w-full object-cover"
          />
          <h2 className="text-xl font-semibold mb-2">E-commerce</h2>
          <p className="text-gray-400 mb-4">
            this project is under development.
          </p>
          <button className="px-4 py-2 bg-[#6083fd] hover:bg-[#4a6ce6] rounded-lg text-white font-medium">
            View Project
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#120a1d] rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 ">
          <img
            src={image}
            alt="Project 2"
            className="rounded-xl mb-4 w-full  object-cover"
          />
          <h2 className="text-xl font-semibold mb-2">CMS</h2>
          <p className="text-gray-400 mb-4">
            this project is under development.
          </p>
          <button className="px-4 py-2 bg-[#6083fd] hover:bg-[#4a6ce6] rounded-lg text-white font-medium">
            View Project
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-[#120a1d] rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <img
            src={image}
            alt="Project 3"
            className="rounded-xl mb-4 w-full object-cover"
          />
          <h2 className="text-xl font-semibold mb-2">Project Title 3</h2>
          <p className="text-gray-400 mb-4">
            this project is under development.
          </p>
          <button className="px-4 py-2 bg-[#6083fd] hover:bg-[#4a6ce6] rounded-lg text-white font-medium">
            View Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
