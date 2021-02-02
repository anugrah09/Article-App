import React, { Component } from 'react';
import axios from 'axios';
import Parser from 'html-react-parser';
import DetailNavbar from './DetailNavbar'
import './css/details.css'
class Details extends Component {
    state = {
        id: null,
        posts: []
    }
    componentDidMount() {
        let id = this.props.match.params.detail_id;
        // console.log(id)
        axios.get(`https://hn.algolia.com/api/v1/items/${id}`)
            .then(res => {
                //   console.log(res.data.children);
                this.setState({
                    posts: res.data.children
                })
            })
    }
    render() {
        const { posts } = this.state;
        const postlist = posts.length ? (
            posts.map(post => {
                return (
                    <div className='container details mt-3' key={post.id}>
                        <p id="detail">{Parser(`${post.text}`)}
                        </p>
                    </div>
                )
            })
        ) : (
                <>
                    <div className="container d-flex justify-content-center m-5">
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
                <DetailNavbar/>
                {postlist}
            </>
        )
    }
}
export default Details;