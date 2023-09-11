import { ListItems,
         ListText,
         ListBtn } from "./ContactsListItem.styled"

export const ContactsListItem = ({contact, onDelete}) => {
return (
    <ListItems>
        <ListText>
            {contact.name} : {contact.number}
        </ListText>
        <ListBtn onClick={() => onDelete(contact.id)}>Delete</ListBtn>
    </ListItems>
)
}