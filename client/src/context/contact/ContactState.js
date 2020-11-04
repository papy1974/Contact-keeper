import React, { useReducer } from 'react';
import uuid from 'uuid';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER

} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id:1,
                name:'Jill Johson',
                email:'jill@gmail.com',
                phone:'111-111-1111',
                type:'personal'
            },

            {
                id:2,
                name:'Bob Micheal',
                email:'bob@gmail.com',
                phone:'111-111-1112',
                type:'personal'
            },

            {
                id:3,
                name:'Kelly  Johson',
                email:'kelly@gmail.com',
                phone:'111-111-1113',
                type:'personal'
            }

            
        ] 
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // ADD CONTACT
    const addContact = contact => {
        contact.uuid.v4();
        dispatch({ type:ADD_CONTACT, payload:contact});
    }
    // DELETE CONTACT
    // SET CURRENT CONTACT 
    // CLEAR CURRENT CONTACT
    //Update contact
    // filter contacts
    //clear filter

    return (
        <ContactContext.Provider
        value= {{
            contacts:state.contacts,
            addContact
            
        }}
        >
         {props.children}

         </ContactContext.Provider>
    );
};

export default ContactState
