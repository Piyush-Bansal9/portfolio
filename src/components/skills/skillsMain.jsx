import SkillsText from "./skillsText"
import { motion } from "framer-motion"
import { fadeIn } from "../../framerMotion/variant"
import AllSkills from "./allSkills"
import AllSkillsSM from "./allSkillsSM"

function SkillsMain() {
    return (
        <div id="skills">
            <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
                <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                >
                    <SkillsText/>
                </motion.div>
                <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:hidden">
                    <AllSkills/>
                </div>
                <div className="sm:block lg:block">
                    <AllSkillsSM/>
                </div>
            </div>
    </div>
    )
}

export default SkillsMain