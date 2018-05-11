import React, { Component } from 'react'
import {  Switch, Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts'
import PostDetail from '../components/PostDetail'

import { fetchCategories } from '../actions/categories'
import { fetchPosts } from '../actions/posts'

class App extends Component {
    componentDidMount() {
        this.props.loadCategories()
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/" component={Sidebar} />
                        <Route exact path="/category/:category" component={Sidebar} />
                    </Switch>
                    <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                        <Switch>
                            <Route exact path="/" component={Posts} />
                            <Route exact path="/category/:category" component={Posts} />
                        </Switch>
                    </main>
                </div>
                <Route path="/category/:category/:postId" component={PostDetail} />
            </div>
        );
    }
}

App.propTypes = {
    fetchCategories: PropTypes.func,
    fetchPosts: PropTypes.func
}

export default withRouter(
    connect(null, {
        loadCategories: fetchCategories,
        loadPosts: fetchPosts
    })(App)
);
