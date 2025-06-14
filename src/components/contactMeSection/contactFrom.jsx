import { useRef, useState } from "react"
import emailjs from "@emailjs/browser";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");

    const form = useRef();
    
    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm("service_59r0dll", "template_9xsjinf", form.current, {
                publicKey: "6miSnPaePjDs2BcFJ",
            })
            .then(
                () => {
                setEmail("");
                setName("");
                setMessage("");
                setSuccess("Message Sent Succesfully");
                },
                (error) => {
                console.log("FAILED...", error.text);
                }
            );
    }
    function handleName(e) {
        setName(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleMessage(e) {
        setMessage(e.target.value)
    }
    return (
        <div>
            <p className="text-cyan">{success}</p>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="h-12 rounded-lg bg-lightBrown px-2"
                value={name}
                onChange={handleName}
                />
                <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="h-12 rounded-lg bg-lightBrown px-2"
                value={email}
                onChange={handleEmail}
                />
                <textarea
                type="text"
                name="message"
                rows="9"
                cols="50"
                placeholder="Message"
                required
                className=" rounded-lg bg-lightBrown p-2"
                value={message}
                onChange={handleMessage}
                />
                <button
                type="submit"
                className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
                >
                Send
                </button>
            </form>
        </div>
    )
}

export default ContactForm