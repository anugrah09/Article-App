import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import Sort from '../store/actions/detailsactions'
import './css/dropdown.css'
class Dropdown extends Component {
    state = {
        sort: ''
    }

    // handleClick = (e) => {
    //     this.props.sort(e)
    //     // console.log('search_by_date')
    // }
    render() {
        return (
            <>
                <div className="container d-flex">
                    <span className=" dropdown-text">Search</span>
                    <div className="option">
                        <select id="country" class="m-2"name="country">
                            <option className="option-value">All</option>
                            <option className="option-value">Stories</option>
                            <option className="option-value">Comments</option>
                        </select>
                    </div>
                    <span className=" dropdown-text">by</span>
                    <div className="option">
                        <select id="country" class="m-2"name="country">
                            <option className="option-value">Popularity</option>
                            <option className="option-value">Date</option>
                        </select>
                    </div>
                    <span className=" dropdown-text">for</span>
                    <div className="option">
                        <select id="country" class="m-2"name="country">
                            <option className="option-value">All Time</option>
                            <option className="option-value">Past 24th</option>
                            <option className="option-value">Past week</option>
                        </select>
                    </div>
                </div>
            </>
        )
    }
}
// const mapStateToProps = (state) => {
//     return {
//         search: state.details.query
//     }
// }
// const mapDispatchtoProps = (dispatch) => {
//     return {
//         sort: (project) => dispatch(Sort(project))
//     }
// }
// export default connect(null, mapDispatchtoProps)(Dropdown);
export default Dropdown;