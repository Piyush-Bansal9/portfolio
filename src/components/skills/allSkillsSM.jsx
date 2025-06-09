import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiC, SiCplusplus, SiExpress, SiFigma, SiGit, SiGithub, SiMongodb, SiMysql, SiPostman, SiPrisma, SiShadcnui, SiTypescript, SiVercel } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variant";
import { icons } from "lucide-react";

const skills = [
    {
        skill: "HTML",
        icon: FaHtml5,
    },
    {
        skill: "CSS",
        icon: FaCss3Alt,
    },
    {
        skill: "JavaScript",
        icon: IoLogoJavascript,
    },
    {
        skill: "TypeScript",
        icon: SiTypescript,
    },
    {
        skill: "ReactJS",
        icon: FaReact,
    },
    {
        skill: "Redux",
        icon: SiRedux,
    },
    {
        skill: "NextJS",
        icon: SiNextdotjs,
    },
    {
        skill: "TailwindCSS",
        icon: RiTailwindCssFill,
    },
    {
        skill: "Postman",
        icon: SiPostman
    },
    {
        skill: "MongoDB",
        icon: SiMongodb
    },
    {
        skill: "MySQL",
        icon: SiMysql
    },
    {
        skill: "ShadcnUI",
        icon: SiShadcnui
    },
    {
        skill: "Github",
        icon: SiGithub
    },
    {
        skill: "Prisma",
        icon: SiPrisma
    },
    {
        skill: "Express",
        icon: SiExpress
    },
    {
        skill: "Git",
        icon: SiGit
    },
    {
        skill: "Vercel",
        icon: SiVercel
    },
    {
        skill: "Figma",
        icon: SiFigma
    },
    {
        skill: "C",
        icon: SiC
    },
    {
        skill: "C++",
        icon: SiCplusplus
    }
    ];

    const AllSkillsSM = () => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-12 my-12">
        {skills.map((item, index) => {
            return (
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                key={index}
                className="flex flex-col items-center"
            >
                <item.icon className="text-7xl text-orange" />
                <p className="text-center mt-4">{item.skill}</p>
            </motion.div>
            );
        })}
        </div>
    );
};

export default AllSkillsSM;