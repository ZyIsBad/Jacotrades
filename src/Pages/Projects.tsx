const Projects = () => {
  return (
   <div>
    <h1 className="text-4xl font-bold text-center text-white mb-8 mt-8">Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-6 align-center">
      {/* Card 1 */}
      <div className="bg-[#120a1d] rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
        <img
          src="https://via.placeholder.com/400x200"  
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
    </div> 

  </div>
  );
};

export default Projects;