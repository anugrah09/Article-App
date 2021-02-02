import React, { Component } from 'react';
import axios from 'axios';
import Parser from 'html-react-parser';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,Redirect
} from 'react-router-dom';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
import Pagination from './Pagination';
import './css/home.css'
import moment from 'moment'
class Page extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        let page = this.props.match.params.pageid;
        // console.log(this.props)
        axios.get(`https://hn.algolia.com/api/v1/search?query=${this.props.query}&tags=story&page=${page}`)
            .then(res => {
                //   console.log(res.data.children);
                this.setState({
                    posts: res.data.hits
                })
            })
    }
    componentDidUpdate(prevProps) {
        let page = this.props.match.params.pageid;
        if (page != prevProps.match.params.pageid) {
            axios.get(`https://hn.algolia.com/api/v1/search?query=${this.props.query}&tags=story&page=${page}`)
                .then(res => {
                    //   console.log(res.data.children);
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
                // if(post.children)
                // const child = post.children;
                // console.log(child[0])


                return (
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
                )
            })
        ) : (
                <>
                    <div className="d-flex justify-content-center m-5">
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
                    <Pagination />

                </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        query: state.details.query
    }
}
export default connect(mapStateToProps)(Page);