import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variant";
import SingleProject from "./singleProject";
import ProjectsText from "./projectsText";

const projects = [
    {
        name: "TrendHive",
        year: "E-commerce Platform",
        align: "right",
        image: "/images/website-img-1.jpg",
        link: "https://github.com/Piyush-Bansal9/TrendHive",
        },
        {
        name: "Resolvr-AI",
        year: "Full Stack AI-Agent",
        align: "left",
        image: "/images/website-img-2.jpg",
        link: "https://github.com/Piyush-Bansal9/Ticket-AI-Agent",
        },
        {
        name: "TrustSphere-AI",
        year: "June2025",
        align: "right",
        image: "/images/website-img-3.jpg",
        link: "https://github.com/HitG010/TrustSphere-AI",
        },
        {
        name: "Maze Pilot",
        year: "Path Finding Visualizer",
        align: "left",
        image: "/images/website-img-4.jpg",
        link: "https://mazepilot.netlify.app/",
        },
    ];
    
    const ProjectsMain = () => {
        return (
        <div id="projects" className="max-w-[1200px] mx-auto px-4">
            <motion.div
                variants={fadeIn("top", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
            >
                <ProjectsText />
            </motion.div>
            <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
            {projects.map((project, index) => {
                return (
                <SingleProject
                    key={index}
                    name={project.name}
                    year={project.year}
                    align={project.align}
                    image={project.image}
                    link={project.link}
                />
                );
            })}
            </div>
        </div>
        );
    };
    
export default ProjectsMain;