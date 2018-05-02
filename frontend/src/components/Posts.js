import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/posts'
import Post from './Post'

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        const { 
            posts
        } = this.props

        return (
            <div className="row">
                    <div className="col-sm-12">
                        {posts.map(post => <Post key={post.id} post={post} />)}
                    </div>

            </div>
        )
    }
}

const mapStateToProps = ({ post }) => {
    if (post.posts) {
        let posts = Object.keys(post.posts)
            .map(postId => post.posts[postId])
            .filter(post => post)

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
    }
)(Posts);