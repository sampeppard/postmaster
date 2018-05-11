import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

class Sidebar extends Component {
    render() {
        const {
            categories
        } = this.props

        return (
            <React.Fragment>
                <div className="row">
                    <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
                        <ul className="nav nav-pills flex-column">
                            <Link to="/">
                                <li className="nav-link">show all</li>
                            </Link>
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

Sidebar.propTypes = {
    categories: PropTypes.array
}

Sidebar.defaultProps = {
    categories: []
}

const mapStateToProps = ({ category }) => (
    {
        ...category
    }
)

export default connect(mapStateToProps)(Sidebar);