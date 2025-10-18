"use client";
import Image from "../assets/IMAGE.png";
import { PinContainer } from "../components/ui/3d-pin";

type Project = {
  id: number;
  title: string;
  description: string;
  img: string | { src: string };
  link: string;
};

export const projects: Project[] = [
  { id: 1, title: "E-commerce", description: "This project is under development.", img: Image, link: "#" },
  { id: 2, title: "Portfolio Website", description: "A modern personal portfolio built with React and Tailwind.", img: Image, link: "#" },
  { id: 3, title: "Portfolio Website", description: "A modern personal portfolio built with React and Tailwind.", img: Image, link: "#" },
  { id: 4, title: "Portfolio Website", description: "A modern personal portfolio built with React and Tailwind.", img: Image, link: "#" },
];

const Projects = () => {
  return (
    <section className="section bg-[#030406]">
      <div className="section-header">
        <h2 className="About-h2 text-4xl font-bold text-white">PROJECTS</h2>
        <p className="About-p text-gray-300 text-lg">
          Project showcase, case studies, client work, and achievements gallery.
        </p>
      </div>

      <div className="project-wrapper">
        {projects.map((project) => (
          <PinContainer key={project.id} title={project.title} href={project.link}>
            <div className="project-card tracking-tight text-slate-100/50">
              <h3 className="max-w-xs font-bold text-base text-slate-100">
                {project.title}
              </h3>
              <div className="description text-sm font-normal text-slate-400">
                {project.description}
              </div>
              <div className="flex flex-1 w-full rounded-lg overflow-hidden bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                <img
                  src={typeof project.img === "string" ? project.img : project.img.src}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;
