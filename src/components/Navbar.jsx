import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from '../store/actions/detailsactions'
import signOut from '../store/actions/authactions'
import './css/navbar.css'
class Navbar extends Component {
    state = {
        search: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log('search')
        this.props.search(this.state)
        this.setState({
            [e.target.search]: ''
        })
    }
    render() {
        // console.log(this.props);
        // const {profile} = this.props
        return (
            <>
                <nav className="container navbar navbar-expand-lg color ">
                    <div className="container-fluid">
                        <Link to="/"className="navbar-brand logo" >Article</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex container" onSubmit={this.handleSubmit}>
                                <input id="search" className="form-control me-2" onChange={this.handleChange} type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn submit" type="submit">Search</button>
                            </form>
                            <a class="btn nav-link" onClick={this.props.signOut}>Logout</a>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        search: (project) => dispatch(Search(project)),
        signOut: () => dispatch(signOut())
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Navbar);