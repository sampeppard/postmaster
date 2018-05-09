import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchPost } from '../actions/posts'
import * as commentActions from '../actions/comments'

import Post from './Post'

class PostDetail extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId)
    }

    render() {
        const {
            post
        } = this.props

        return (
            <div className="row post-detail-row">
                <div className="col-sm-12">
                    <Post key={post.id} post={post} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ post }) => {
    let props = {}

    if (post.posts) {
        props.post = post.posts[Object.keys(post.posts)[0]]
    }

    return props
}

export default connect(mapStateToProps,
    {
        fetchPost
    }
)(PostDetail)