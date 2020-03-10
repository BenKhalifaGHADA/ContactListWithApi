import React, { Component } from 'react'
import {Button,Modal} from 'react-bootstrap'
import {connect} from 'react-redux'
import  {editContact} from '../actions/actions.js'
import './Editer.css'


class Edit extends Component {
  state={
    name:"",
    Telephone:"",
    Email:"",
    show:false
  }
   handleClose = () =>this.setState({show:false}) 
    
;
   handleShow = () => this.setState({show:true});

   handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
  }
 
  setContacts=(id)=>{
    let newContact={
      _id:this.state._id,
      name:this.state.name,
      Telephone:this.state.Telephone,
      Email:this.state.Email
    }
    this.props.editContact(id, newContact)
  }

  render() {
    
    return (
      <div className="cadre">
      <>
      <Button variant="primary" className="edit" onClick={this.handleShow}>
        Edit
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
      
          
        
        <Modal.Body className="titre"><input className="input"  placeholder="Inserer le nom" name="name" type="text" onChange={this.handleChange} value={this.state.name}/></Modal.Body>
      
        
        
        <Modal.Body className="titre"><input className="input" placeholder="Inserer le telephone" name="Telephone"type="text" onChange={this.handleChange} value={this.state.Telephone}/></Modal.Body>
      
        
        <Modal.Body className="titre"><input className="input" placeholder="Inserer l'email"  name="Email" type="text" onChange={this.handleChange}  value={this.state.Email}/></Modal.Body>

               

        <Modal.Footer>
         <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{this.setContacts(this.props.contact._id);this.handleClose()}}>
                          
          Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  );
}
  }

export default connect(null, {editContact})(Edit);

  