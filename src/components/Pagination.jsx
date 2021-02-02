import React, { Component } from 'react';
import { NavLink, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import './css/pagination.css'

class Pagination extends Component {
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <>            
                <nav aria-label="..." className=" container d-flex justify-content-center">
                    <ul class="pagination pagination-sm">
                    <NavLink to={'/page/' + 1} activeClassName="selected default" style={{ textDecoration: 'none' }}>
                        <li class="page-item m-1 page-link page-number" >1</li>
                    </NavLink>
                    <NavLink to={'/page/' +2} activeClassName="selected" style={{ textDecoration: 'none' }}>
                        <li class="page-item m-1 page-link page-number" >2</li>
                    </NavLink>
                    <NavLink to={'/page/' +3} activeClassName="selected" style={{ textDecoration: 'none' }}>
                        <li class="page-item m-1 page-link page-number" >3</li>
                    </NavLink>
                    <NavLink to={'/page/' + 4}activeClassName="selected" style={{ textDecoration: 'none' }}>
                        <li class="page-item m-1 page-link page-number" >4</li>
                    </NavLink>
                    <NavLink to={'/page/' + 5} activeClassName="selected" style={{ textDecoration: 'none' }}>
                        <li class="page-item m-1 page-link page-number" >5</li>
                    </NavLink>
                    <NavLink to={'/page/' +6} activeClassName="selected" style={{ textDecoration: 'none' }}>
                        <li class="page-item m-1 page-link page-number" >6</li>
                    </NavLink>
                    <NavLink to={'/page/' +7} activeClassName="selected" style={{ textDecoration: 'none' }}>
                        <li class="page-item m-1 page-link page-number" >7</li>
                    </NavLink>
                    <NavLink to={'/page/' + 8} activeClassName="selected" style={{ textDecoration: 'none' }}>
                        <li class="page-item m-1 page-link page-number" >8</li>
                    </NavLink>
                    </ul>
                </nav>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}
export default connect(mapStateToProps)(Pagination);
// export default Pagination;