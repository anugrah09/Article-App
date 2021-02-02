import React, { Component } from 'react';
import axios from 'axios';
import {Link,Redirect }from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
import Pagination from './Pagination';
import './css/home.css'
import moment from 'moment'
class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://hn.algolia.com/api/v1/search?&tags=story')
            .then(res => {
                //   console.log(res.data.hits);
                this.setState({
                    posts: res.data.hits
                })
            })
    }
    componentDidUpdate(prevProps) {
        if (this.props.query !== prevProps.query) {
            
            let query = this.props.query;
            let sort = this.props.sort;
            console.log(this.props)
            axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&tags=story&page=1`)
                .then(res => {
                    //   console.log(res.data.hits);
                    this.setState({
                        posts: res.data.hits
                    })
                })
        }
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        const { posts } = this.state;
        const postlist = posts.length ? (
            posts.map(post => {
                return (
                    <>
                        <div className="container mt-2 background" key={post.objectID}>
                            <Link to={'/' + post.objectID} style={{ textDecoration: 'none' }}><span className="title">{post.title}</span></Link>
                            <a href={post.url} className="base"> ({post.url})</a>
                            <br></br>
                            <Link to={'/' + post.objectID} style={{ textDecoration: 'none' }}>
                                <span>
                                    <span className="base"> {post.points} points</span>
                                    <span className="story-separator"> |</span>
                                    <span className="base"> {post.author}</span>
                                    <span className="story-separator"> |</span>
                                    <span className="base"> {moment(moment(post.created_at).format("YYYYMMDD"), "YYYYMMDD").fromNow()}</span>
                                    <span className="story-separator"> |</span>
                                    <span className="base"> {post.num_comments} comments</span>
                                </span>
                            </Link>
                        </div>
                    </>
                )
            })
        ) : (
                <>
                    <div className=" d-flex justify-content-center m-5">
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </>
            )
        return (
            
                <>
                    <Navbar />
                    <Dropdown />
                    {postlist}
                    <Pagination/>
                </>
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        query: state.details.query,
        page: state.details.page,
        auth: state.firebase.auth,
        sort: state.details.sort
    }
}
export default connect(mapStateToProps)(Home);