import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import {v4 as uuidv4} from 'uuid';

class AddMovie extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      filmName:'',
      imgUrl:'',
      rating:1,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };
  hadleChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value,
    })
  };
  render() {
    return (
      <div>
        <Button
          className="add-movie-btn btn-secondary"
          bsStyle="secondary"
          bsSize="large"
          onClick={this.handleShow}
        >
          <h1>+</h1> <br />
          <h2>ADD a Movie</h2>
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              className="input-group mb-2"
              type="text"
              placeholder="Enter New Movie Name"
              onChange={this.hadleChange}
              name='newmovieName'
            />
            <input
              className="input-group mb-2"
              type="text"
              placeholder="Enter Movie Url"
              onChange={this.hadleChange}
              name="newmovieUrl"
              
            />
            <input
              className="input-group mb-2"
              type="number"
              min="1"
              max="5"
              placeholder="Select Rating"
              onChange={this.hadleChange}
              name="newmovieRating"
              
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>this.props.add({...this.state,id:uuidv4()})} >ADD</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddMovie;
