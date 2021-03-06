
import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'mdbreact';


class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: '',
      email: '',
      password: '',
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  updateUsername = (e) => {
    let username = e.target.value
    this.setState ({
      username: username
    })
  }

  updateEmail = (e) => {
    let email = e.target.value
    this.setState ({
      email: email
    })
  }

  updatePassword = (e) => {
    let password = e.target.value
    this.setState ({
      password: password
    })
  }

  render() {
    return (
      <div>
        <a onClick={this.toggle} className="modal-title" id="modal-title" style={{color: 'grey lighten-5'}}>sign up</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>

            <h2 id="login-modal" className="mb-5">Form register</h2>
            <form id="login-modal" onSubmit={(event) => {
              this.props.signUpUser(event, this.state.username, this.state.email, this.state.password)
              this.toggle()
            }}>
                <p className="h5 text-center mb-4">Sign up</p>
                <Input label="Username" icon="user" group type="text" validate error="wrong" success="right" required onChange={this.updateUsername}/>
                <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" required onChange={this.updateEmail}/>
                <Input label="Your password" icon="lock" group type="password" validate required onChange={this.updatePassword}/>
                <div className="text-center">
                    <Button type="submit" color="deep-orange">Sign up</Button>
                </div>
            </form>

          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default SignUpModal;
