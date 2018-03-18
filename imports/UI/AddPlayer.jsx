import React from 'react'


const addPlayer = (props) => {
    return(
    <form onSubmit={props.handleSubmit}>
        <input type="text" name="playerName" placeholder="Player name" />
        <button>Add player</button>
     </form>
    )
}


export default addPlayer;