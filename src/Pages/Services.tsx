import { FaCode, FaMobileAlt, FaPalette, FaServer, FaTools, FaLightbulb } from "react-icons/fa";
import SpotlightCard from "../components/SpotlightCard";

const services = [
  {
    icon: <FaCode className="text-5xl mb-4" />,
    title: "Custom Software Development",
    description:
      "We build tailored software solutions that streamline processes and enhance productivity for your business.",
  },
  {
    icon: <FaMobileAlt className="text-5xl  mb-4" />,
    title: "Web & Mobile App Development",
    description:
      "Our team creates responsive, high-performance web and mobile applications with seamless user experiences.",
  },
  {
    icon: <FaPalette className="text-5xl  mb-4" />,
    title: "UI/UX Design",
    description:
      "We design intuitive and visually stunning interfaces that align with your brand and engage your users.",
  },
  {
    icon: <FaServer className="text-5xl  mb-4" />,
    title: "API Integration & Backend Systems",
    description:
      "We develop robust backend systems and integrate APIs to ensure smooth data flow and scalability.",
  },
  {
    icon: <FaTools className="text-5xl  mb-4" />,
    title: "Maintenance & Support",
    description:
      "We provide continuous monitoring, optimization, and technical support for your digital platforms.",
  },
  {
    icon: <FaLightbulb className="text-5xl  mb-4" />,
    title: "IT Consultation & Digital Strategy",
    description:
      "We guide businesses through digital transformation with smart strategies and technology consulting.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#030406] text-white py-24">
      <div className="container mx-auto px-6 text-center align-center">
        <h2 className="About-h2 text-5xl font-extrabold mb-4">OUR <span>SERVICES</span></h2>
        <p className="About-p text-gray-300 mx-auto mb-12 align-center ">
          We offer end-to-end software development and digital solutions that
          align with your business goals.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <SpotlightCard key={index} className="p-8 flex flex-col items-center text-center"
              spotlightColor="rgba(155, 93, 229, 0.3)">
              {service.icon}
              <h3 className="About-h3 text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{service.description}</p>
              {/* <button className="px-6 py-2 rounded-full bg-gray-700 hover:bg-white hover:text-black text-white transition-all duration-300">
                More
              </button> */}
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
