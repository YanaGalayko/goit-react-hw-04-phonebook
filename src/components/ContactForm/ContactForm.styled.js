import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
  max-width: 400px;
  border-radius: 10px;
  border: 2px solid black;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
  `;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  `;

export const FormInput = styled(Field)`
  background: #F0F8FF;
  border-radius: 8px;
  border: 2px solid black;
  padding: 4px 4px;
  width: 300px;
  margin-bottom: 6px;
`;

export const FormBtn = styled.button`
   background: #ADD8E6;
   border-radius: 8px;
   border: 2px solid black;
   font-size: 15px;
   font-weight: 400;
   padding: 7px 7px;

   &:hover {
    background: #87CEEB;
   }

   &:focus {
    background: #87CEEB;
   }
   `;

export const FormError = styled(ErrorMessage)`
   color: #DC143C;
   font-size: 14px;
   font-weight: 400;

`;