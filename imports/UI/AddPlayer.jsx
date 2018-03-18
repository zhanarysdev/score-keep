import React, { Component } from 'react'

import { Players } from './../api/players'
export default class addPlayer extends Component {
    handleSubmit (e) {
        
        const playerName = e.target.playerName.value
        e.preventDefault()
       
          Players.insert({
            name: playerName,
            score: 0
          })
          
        
      }
    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" name="playerName" placeholder="Player name" />
                <button>Add player</button>
            </form>
        )
}
}


