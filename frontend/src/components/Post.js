import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as postActions from '../actions/posts'

class Post extends Component {
    state ={
        edit: false,
        delete: false
    }

    editModal = () => {
        this.setState({
            edit: !this.state.edit
        });
    }

    deleteModal = () => {
        this.setState({
            delete: !this.state.delete
        })
    }

    deletePost = () => {
        this.props.deletePost(this.props.post.id)
        if (this.props.onDelete) {
            this.props.onDelete();
        }
    }


    render() {
        const {
            post
        } = this.props

        return (
            <p>hello</p>
        )
    }
}

export default connect(null, postActions)(Post)