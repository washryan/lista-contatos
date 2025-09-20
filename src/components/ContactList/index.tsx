
import { useSelector } from 'react-redux';

import ContactItem from '../ContactItem';
import { RootState } from '../../store';

import * as S from './styles';


const ContactList = () => {
const { items } = useSelector((state: RootState) => state.contacts);

if (items.length === 0) {
    return (
    <S.ListContainer>
        <S.EmptyMessage>Nenhum contato cadastrado. Adicione algum contato!</S.EmptyMessage>
    </S.ListContainer>
    );
}

return (
    <S.ListContainer>
    {items.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
    ))}
    </S.ListContainer>
);
};

export default ContactList;