import { useContext } from "react";
import ContactContext from "../context/contactContext";

function ContactDetails() {
    const { linkedIn, email } = useContext(ContactContext);
    console.log(linkedIn, email);
    return (
        <div className="m-10 p-10">
            LinkedIn: <span className="font-semibold text-bule-200 text-blue-400">{linkedIn}</span>
            <br />
            Email: <span className="font-semibold text-blue-400">{email}</span>
        </div>
    )
}
export default ContactDetails;