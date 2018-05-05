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
            <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <Link to={`/category/${post.category}/${post.id}`}>
                        <h5 className="card-title">{post.title}</h5>
                    </Link>
                    <h6 class="card-subtitle mb-2 text-muted">posted by: {post.author}</h6>
                    <p className="card-text">{post.body}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <br/>
            </React.Fragment>
        )
    }
}

export default connect(null, postActions)(Post)