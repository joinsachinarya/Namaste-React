import { useContext } from "react";
import ContactContext from "../context/contactContext";
import UserContext from "../context/userContext";

function ContactDetails() {
    const { linkedIn, email } = useContext(ContactContext);
    const user = useContext(UserContext);
    console.log(linkedIn, email, user.email);
    return (
        <div className="m-10 p-10">
            LinkedIn: <span className="font-semibold text-bule-200 text-blue-400">{linkedIn}</span>
            <br />
            Email: <span className="font-semibold text-blue-400">{user.email}</span>
        </div>
    )
}
export default ContactDetails;