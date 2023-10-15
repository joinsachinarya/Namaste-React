import { useContext } from "react";
import UserContext from "../context/UserContext";
import ContactContext from "../context/ContactContext";

function ContactDetails() {

    const { linkedIn } = useContext(ContactContext);
    const { user } = useContext(UserContext);
    console.log(linkedIn, user.email);

    return (
        <div className="m-10 p-10">
            LinkedIn: <span className="font-semibold text-bule-200 text-blue-400">{linkedIn}</span>
            <br />
            Email: <span className="font-semibold text-blue-400">{user.email}</span>
        </div>
    )
}
export default ContactDetails;