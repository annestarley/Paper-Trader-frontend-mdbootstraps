
import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'mdbreact';


class SignUpModal extends React.Component {
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
        <a onClick={this.toggle} className="modal-title" id="modal-title" style={{color: 'grey lighten-5'}}>sign up</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>

            <h2 className="mb-5">Form register</h2>
            <form>
                <p className="h5 text-center mb-4">Sign up</p>
                <Input label="Your name" icon="user" group type="email" validate error="wrong" success="right"/>
                <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input label="Your password" icon="lock" group type="password" validate/>
                <div className="text-center">
                    <Button color="deep-orange">Sign up</Button>
                </div>
            </form>

          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default SignUpModal;
