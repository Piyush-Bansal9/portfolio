import ContactLeft from "./contactLeft"
import ContactRight from "./contactRight"

function ContactMeMain() {
    return (
        <div
            id="contact"
            className="max-w-[1200px] mx-auto px-4 mt-[100px] items-center justify-center"
        >
            <h2 className="text-center text-6xl text-cyan mb-10">Contact Me</h2>
            <div className="bg-brown flex justify-between lg:flex-row sm:flex-col p-9 rounded-2xl gap-20">
                <ContactLeft/>
                <ContactRight/>
            </div>
        </div>
    )
}

export default ContactMeMain