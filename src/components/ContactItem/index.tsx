import React from 'react';
import { useDispatch } from 'react-redux';

import { remove, editing } from '../../store/Reducers/Contact';
import { Contact } from '../../services/api';

import * as S from './styles'

type ContactItemProps = {
contact: Contact;
}

const ContactItem: React.FC <ContactItemProps> = ({ contact }) => {
const dispatch = useDispatch();

const handleEdit = () => {
    dispatch(editing(contact));
};

const handleDelete = () => {
    if (window.confirm(`Tem certeza que deseja excluir "${contact.name}" da sua lista de contados?`)) {
    dispatch(remove(contact.id));
    }
};

return (
    <S.ItemContainer>
    <S.ContactInfo>
        <S.ContactName>{contact.name}</S.ContactName>
        <S.ContactDetail>Email: {contact.email}</S.ContactDetail>
        <S.ContactDetail>Contato(Telefone): {contact.tel}</S.ContactDetail>
    </S.ContactInfo>
    <S.ButtonGroup>
        <S.Button onClick={handleEdit}>Editar</S.Button>
        <S.Button onClick={handleDelete}>Excluir</S.Button>
    </S.ButtonGroup>
    </S.ItemContainer>
);
};

export default ContactItem