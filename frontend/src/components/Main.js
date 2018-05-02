import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

class Main extends Component {
    render() {
        const {
            categories
        } = this.props

        return (
            <React.Fragment>
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