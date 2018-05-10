import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

import { deleteComment, voteComment } from '../actions/comments'
import NewComment from './NewComment';

class Comment extends Component {
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

    deleteComment = () => {
        this.props.deleteComment(this.props.comment.id)
    }

    voteOnComment = (voteChoice) => {
        this.props.voteComment(this.props.comment.id, voteChoice);
    }

    render() {
        const { 
            comment 
        } = this.props

        const timestampDate = new Date(comment.timestamp)
        const formatted = moment(timestampDate).format("LLLL")

        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        {!this.state.delete && !this.state.edit
                            ? <React.Fragment>
                                <p className="card-text">{comment.body}</p>
                                <br />
                                <h6 className="card-subtitle mb-2 text-muted">posted by: {comment.author}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">{formatted}</h6>
                                <div className="btn-group-wrapper">
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-sm btn-danger" onClick={() => this.voteOnComment('downVote')}>-</button>
                                        <button type="button" className="btn btn-sm btn-success" onClick={() => this.voteOnComment('upVote')}>+</button>
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
                                        <NewComment edit comment={comment} onClose={this.confirmEdit} onDelete={this.deleteComment} />
                                    </React.Fragment>
                                    : <React.Fragment>
                                        <h5>Are you sure you want to delete this comment?</h5>
                                        <div className="btn-group" role="group">
                                            <button type="button" className="btn btn-sm btn-warning" onClick={this.confirmDelete}>cancel</button>
                                            <button type="button" className="btn btn-sm btn-danger" onClick={this.deleteComment}>delete</button>
                                        </div>
                                    </React.Fragment>
                                }
                            </React.Fragment>
                        }
                    </div>
                    <div className="card-footer text-muted">
                        rating: {comment.voteScore}
                    </div>
                </div>
                <br/>
            </React.Fragment>
        )
    }

}

Comment.propTypes = {
    comment: PropTypes.object
}

export default connect(null,
    {
        deleteComment,
        voteComment
    }
)(Comment)