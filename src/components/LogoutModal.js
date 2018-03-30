
import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'mdbreact';


class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: '',
      password: '',
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    window.location.reload()
  }

  render() {
    return (
      <div>
        <a onClick={this.toggle} id="modal-title" className="modal-title">log out</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>

            <h2 id="log-out" className="mb-5">Form logout</h2>
            <form id="log-out" onSubmit={(event) => {
              this.toggle()
            }}>
                <p className="h5 text-center mb-4">You are now logged out!</p>
                <div className="text-center">
                    <Button type="submit" class="btn btn-success" onClick={this.logOut}>Okay!</Button>
                </div>
            </form>

          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
