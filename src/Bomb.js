// your Bomb code here!
import React from 'react'
class Bomb extends React.Component {
    constructor(props) { // props that comp. get from parent
        super()
        this.state= {
            secondsLeft: props.initialCount
        }
    }
    render(){
        return this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    }
}
export default Bomb