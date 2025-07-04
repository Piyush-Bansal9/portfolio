import ContactInfo from "./contactInfo"
import ContactSocial from "./contactSocial"

function ContactRight() {
    return (
        <div className="flex flex-col items-center justify-center gap-12">
            <img
                src="/images/email-image.png"
                alt="email image"
                className="max-w-[300px]"
            />
            <ContactInfo/>
            <ContactSocial/>
        </div>
    )
}

export default ContactRight