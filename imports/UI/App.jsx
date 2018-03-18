
import React, { Component } from 'react'
import TitleBar from './TitleBar'
import AddPlayer from './AddPlayer'
import Player from './Player'
import PlayerList from './PlayerList'

export default class App extends Component{
    render(){
        return(
            <div>
                <TitleBar title="Score Keep App"/>
                <PlayerList players={this.props.players}/>
                <AddPlayer handleSubmit={this.props.handleSubmit}/>
            </div>
        )
    }
}

