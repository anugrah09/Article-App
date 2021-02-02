import react, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { signUp } from '../store/actions/authactions';
import './css/signup.css'
class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.props);
    // console.log(this.state);
    this.props.signUp(this.state)
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div>
        <div class="container">
          <form onSubmit={this.handleSubmit}>
            <div class="row ">
              <div class="col-25">
                <label for="email">Email</label>
              </div>
              <div class="col-75">
                <input type="email" id="email" name="firstname" placeholder="Your email" onChange={this.handleChange}/>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="password">Password</label>
              </div>
              <div class="col-75">
                <input type="password" id="password" name="lastname" placeholder="Your password" onChange={this.handleChange}/>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="firstname">First Name</label>
              </div>
              <div class="col-75">
                <input type="text" id="firstname" name="firstname" placeholder="Your firstname.." onChange={this.handleChange}/>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="lastname">Last Name</label>
              </div>
              <div class="col-75">
                <input type="text" id="lastname" name="firstname" placeholder="Your lastname.." onChange={this.handleChange}/>
              </div>
            </div>
            <div class="row mt-2 ">
              <input type="submit" value="Register" />
            </div>
            <div className="center mt-3">
                {authError ? <p>{authError}</p> : null}
              </div>
          </form>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
