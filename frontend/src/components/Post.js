import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'

import * as postActions from '../actions/posts'
import NewPost from './NewPost'

class Post extends Component {
    state ={
        edit: false,
        delete: false
    }

    confirmEdit = () => {
        if (this.state.edit) {
            this.setState({
                edit: false
            })
        } else {
            this.setState({
                edit: true
            })
        }
    }

    confirmDelete = () => {
        if (this.state.delete) {
            this.setState({
                delete: false
            })
        } else {
            this.setState({
                delete: true
            })
        }
    }

    deletePost = () => {
        this.props.deletePost(this.props.post.id)
        if (this.props.onDelete) {
            this.props.onDelete();
        }
    }

    voteOnPost = (voteChoice) => {
        this.props.votePost(this.props.post.id, voteChoice);
        console.log(voteChoice)
    }

    render() {

        const {
            post
        } = this.props

        const timestampDate = new Date(post.timestamp)
        const formatted = moment(timestampDate).format("LLLL")

        return (
            <React.Fragment>
            <div className="card">
                <div className="card-body">
                    {!this.state.delete && !this.state.edit
                        ? <React.Fragment>
                            <Link to={`/category/${post.category}/${post.id}`}>
                                <h5 className="card-title">{post.title}</h5>
                            </Link>
                            <h6 className="card-subtitle mb-2 text-muted">posted by: {post.author}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">{formatted}</h6>
                            <p className="card-text">{post.body}</p>
                            <p></p>
                            <div className="btn-group-wrapper">
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-sm btn-danger" onClick={() => this.voteOnPost('downVote')}>-</button>
                                    <button type="button" className="btn btn-sm btn-success" onClick={() => this.voteOnPost('upVote')}>+</button>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-sm btn-info" onClick={this.confirmEdit}>edit</button>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={this.confirmDelete}>delete</button>
                                </div>
                            </div>
                        </React.Fragment>
                        : <React.Fragment>
                            {this.state.edit
                                ? <React.Fragment>
                                    <NewPost edit post={this.props.post} onClose={this.confirmEdit} editPost={true} />
                                </React.Fragment>
                                : <React.Fragment>
                                    <h5>Are you sure you want to delete this post?</h5>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-sm btn-warning" onClick={this.confirmDelete}>cancel</button>
                                        <button type="button" className="btn btn-sm btn-danger" onClick={this.deletePost}>delete</button>
                                    </div>
                                </React.Fragment>
                            }
                        </React.Fragment>
                    }
                </div>
                <div class="card-footer text-muted">
                    category: {post.category} | rating: {post.voteScore}
                </div>
            </div>
            <br/>
            </React.Fragment>
        )
    }
}

export default connect(null, postActions)(Post)