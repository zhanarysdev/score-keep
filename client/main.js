import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker' 
import { Players } from './../imports/api/players'




const renderPlayesrs = (playersList) => {
  return playersList.map((player) => {
    return <p key={player._id} >{player.name} has {player.score} point(s)  </p>
  })
}
const handeSubmit = (e) => {
  const playerName = e.target.playerName
  e.preventDefault()
 
    Players.insert({
      name: playerName,
      score: 0
    })
  
}

Meteor.startup(()=>{
  Tracker.autorun(()=>{
   const players =  Players.find().fetch()
  
  
  let title = 'Score keep'
  let name = 'mike'
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name}</p>
      <p>This is my second p</p>
      {renderPlayesrs(players)}
      <form onSubmit={handeSubmit}>
        <input type="text" name="playerName" placeholder="Player name" />
        <button>Add player</button>
      </form>
    </div>
  )
  ReactDOM.render(jsx, document.getElementById('root'))
})

});