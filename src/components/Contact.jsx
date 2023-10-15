import ContactDetails from "./ContactDetails";

function Contact({ contact }) {
    return (
        <div className=" font-medium text-xl flex flex-col justify-center items-center pt-10 mb-10">
            Hi, you can contact me on bellow details:👇
            <ContactDetails contact={contact} />
        </div>
    )
}
export default Contact;