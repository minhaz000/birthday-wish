import React, { Component } from 'react'

export default class timer extends Component {
constructor(props) {
  super(props)

  this.state = {
     time : 50
  }
}
componentDidMount () {
const countDown = 11000
 const clockID = setInterval(()=>{
    this.setState({time :this.state.time+1 }); 
    if(this.state.time===59){
      this.setState({time:0})
    }
    this.props.getClock(this.state.time)
  } ,1000)

setTimeout(() => clearInterval(clockID) ,countDown)
}
  

  render() {
    return (
      <> </>
    )
  }
}
