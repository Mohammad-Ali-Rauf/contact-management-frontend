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
                relationship: "personal",
            },
            {
                id: 2,
                name: "Hadi",
                email: "hadi@gmail.com",
                phone: "222-222-2222",
                relationship: "personal",
            },
            {
                id: 3,
                name: "Atif",
                email: "atif@gmail.com",
                phone: "333-333-3333",
                relationship: "professional",
            },
        ],
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };
    // Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }
    // Update Contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }
    // Set Current Contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }
    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }
    // Filter Contacts
    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text })
    }
    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }

    return (
        <contactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
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
