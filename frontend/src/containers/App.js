import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Main from '../components/Main'
import { fetchCategories } from '../actions/categories';

class App extends Component {
    componentDidMount() {
        this.props.loadCategories()
    }

    render() {
        return (
            <div className="App">
                <Main/>
            </div>
        );
    }
}

export default withRouter(
    connect(null, {
        loadCategories: fetchCategories,
    })(App)
);
