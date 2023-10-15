import { createContext } from "react";

const ContactContext = createContext({
    linkedIn: "https://in/linkedin.com/joinsachinarya",
    email: "dummy@gmail.com"
});

export default ContactContext;