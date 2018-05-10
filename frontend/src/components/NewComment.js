import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as commentsApi from '../actions/comments'

class NewComment extends Component {
    state = {
        author: '',
        body: '',
        seeForm: false,
        error: false
    }

    componentDidMount() {
        if (this.props.comment) {
            const {
                author,
                body
            } = this.props.comment

            this.setState({
                author,
                body
            })
        }
    }

    handleFormChange = (event) => {
        const {
            name,
            value
        } = event.target;

        this.setState({
            [name]: value
        })
    }

    validateForm = () => {
        const {
            author,
            body
        } = this.state

        if (author === '' || body === '') {
            return false
        } else {
            return true
        }
    }

    resetForm = () => {
        this.setState({
            author: '',
            body: '',
            seeForm: false,
            error: false
        })
    }

    serializeForm = (event) => {
        event.preventDefault()

        const {
            error,
            ...comment
        } = this.state

        if (this.validateForm()) {
            if (this.props.edit) {
                this.props.updateComment(this.props.comment.id, comment)
                this.props.onClose()
            } else {
                comment.parentId = this.props.parentId
                this.props.createComment(comment)
                this.resetForm()
            }
            this.resetForm()
        } else {
            this.setState({
                error: true
            })
        }
    }

    formToggle = () => {
        if (this.state.seeForm) {
            this.setState({
                seeForm: false
            })
        } else {
            this.setState({
                seeForm: true
            })
        }
    }

    render() {
        const {
            author,
            body,
            seeForm,
            error
        } = this.state

        const {
            edit,
            onClose
        } = this.props

        const cancel = edit ? onClose : this.formToggle

        return (
            <React.Fragment>
                {!seeForm && !edit
                    ? <button className="btn btn-success" onClick={this.formToggle}>New Comment</button>
                    : <form onSubmit={this.serializeForm}>
                        <div className="form-group">
                            <label htmlFor="author" />
                            <input type="text" className="form-control" id="author" name="author" placeholder="author" value={author} onChange={this.handleFormChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="body" />
                            <textarea type="text" className="form-control" id="body" name="body" placeholder="body" value={body} onChange={this.handleFormChange} />
                        </div>
                        <button type="submit" className="btn btn-primary new-post-submit-button">Submit</button>
                        <button className="btn btn-danger" onClick={cancel}>Cancel</button>
                    </form>
                }
            </React.Fragment>
        )
    }
}

NewComment.propTypes = {
    parentId: PropTypes.string,
    edit: PropTypes.bool,
    updateComment: PropTypes.func,
    onClose: PropTypes.func,
    comment: PropTypes.object,
    createComment: PropTypes.func
}

export default connect(null, commentsApi)(NewComment)