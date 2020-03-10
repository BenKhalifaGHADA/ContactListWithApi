import {GET_ITEMS, CONTACT_ADD,CONTACT_REMOVE, CONTACT_EDIT,ITEMS_LOADING} from './actions-type';
import axios from 'axios';

export const getItems=()=>dispatch=>{
    dispatch(setItemsLoading());
    axios.get('/Api/Listes').then(res=>dispatch({type:GET_ITEMS,
    payload:res.data}))
}

   

export const addNewContact=(newContact)=>dispatch=>{
    axios.post('/Api/Listes',newContact)
    
    .then(res=>dispatch(
       
    getItems() 
    ))
}

export const deleteContact=(_id)=> dispatch=>{
    axios.delete(`/Api/Listes/${_id}`)
    
    .then(res=>dispatch(
      getItems()  
   ))
}

export const editContact=(id, newContact)=>dispatch=>{
    axios.put(`/Api/Listes/${id}`,newContact)
    
    .then(res=>dispatch(
     getItems()))
    }
        
    

export const setItemsLoading=()=>(
    { type:ITEMS_LOADING

    }
)