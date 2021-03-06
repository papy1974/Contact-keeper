import React, { useReducer } from 'react';
import {v4 as uuid} from "uuid";

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    
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

            
        ],

        current: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // ADD CONTACT
    
    const addContact = contact => {
        contact.id= uuid.v4;
        dispatch({ type:ADD_CONTACT, payload:contact});
    }


    // DELETE CONTACT

    const deleteContact = id => {
        
        dispatch({ type:DELETE_CONTACT, payload:id});
    }
    // SET CURRENT CONTACT 
    const setCurrent  = contact => {
        
        dispatch({ type:SET_CURRENT, payload:contact});
    }

    // CLEAR CURRENT CONTACT
    
    const clearCurrent = () => {
        
        dispatch({ type:CLEAR_CURRENT});
    }
    //Update contact

    // update CONTACT 
    const updateContact  = contact => {
        
        dispatch({ type:UPDATE_CONTACT, payload:contact});
    }
    // filter contacts
    //clear filter

    return (
        <ContactContext.Provider
        value= {{
            contacts:state.contacts,
            current:state.current,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent
            
        }}
        >
         {props.children}

         </ContactContext.Provider>
    );
};

export default ContactState
