import styled from "styled-components";

export const Contact = styled.li`
&:not(:last-child){
    margin-bottom: 5px;
 
}
`
export const DeleteButton = styled.button`
width: 80px;
cursor: pointer;
padding: 2px;
border: 1px solid black;
border-radius: 3px;
background-color: rgb(240, 228, 228);
margin-left: 16px;

   &:hover{
        background-color: blue;
        color: white;
        border: none;
    }
`