import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import timeago from 'timeago.js';

import { fetchPosts, sortPostsAction } from '../actions/posts'
import { fetchPostsByCategory } from '../actions/categories'

import NewPost from './NewPost'
import Post from './Post'

class Posts extends Component {
    componentDidMount() {
        if (this.props.match.params.category) {
            this.props.fetchPostsByCategory()
        } else {
            this.props.fetchPosts()
        }
    }

    sortPosts = (event, sort) => {
        this.props.sortPostsAction({
            sortChoice: event.target.value
        });
    };

    render() {
        const { 
            posts
        } = this.props

        const {
            category
        } = this.props.match.params

        const categorizedPosts = posts.filter((post) => post.category === category)

        return (
            <React.Fragment>
                <div className="row">
                        <div className="col-sm-12">
                            <NewPost/>
                        </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <select className="custom-select" name="sort" onChange={this.sortPosts}>
                            <option value="">Sort Posts By</option>
                            <option value="-voteScore">Highest Score</option>
                            <option value="voteScore">Lowest Score</option>
                            <option value="-timestamp">Newest</option>
                            <option value="+timestamp">Oldest</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                        <div className="col-sm-12">
                            {!category
                                ? posts.map(post => <Post key={post.id} post={post} />)
                                : categorizedPosts.map(post => <Post key={post.id} post={post} />)
                            }
                        </div>
                </div>
            </React.Fragment>
        )
    }
}


Posts.propTypes = {
    match: PropTypes.object,
    fetchPosts: PropTypes.func,
    fetchPostsByCategory: PropTypes.func,
    posts: PropTypes.array
}

const mapStateToProps = ({ post }) => {
    if (post.posts) {
        let posts = Object.keys(post.posts)
            .map(postId => post.posts[postId])
            .filter(post => post)

        const sorter = (key) => {
            let sortOrder = 1
            if (key[0] === '-') {
                sortOrder = -1
                key = key.substr(1)
            }

            return function (a, b) {
                return sortOrder * (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0)
            }
        }

        if (post.sort) {
            posts.sort(sorter(post.sort.sortChoice));
        }

        return {
            posts
        }
    } else {
        return {
            posts: []
        }
    }
}

export default connect(mapStateToProps, 
    {
        fetchPosts,
        fetchPostsByCategory,
        sortPostsAction
    }
)(Posts);