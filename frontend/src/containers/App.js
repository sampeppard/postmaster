import React, { Component } from 'react';
import { fetchCategories } from '../utils/categoriesApi'
import { fetchPosts } from '../utils/postApi'

import Main from '../components/Main'

class App extends Component {

    render() {
        return (
            <div className="App">
                <Main/>
                Hello World
            </div>
        );
    }
}

export default App;
