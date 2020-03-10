import React, { Component } from 'react'
import {Button,Modal} from 'react-bootstrap'
import {connect} from 'react-redux'
import  {addNewContact} from '../actions/actions.js'


class AddContact extends Component {
  state={
    _id:"",
    name:"",
    Telephone:"",
    Email:"",
    _id:"",
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
  render() {
   
    return (
      <div className="cadre">
      <>
      <Button variant="primary" className="add" onClick={this.handleShow}>
        Add Contact
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
      
          
        
        <Modal.Body className="titre"><input className="input"  placeholder="Inserer le nom" name="name" type="text" onChange={this.handleChange} value={this.state.name}/></Modal.Body>
      
        
        
        <Modal.Body className="titre"><input className="input" placeholder="Inserer le telephone" name="Telephone"type="text" onChange={this.handleChange} value={this.state.Telephone}/></Modal.Body>
      
        
        <Modal.Body className="titre"><input className="input" placeholder="Inserer l'email"  name="Email" type="text" onChange={this.handleChange}  value={this.state.Email}/></Modal.Body>

        
        <Modal.Footer>
         <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={()=>{this.handleClose();this.props.handleAdd(this.state)}}>
            ADD
          </Button> */}
          <Button variant="primary" onClick={()=>{this.handleClose();this.props.handleAdd({
            
            name:this.state.name,
            Telephone:this.state.Telephone,
            Email:this.state.Email
            
            })}}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  );
}
}
const mapDispatchToProps = dispatch => {
  return{
     handleAdd: (payload) => dispatch(addNewContact(payload)),
   
 }
  }
 
export default connect(null,mapDispatchToProps)(AddContact);

  