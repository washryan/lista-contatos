import styled from "styled-components";

export const ItemContainer = styled.div`
background-color: black;
color: #fff;
padding: 20px;
border-radius: 8px;
margin-bottom: 10px;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
display: flex;
justify-content: space-between;
align-items: center;
`;

export const ContactInfo = styled.div`
flex: 1;
`;

export const ContactName = styled.h3`
margin: 0 0 10px 0;
`;

export const ContactDetail = styled.p`
margin: 5px 0;
font-size: 14px;
`;

export const ButtonGroup = styled.div`
display: flex;
gap: 10px;
`;

export const Button = styled.button`
padding: 8px 16px;
border: none;
border-radius: 4px;
cursor: pointer;
font-size: 14px;

&:first-child {
    background-color: #ffc107;
    color: #000;

    &:hover {
    background-color: #e0a800;
    }
}

&:last-child {
    background-color: #dc3545;
    color: white;

    &:hover {
    background-color: #c82333;
    }
}
`;