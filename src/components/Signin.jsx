import react, { Component } from 'react';
import { connect } from "react-redux";
import { signIn } from '../store/actions/authactions';
import { Redirect,Link } from 'react-router-dom'
import './css/signup.css'

class Signin extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.props);
        this.props.signIn(this.state);
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        //    console.log(this.props)
        return (
            <>                
                <div className="container">

                <form onSubmit={this.handleSubmit}>
                    <div class="row ">
                        <div class="col-25">
                            <label for="email">Email</label>
                        </div>
                        <div class="col-75">
                            <input type="email" id="email" name="firstname" placeholder="Your email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="password">Password</label>
                        </div>
                        <div class="col-75">
                            <input type="password" id="password" name="lastname" placeholder="Your password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="row mt-2 ">
                        <input type="submit" value="Login" />
                    </div>
                    <div className="newuser">
                        <Link to="/signup">
                            New User
                            </Link>
                        </div>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </form>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Signin);
// export default SignIn;