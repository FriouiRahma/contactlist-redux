import {ADD_CONTACT} from './type'

const addcontact = (newcontact) => {
    return {
        type: ADD_CONTACT,
        payload: newcontact
    }

}
export default addcontact;