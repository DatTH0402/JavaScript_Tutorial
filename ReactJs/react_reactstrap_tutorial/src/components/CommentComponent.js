import React, {Component} from "react";
import { Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: 5,
            name: "",
            comment:"",
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSumbmit(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render() {
        return (
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    aaa
                </ModalBody>
            </Modal>
        )
    }
}

export default Comment;