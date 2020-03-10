import { GET_ITEMS,CONTACT_ADD,CONTACT_REMOVE, CONTACT_EDIT,ITEMS_LOADING} from '../actions/actions-type.js'

const initState={
    contact:[],
    loading:false
}
 
export const reducerList=(state=initState,action)=>{
    switch(action.type){
        case GET_ITEMS:
            
            return{...state,
            contact:action.payload,
            loading:false
        };

        case CONTACT_ADD:
            
            return{...state,contact:[...state.contact,action.payload]}
            
        case CONTACT_REMOVE:
            
            return{...state,contact:state.contact.filter(el=>(el._id!==action.payload))}
                    
        case CONTACT_EDIT:
            
           return{...state,contact:[...state.contact.map(el=>el._id===action.payload.id?
                     {...el,...action.payload.newContact}
                     :el)]}
                     
         case ITEMS_LOADING:
                        
                    return{...state,
                    loading:true}

        default: return state
        }}
