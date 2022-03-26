import React, { Component } from 'react'
import Header from '../components/Header'

class Layout extends Component {
  render() {
    return (
      <div className="flex flex-col h-screen max-h-screen">
          <Header/>
          <div className="">
            {this.props.children}
          </div>
    </div>
    )
  }
}

export default Layout