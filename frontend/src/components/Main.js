import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


import PropTypes from 'prop-types'
import Header from './Header'
import NewPost from './NewPost'

class Main extends Component {
    render() {
        const {
            categories
        } = this.props

        return (
            <React.Fragment>
                <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
                            <ul className="nav nav-pills flex-column">
                                {categories.map((category) => (
                                    <li key={category.name} className="nav-item">
                                        <Link to={`/category/${category.path}`} className="nav-link">{category.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                            <NewPost />
                        </main>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

Main.defaultProps = {
    categories: []
}

const mapStateToProps = ({ category }) => (
    {
        ...category
    }
)

export default connect(mapStateToProps)(Main);