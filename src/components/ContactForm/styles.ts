import styled from "styled-components";

type Props = {
    variant?: string
}

export const FormContainer = styled.div`
background: #f5f5f5;
padding: 20px;
border-radius: 8px;
margin-bottom: 20px;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 15px;
`;

export const Input = styled.input`
padding: 10px;
border: 1px solid #ddd;
border-radius: 4px;
font-size: 16px;

&:focus {
    outline: none;
    border-color: #007bff;
}
`;

export const Button = styled.button<Props>`
padding: 12px;
background-color: ${props => props.variant === 'secondary' ? '#6c757d' : '#007bff'};
color: white;
border: none;
border-radius: 4px;
cursor: pointer;
font-size: 16px;

&:hover {
    background-color: ${props => props.variant === 'secondary' ? '#5a6268' : '#0056b3'};
}

&:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
`;

export const ButtonGroup = styled.div`
display: flex;
gap: 10px;
`;


export const Title = styled.h1`
text-align: center
color: #333
margin-bottom: 30px
`