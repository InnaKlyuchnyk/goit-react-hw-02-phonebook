import styled from "styled-components";

export const FormContact = styled.form`
display: flex;
flex-direction: column;
width: 400px;
height: auto;
padding: 10px;
border: 1px solid black;
margin-bottom: 16px;
`
export const FormLabel = styled.label`
margin-bottom: 12px;


`
export const FormInput = styled.input`display: block;
padding: 5px;
border: 1px solid black;
border-radius: 3px;

   &:hover, :focus{
border: 2px solid blue;
    }
`
export const SubmitButton = styled.button`
width: 120px;
cursor: pointer;
padding: 5px;
border: 1px solid black;
border-radius: 3px;

background-color: rgb(240, 228, 228);
   &:hover{
        background-color: blue;
        color: white;
        border: none;
    }
`