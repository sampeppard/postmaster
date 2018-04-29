import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from './Header'

class Main extends Component {
    render() {
        const {
            categories
        } = this.props

        return (
            <React.Fragment>
                <Header/>
            </React.Fragment>
        )
    }
}

export default Main