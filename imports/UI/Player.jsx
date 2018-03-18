import React from 'react'
import { Players } from './../api/players'

const Player = (props)=> {
    return(
        <p key={props.player._id} >
        {props.player.name} has {props.player.score} point(s).
        <button onClick={()=> Players.update({_id: props.player._id}, { $inc:{score:+1} })}>+</button>
        <button onClick={()=> Players.update({_id: props.player._id}, { $inc:{score:-1} })}>-</button>
        <button onClick={()=> Players.remove({_id: props.player._id})}>X</button>
      </p>       
    )
}

export default Player;