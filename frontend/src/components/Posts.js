import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/posts'
import { fetchPostsByCategory } from '../actions/categories'

import NewPost from './NewPost'
import Post from './Post'

class Posts extends Component {
    componentDidMount() {
        if (this.props.match.params.category) {
            this.props.fetchPostsByCategory()
        } else {
            this.props.fetchPosts()
        }
    }

    render() {
        const { 
            posts
        } = this.props

        const {
            category
        } = this.props.match.params

        const categorizedPosts = posts.filter((post) => post.category === category)

        return (
            <React.Fragment>
                <div className="row">
                        <div className="col-sm-12">
                            {!category && <NewPost/>}
                        </div>
                </div>
                <div className="row">
                        <div className="col-sm-12">
                            {!category
                                ? posts.map(post => <Post key={post.id} post={post} />)
                                : categorizedPosts.map(post => <Post key={post.id} post={post} />)
                            }
                        </div>
                </div>
            </React.Fragment>
        )
    }
}

Posts.propTypes = {
    match: PropTypes.object,
    fetchPosts: PropTypes.func,
    fetchPostsByCategory: PropTypes.func,
    posts: PropTypes.array
}

const mapStateToProps = ({ post }) => {
    if (post.posts) {
        let posts = Object.keys(post.posts)
            .map(postId => post.posts[postId])
            .filter(post => post)

        return {
            posts
        }
    } else {
        return {
            posts: []
        }
    }
}

export default connect(mapStateToProps, 
    {
        fetchPosts,
        fetchPostsByCategory
    }
)(Posts);