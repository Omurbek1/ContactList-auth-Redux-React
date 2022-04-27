import { Contact } from "../../store/contactSlice";
import ContactsListAdd from "./ContactsListAdd";
import ContactsListElement from "./ContactsListElement";
import  './Contacts.css'
interface ContactsListProps {
    contacts: Contact[]
}

function ContactsList({contacts} : ContactsListProps) {
    return (
        <>
            <ul className="contact-list-element">
                {contacts.map(
                    contact =>
                        <ContactsListElement key={contact.id} contact={contact}/>
                )}
            </ul>
            <ContactsListAdd />
        </>
    )
}

export default ContactsList;