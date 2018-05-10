import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchPost } from '../actions/posts'
import { fetchComments } from '../actions/comments'

import Post from './Post'
import Comment from './Comment'
import NewComment from './NewComment'

class PostDetail extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId)
        this.props.fetchComments(this.props.match.params.postId)
    }

    render() {
        const {
            post,
            comments
        } = this.props

        return (
            <div className="container post-detail">
                <div className="row post-detail-row">
                    <div className="col-sm-12">
                        <Post key={post.id} post={post} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <NewComment parentId={this.props.match.params.postId} />
                    </div>
                </div>
                <div className="row">
                    <h2 className="text-center">Comments</h2>
                    {comments.map((comment) => (
                        <div key={comment.id}  className="col-sm-12">
                            <Comment key={comment.id} comment={comment} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

PostDetail.propTypes = {
    post: PropTypes.object,
    fetchPost: PropTypes.func,
    fetchComments: PropTypes.func,
    match: PropTypes.object,
    comments: PropTypes.array
}

PostDetail.defaultProps = {
    comments: []
}

const mapStateToProps = ({ post, comment }) => {
    let props = {}

    if (post.posts) {
        props.post = post.posts[Object.keys(post.posts)[0]]
    }

    if (comment.comments) {
        props.comments = Object.keys(comment.comments)
            .map(commentId => comment.comments[commentId])
            .filter(comment => comment)
    }

    return props
}

export default connect(mapStateToProps,
    {
        fetchPost,
        fetchComments
    }
)(PostDetail)