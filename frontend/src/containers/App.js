import React, { Component } from 'react';
import { fetchCategories, fetchPosts } from './api'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backend: 'backend-data'
        }
    }

    componentDidMount() {
        fetchPosts('react')
            .then((data) => {
                this.setState({backend:data});
            })
    }

    render() {
        return (
        <div className="App">
            Hello World
            <p>
                Talking to the backend yields these categories: <br />
                {this.state.backend}
            </p>
        </div>
        );
    }
}

export default App;
