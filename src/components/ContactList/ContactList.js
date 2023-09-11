import { ContactsListItem } from "components/ContactListItms/ContactsListItem"
import { ContactListStyle } from "./ContactList.styled"

export const ContactList = ({contacts, onDelete}) => {
    return (
        <ContactListStyle>
            {contacts.map(contact => (
                <ContactsListItem
                    key={contact.id}
                    contact={contact}
                    onDelete={onDelete}
                />      
            ))}
        </ContactListStyle>
    )
}