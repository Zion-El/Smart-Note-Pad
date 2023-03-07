import React, { Component } from 'react'


class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
           count : 0
        }
    }

  render() {
    return (
      <div>
        <div className="counter_container">{this.state.count}</div>
        <button>Increament</button>
      </div>
    )
  }
}

export default Counter