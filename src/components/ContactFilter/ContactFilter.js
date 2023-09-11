import { FilterContainer, 
         FilterText,
         FilterInputn } from "./ContactFilter.styled"

export const ContactFilter = ({filter, onChangeFilter}) => {
return (
    <FilterContainer>
        <FilterText>Find contacts by name</FilterText>
        <FilterInputn
         type="text"
         value={filter}
         onChange={evt => onChangeFilter(evt.target.value)}
         />
    </FilterContainer>
)
}