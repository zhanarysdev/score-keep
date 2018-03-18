import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker' 
import { Players } from './../imports/api/players'


import TitleBar from './../imports/UI/TitleBar'
import AddPlayer from './../imports/UI/AddPlayer'
import Player from './../imports/UI/Player'
import PlayerList from './../imports/UI/PlayerList'



const handleSubmit = (e) => {
  const playerName = e.target.playerName.value
  e.preventDefault()
 
    Players.insert({
      name: playerName,
      score: 0
    })
    console.log(playerName)
  
}




Meteor.startup(()=>{
  Tracker.autorun(()=>{
   const players =  Players.find().fetch()
  
  
  let title = 'Score keep'
  let name = 'mike'
  let jsx = (
    <div>
      <TitleBar title="Score Keep App"/>
      <p>Hello {name}</p>
      <p>This is my second p</p>
      <PlayerList players={players}/>
     <AddPlayer handleSubmit={handleSubmit}/>
    </div>
  )
  ReactDOM.render(jsx, document.getElementById('root'))
})

});