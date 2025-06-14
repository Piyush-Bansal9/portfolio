import SingleInfo from "./singleInfo"
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

function ContactInfo() {
    return (
        <div className="flex flex-col gap-4">
            <SingleInfo text="piyushbansal130p@gmail.com" Image={HiOutlineMail}/>
            <SingleInfo text="+91 8383090650" Image={FiPhone}/>
            <SingleInfo text="New Delhi, India" Image={IoLocationOutline}/>
        </div>
    )
}

export default ContactInfo