import {contactApi} from "../api/api";

const SET_CONTACTS = 'RECENTCOMMENTS::SET_CONTACTS'


const initState = {
    contacts: []
}

const ContactReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CONTACTS: {
            return {
                ...state,
                contacts: [...action.data]
            }
        }
        default: return{...state}
    }
}


const setContacts = (data) => {
    return {
        type: SET_CONTACTS,
        data
    }
}

export const getContacts = () => async (dispatch) => {
    const data = await contactApi.getContacts()
    dispatch(setContacts(data))
}

export default ContactReducer