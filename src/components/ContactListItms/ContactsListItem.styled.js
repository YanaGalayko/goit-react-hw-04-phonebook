import styled from 'styled-components';

export const ListItems = styled.li`
  display: flex;
  gap: 20px;
`;

export const ListText = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const ListBtn = styled.button`
   background: #ADD8E6;
   border-radius: 8px;
   border: 2px solid black;
   font-size: 14px;
   font-weight: 400;
   padding: 5px 5px;

   &:hover {
    background: #87CEEB;
   }

   &:focus {
    background: #87CEEB;
   }
   `;
