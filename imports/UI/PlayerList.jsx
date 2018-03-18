import React, { Component } from 'react'
import Player from './../UI/Player'



export default class PlayerList extends  Component {
    renderPlayers(){
        return this.props.players.map(player => {
            return <Player key={player._id} player={player}/>
        })
    }
    
    
    
    render(){
        return(
            <div>
                {this.renderPlayers()}
            </div>
        )
    }
}