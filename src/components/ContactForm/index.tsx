import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { add, update, clear } from '../../store/Reducers/Contact'
import { RootState } from '../../store/'

import * as S from './styles'


export interface FormData {
name: string
email: string
tel: string
}

const ContactForm = () => {
const dispatch = useDispatch()
const { editingContact } = useSelector((state: RootState) => state.contacts)

const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    tel: ''
})

useEffect(() => {
    if (editingContact) {
    setFormData(editingContact)
    }
}, [editingContact])

const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.tel) {
    alert('Por favor, preencha todos os campos')
    return
    }

    if (editingContact) {
    dispatch(update({ ...formData, id: editingContact.id }))
    dispatch(clear())
    } else {
    dispatch(add(formData))
    }

    setFormData({
    name: '',
    email: '',
    tel: ''
    })
}

const handleCancel = () => {
    dispatch(clear())
    setFormData({
    name: '',
    email: '',
    tel: ''
    })
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value
    })
}

return (
    <>
    <S.Title>Lista de contatos</S.Title>
    <S.FormContainer>
    <h2>{editingContact ? 'Editar Contato' : 'Adicionar Novo Contato'}</h2>
    <S.Form onSubmit={handleSubmit}>
        <S.Input
        type="text"
        name="name"
        placeholder="Nome Completo"
        value={formData.name}
        onChange={handleChange}
        required
        />
        <S.Input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        required
        />
        <S.Input
        type="tel"
        name="tel"
        placeholder="Contato (tel)"
        value={formData.tel}
        onChange={handleChange}
        required
        />
        <S.ButtonGroup>
        <S.Button type="submit">
            {editingContact ? 'Atualizar' : 'Adicionar'}
        </S.Button>
        {editingContact && (
            <S.Button type="button" variant="secondary" onClick={handleCancel}>
            Cancelar
            </S.Button>
        )}
        </S.ButtonGroup>
    </S.Form>
    </S.FormContainer>
    </>
)
}

export default ContactForm