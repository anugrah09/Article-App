import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import signOut from '../store/actions/authactions'
import './css/navbar.css'
class DetailNavbar extends Component {
    state = {
        search: ''
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        // console.log(this.props);
        const {profile} = this.props
        return (
            <>
                <nav className="container navbar navbar-expand-lg color ">
                    <div className="container-fluid detail-navbar">
                        <Link to="/"className="navbar-brand logo" >Article</Link>
                        <a class="btn nav-link logout" onClick={this.props.signOut}>Logout</a>
                    </div>
                </nav>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(DetailNavbar);