import ContactForm from "./contactFrom"
import ContactText from "./contactText"

function ContactLeft() {
    return (
        <div className="flex flex-col gap-8 ">
            <ContactText/>
            <ContactForm/>
        </div>
    )
}

export default ContactLeft