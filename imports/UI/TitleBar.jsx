import React, { Component } from 'react'
class TitleBar extends Component {
    render(){
      return(
        <div className="title-bar">
         <div className="wrapper">
          <h1> {this.props.title} </h1>
        </div>
        </div>
      )
    }
}

export default TitleBar;