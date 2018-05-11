import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
        <div className="container">
            <div className="alert alert-danger not-found" role="alert">
                Whoops! This page does not exist!
            </div>
        </div>
    )
  }
}