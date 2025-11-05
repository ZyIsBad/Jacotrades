"use client";
import Image from "../assets/IMAGE.png";
import Projectone from "../assets/projectone.png";
import Projecttwo from "../assets/projecttwo.png";
import Projectthree from "../assets/projectthree.png";
import { PinContainer } from "../components/ui/3d-pin";


type Project = {
  id: number;
  title: string;
  description: string;
  img: string | { src: string };
  link: string;
};

export const projects: Project[] = [
  // { id: 1, title: "E-commerce", description: "This project is under development.", img: Image, link: "#" },
  { id: 2, title: "Portfolio Website", description: "A modern personal portfolio built with React and Tailwind.", img: Projectone, link: "#" },
  { id: 3, title: "Portfolio Website", description: "A modern personal portfolio built with React and Tailwind.", img: Projecttwo, link: "#" },
  { id: 4, title: "Portfolio Website", description: "A modern personal portfolio built with React and Tailwind.", img: Projectthree, link: "#" },
];

const Projects = () => {
  return (
    <section id="creations" className="section bg-[#030406]">
      <div className="section-header">
        <h2 className="About-h2 text-4xl font-bold text-white">CREAT<span>IONS</span></h2>
        <p className="About-p text-gray-300 text-lg">
          This is a selection of some of our recent work.
        </p>
      </div>

      <div className="project-wrapper">
        {projects.map((project) => (
          <PinContainer key={project.id} title={project.title} href={project.link}>
            <div className="project-card tracking-tight text-slate-100/50">
              <div className="flex flex-1 w-full rounded-lg overflow-hidden bg-gradient-to-br relative z-10">
                <img
                  src={typeof project.img === "string" ? project.img : project.img.src}
                  alt={project.title}
                  className="relative z-20 w-full h-full"
                />
              </div>
              <h3 className="max-w-xs font-bold text-base text-slate-100">
                {project.title}
              </h3>
              <div className="description text-sm font-normal text-slate-400">
                {project.description}
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;
