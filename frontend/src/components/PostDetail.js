import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchPost } from '../actions/posts'
import { fetchComments } from '../actions/comments'

import Post from './Post'
import Comment from './Comment'
import NewComment from './NewComment'
import NotFound from './NotFound'

class PostDetail extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId)
        this.props.fetchComments(this.props.match.params.postId)
    }

    homeOnDelete = () => {
        this.props.history.push('/')
    }

    render() {
        const {
            post,
            comments
        } = this.props

        const deleted = JSON.stringify(post) === '{}' && !post.hasOwnProperty('error')
        const postUndefined = typeof post === 'undefined'

        return (
            <React.Fragment>
                {postUndefined && <div />}
                {!deleted && !postUndefined && <div className="container post-detail">
                    <div className="row post-detail-row">
                        <div className="col-sm-12">
                            <Post post={post} onDelete={this.homeOnDelete} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <NewComment parentId={this.props.match.params.postId} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="cal-sm-12">
                            <h2 className="display-4">Comments</h2>
                        </div>
                        {comments.map((comment) => (
                            <div key={comment.id}  className="col-sm-12">
                                <Comment key={comment.id} comment={comment} />
                            </div>
                        ))}
                    </div>
                </div>
                }
                {deleted && <NotFound />}
            </React.Fragment>
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
        fetchPost: fetchPost,
        fetchComments: fetchComments
    }
)(PostDetail)