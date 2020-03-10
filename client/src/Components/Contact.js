
import React from 'react'
import {connect} from 'react-redux'
import  {deleteContact} from '../actions/actions.js'
import './Contact.css'
import Edit from './Editer'




 function Contact(props) {
    return (
        <div className="contact">

           <h2 className="name">{props.list.name}</h2> 
           <p className="telephone">{props.list.Telephone}</p> 
           <p className="email">{props.list.Email}</p>     
           <div className="bouton">             
           <button className="remove" onClick={()=>{props.handleDelete(props.list._id)}}> Remove</button>
           <Edit contact={props.list}/>
           </div> 
            
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return{
       handleDelete: (_id) => dispatch(deleteContact(_id)),
   }
    }
    export default connect(null, mapDispatchToProps)(Contact);

