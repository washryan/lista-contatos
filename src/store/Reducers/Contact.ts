import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Contact {
id: number;
name: string;
email: string;
tel: string;
}

export interface ContactsState {
items: Contact[];
editingContact: Contact | null;
}

const initialState: ContactsState = {
items: [],
editingContact: null
};

const contactsSlice = createSlice({
name: 'contacts',
initialState,
reducers: {
    add: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
    const newContact: Contact = {
        id: Date.now(),
        ...action.payload
};
state.items.push(newContact);
    },
    remove: (state, action: PayloadAction<number>) => {
    state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    update: (state, action: PayloadAction<Contact>) => {
    const index = state.items.findIndex(contact => contact.id === action.payload.id);
    if (index !== -1) {
        state.items[index] = action.payload;
    }
    },
    editing: (state, action: PayloadAction<Contact | null>) => {
    state.editingContact = action.payload;
    },
    clear: (state) => {
    state.editingContact = null;
    }
}
});

export const { add, remove, update, editing, clear } = contactsSlice.actions;
export default contactsSlice.reducer;