import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker' 
import { Players } from './../imports/api/players'


import TitleBar from './../imports/UI/TitleBar'
import AddPlayer from './../imports/UI/AddPlayer'



const renderPlayesrs = (playersList) => {
  return playersList.map((player) => {
    return (
    <p key={player._id} >
      {player.name} has {player.score} point(s).
      <button onClick={()=> Players.update({_id: player._id}, { $inc:{score:+1} })}>+</button>
      <button onClick={()=> Players.update({_id: player._id}, { $inc:{score:-1} })}>-</button>
      <button onClick={()=> Players.remove({_id: player._id})}>X</button>
    </p>
    )
  })
}
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
      <TitleBar/>
      <p>Hello {name}</p>
      <p>This is my second p</p>
      {renderPlayesrs(players)}
     <AddPlayer handleSubmit={handleSubmit}/>
    </div>
  )
  ReactDOM.render(jsx, document.getElementById('root'))
})

});