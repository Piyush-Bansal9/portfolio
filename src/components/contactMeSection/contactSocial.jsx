import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import SingleContactSocial from "./singleContactSocial"
import { RiTwitterXLine } from "react-icons/ri"

function ContactSocial() {
    return (
        <div className="flex gap-4">
            <SingleContactSocial Icon={FaGithub} link="https://github.com/Piyush-Bansal9"/>
            <SingleContactSocial Icon={FaLinkedinIn} link="https://www.linkedin.com/in/piyush-bansal-673833298/"/>
            <SingleContactSocial Icon={RiTwitterXLine} link="https://x.com/PiyushBans86423"/>

        </div>
    )
}

export default ContactSocial