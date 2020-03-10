import React from 'react'
import AddContact from './Add'
import {Link,Redirect} from 'react-router-dom'
import './MainContact.css'


export default function MainContact() {
    return (
        <div>
      <div className="contact-app">
<Redirect to="/">
      <h1>Contact APP</h1>
      </Redirect>
      <Link to="/">
      <h1>Contact APP</h1>
      </Link>
      <div className="boutons">

      <Link to={"/ContactList"}>
      <button> Contact Liste</button>
     </Link>
     <AddContact/>
      </div>
      </div>  
        </div>
    )
}
