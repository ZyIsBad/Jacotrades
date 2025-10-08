
import ChromaGrid from '../components/ChromaGrid';
import Justine from '../assets/Justine.jpg';
import Jeric from '../assets/Jeric.jpg';
import Zeus from '../assets/Zeus.jpg';

const Team = () => {
  const items = [
    {
      image: Jeric,
      title: "Jeric Javier",
      subtitle: "Fullstack Developer",
      subtitletwo: "Cloud Developer",
      handle: "@jericjavier",
      borderColor: "#6083fd",
      gradient: "linear-gradient(180deg, #6083fd, #000)",
      url: "https://linkedin.com/in/mikechen"
    },
    {
      image: Justine,
      title: "Justine Leymark",
      subtitle: "Graphic Designer",
      subtitletwo: "UI/UX Designer",
      handle: "@justineley",
      borderColor: "#6083fd",
      gradient: "linear-gradient(180deg, #6083fd, #000)",
      url: "https://github.com/sarahjohnson"
    },
    {
      image: Zeus,
      title: "Zeus Christian",
      subtitle: "Frontend Developer",
      subtitletwo: "Game Developer",
      handle: "@zos",
      borderColor: "#6083fd",
      gradient: "linear-gradient(180deg, #6083fd, #000)",
      url: "https://linkedin.com/in/mikechen"
    }
  ];

  return (
    <section id="services" className="bg-[#030406] text-white py-24">
            <div className="container mx-auto px-6 text-center align-center">
        <h2 className="About-h2 text-5xl font-extrabold mb-4">MEET THE TEAM</h2>
        <p className="About-p text-gray-300 mx-auto mb-12 align-center ">
          Our team is a group of passionate developers, designers, and thinkers who love turning challenges into solutions.
        </p>
        </div>


      <ChromaGrid 
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </section>

  );
};

export default Team;