import { Link } from "react-scroll"

function AboutMeText() {
    return (
        <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2 className="text-6xl text-cyan mb-10">About Me</h2>
        <p className="text-xl">
        Hi, I’m Piyush Bansal, a Student Full-Stack Developer with a passion for problem solving and building innovative projects. I enjoy working across the tech stack — from crafting responsive and engaging front-end interfaces to developing robust back-end systems.

I am always eager to learn and explore new technologies that can help me create solutions with real-world impact. Whether it’s improving user experience or optimizing application performance, I love tackling challenges and turning ideas into reality.

Currently, I’m focused on enhancing my skills in full-stack development, exploring areas like Machine Learning, web security, and algorithms.


        </p>
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
            <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
            My Projects
            </Link>
        </button>
    </div>

    )
}

export default AboutMeText