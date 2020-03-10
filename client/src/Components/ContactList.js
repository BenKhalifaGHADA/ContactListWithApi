import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import {getItems} from '../actions/actions'
import './ContactList.css'



 class ContactList extends Component {
   
  componentDidMount(){
    this.props.getItems()
  }

  render() {
    return (
      
        <div className="contact-list">
        { this.props.contact.map(el => (
              <Contact key={el._id} list={el} />
            ))
        }
        
      </div>

    )
  }
}
const mapStateToProps = state => ({
  contact: state.contact,
  
});

export default connect(mapStateToProps,{getItems})(ContactList);


