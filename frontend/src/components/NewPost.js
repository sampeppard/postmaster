import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as postActions from '../actions/posts'

class NewPost extends Component {
    state = {
        author: '',
        title: '',
        category: '',
        body: '',
        seeForm: false,
        error: false
    }

    componentDidMount() {
        if (this.props.post) {
            const {
                author,
                title,
                category,
                body 
            } = this.props.post;

            this.setState({
                author,
                title,
                category,
                body
            });
        }
    }

    handleFormChange = (event) => {
        const {
            name,
            value 
        } = event.target
        
        this.setState({
            [name]: value
        })
    }

    validateForm = () => {
        const {
            author,
            title,
            category,
            body
        } = this.state

        if (author === '' || title === '' || category === '' || body === '') {
            return false
        } else {
            return true
        }
    }

    resetForm = () => {
        this.setState({
            author: '',
            title: '',
            category: '',
            body: '',
            seeForm: false
        })
    }

    serializeForm = (event) => {
        event.preventDefault()

        const {
            error,
            ...post 
        } = this.state

        if (this.validateForm()) {
            if (this.props.edit) {
                this.props.updatePost(this.props.post.id, post)
                this.props.onClose()
            } else {
                this.props.createPost(post)
                this.resetForm()
            }
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
                seeForm: true,
                error: false
            })
        }
    }

    render() {
        const {
            author,
            title,
            body,
            category,
            seeForm,
            error
        } = this.state

        const {
            categories,
            edit,
            onClose
        } = this.props

        const cancel = edit ? onClose : this.formToggle

        return (
            <React.Fragment>
            {!seeForm && !edit
            ? <button className="btn btn-success" onClick={this.formToggle}>New Post</button>
            : <React.Fragment>
                {error &&
                    <div className="alert alert-danger not-found" role="alert">
                        Please fill out all fields.
                    </div>
                }
                <form onSubmit={this.serializeForm}>
                    <div className="form-group">
                        <label htmlFor="author" />
                        <input type="text" className="form-control" id="author" name="author" placeholder="author" value={author} onChange={this.handleFormChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" />
                        <input type="text" className="form-control" id="title" name="title" placeholder="title" value={title} onChange={this.handleFormChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body" />
                        <textarea type="text" className="form-control" id="body" name="body" placeholder="body" value={body} onChange={this.handleFormChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category" />
                        <select className="form-control" id="category" name="category" value={category} onChange={this.handleFormChange}>
                            <option value="select">category</option>
                            {categories.map(category => (
                                <option key={category.name} value={category.name}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary new-post-submit-button">Submit</button>
                    <button className="btn btn-danger" onClick={cancel}>Cancel</button>
                </form>
            </React.Fragment>
            }
            </React.Fragment>
        )
    }
}

NewPost.propTypes = {
    categories: PropTypes.array,
    edit: PropTypes.bool,
    fetchPost: PropTypes.func,
    updatePost: PropTypes.func,
    onClose: PropTypes.func,
    post: PropTypes.object,
}

NewPost.defaultProps = {
    categories: []
}

const mapStateToProps = ({ category }) => ({
    ...category
})

export default connect(mapStateToProps, postActions)(NewPost)