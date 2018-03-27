
import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'mdbreact';


class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <a onClick={this.toggle} id="modal-title" className="modal-title">log in</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>

            <h2 id="login-modal" className="mb-5">Form login</h2>
            <form id="login-modal">
                <p className="h5 text-center mb-4">Sign in</p>
                <Input label="Your name" icon="user" group type="email" validate error="wrong" success="right"/>
                <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input label="Your password" icon="lock" group type="password" validate/>
                <div className="text-center">
                    <Button color="deep-orange">Login</Button>
                </div>
            </form>

          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
