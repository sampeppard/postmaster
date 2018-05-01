import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as postActions from '../actions/posts'

class NewPost extends Component {
    state = {
        author: '',
        subject: '',
        category: '',
        content: '',
        error: false
    }

    componentDidMount() {
        if (this.props.post) {
            const { author, subject, category, body } = this.props.post;
            this.setState({
                author,
                subject,
                category,
                body
            });
        }
    }

    handleFormChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    validateForm = () => {
        const {
            author,
            subject,
            category,
            content
        } = this.state

        if (author === '' || subject === '' || category === '' || content === '') {
            return false
        } else {
            return true
        }
    }

    resetForm = () => {
        this.setState({
            author: '',
            subject: '',
            category: '',
            content: ''
        })
    }

    serializeForm = (event) => {
        event.preventDefault()

        const { error, ...post } = this.state

        if (this.validateForm()) {
            this.props.createPost(post)
            this.resetForm()
        } else {
            this.setState({
                error: true
            })
        }
        console.log(this.props.createPost(post))
    }

    render() {
        const {
            author,
            subject,
            content,
            category
        } = this.state

        const {
            categories
        } = this.props

        return (
            <form onSubmit={this.serializeForm}>
                <div className="form-group">
                    <label htmlFor="author" />
                    <input type="text" className="form-control" id="author" name="author" placeholder="author" value={author} onChange={this.handleFormChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="subject" />
                    <input type="text" className="form-control" id="subject" name="subject" placeholder="subject" value={subject} onChange={this.handleFormChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="content" />
                    <textarea type="text" className="form-control" id="content" name="content" placeholder="content" value={content} onChange={this.handleFormChange} />
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

NewPost.defaultProps = {
    categories: []
}

const mapStateToProps = ({ category }) => ({
    ...category
})

export default connect(mapStateToProps, postActions)(NewPost)