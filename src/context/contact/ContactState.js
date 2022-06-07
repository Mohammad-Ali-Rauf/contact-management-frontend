import React, { useReducer } from "react";
import { v4 as uuid } from 'uuid';
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Ali",
                email: "ali@gmail.com",
                phone: "111-111-1111",
                relationship: "Personal",
            },
            {
                id: 2,
                name: "Hadi",
                email: "hadi@gmail.com",
                phone: "222-222-2222",
                relationship: "Professional",
            },
            {
                id: 3,
                name: "Atif",
                email: "atif@gmail.com",
                phone: "333-333-3333",
                relationship: "Professional",
            },
        ],
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };
    // Delete Contact
    const deleteContact = () => {};
    // Update Contact
    const updateContact = () => {};
    // Set Current Contact
    const setCurrent = () => {};
    // Clear Current Contact
    const clearCurrent = () => {};
    // Filter Contacts
    const filterContacts = () => {};
    // Clear Filter
    const clearFilter = () => {};

    return (
        <contactContext.Provider
            value={{
                contacts: state.contacts,
                addContact,
                deleteContact,
                updateContact,
                setCurrent,
                clearCurrent,
                filterContacts,
                clearFilter,
            }}>
            {props.children}
        </contactContext.Provider>
    );
};

export default ContactState;
