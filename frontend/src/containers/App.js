import React, { Component } from 'react'
import {  Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from '../components/Header'
import Main from '../components/Main'
import NewPost from '../components/NewPost'
import Posts from '../components/Posts'

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
                    <Main/>
                    <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                        <Switch>
                            <Route exact path="/" component={Posts} />
                        </Switch>
                        <Switch>
                            <Route exact path="/" component={NewPost} />
                        </Switch>
                    </main>
                </div>
            </div>
        );
    }
}

export default withRouter(
    connect(null, {
        loadCategories: fetchCategories,
        loadPosts: fetchPosts
    })(App)
);
