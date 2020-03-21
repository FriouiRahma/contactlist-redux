
   import {ADD_CONTACT} from '../action/type';


const initialState=[
{
    nom:"adam",
    telephone:22222
},
{
    nom:"adam",
    telephone:555555
},
{
    nom:"adam",
    telephone:1111111
}


]

const contactReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_CONTACT :
            return state.concat(action.payload)
           
    
        default:return state;
           
    }




}


export default contactReducer;