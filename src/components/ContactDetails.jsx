function ContactDetails({ contact }) {
    return (
        <div className="m-10 p-10">
            LinkedIn: <span className="font-semibold text-bule-200 text-blue-400">{contact.linkedIn}</span>
            <br />
            Email: <span className="font-semibold text-blue-400">{contact.email}</span>
        </div>
    )
}
export default ContactDetails;