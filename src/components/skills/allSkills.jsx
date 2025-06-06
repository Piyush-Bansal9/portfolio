import { SiHtml5, SiMongodb, SiMysql } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import SingleSkill from "./singleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variant";

const skills = [
    {
        skill: "HTML",
        icon: <SiHtml5/>
    },
    {
        skill: "CSS",
        icon: <SiCss3/>
    },
    {
        skill: "C++",
        icon: <SiCplusplus/>
    },
    {
        skill: "React",
        icon: <SiReact/>
    },
    {
        skill: "JavaScript",
        icon: <SiJavascript/>
    },
    {
        skill: "TypeScript",
        icon: <SiTypescript/>
    },
    {
        skill: "MongoDB",
        icon: <SiMongodb />
    },
    {
        skill: "MySQL",
        icon: <SiMysql />
    },
    {
        skill: "Redux",
        icon: <SiRedux/>,
    },
    {
        skill: "NextJS",
        icon: <SiNextdotjs/>,
    },
]

function AllSkills() {
    return (
        <div className="flex flex-wrap justify-center items-center relative max-w-[1200px] mx-auto gap-2">
            {
                skills.map((item, index) => (
                    <motion.div
                        variants={fadeIn("up", `0.${index}`)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0 }}
                        key={index}
                        >
                        <SingleSkill
                            key={index}
                            text={item.skill}
                            imgSvg={item.icon}
                        />
                    </motion.div>
                ))
            }
        </div>
    )
}

export default AllSkills