import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Sutter from './components/Sutter'
import Timer from './components/Timer'

export default function App() {
const [status , setStatus] = useState(true)
const transitions = useTransition(status, {
  from: { x: 0 , y:1000 , opacity: 1 },
  enter: { x:0 , y:0 , opacity: 1 },
  leave: {x: 0 , y:-1000 , opacity: 1 },
  delay: 500,
 
})
const [clock,setClock] =useState(50)
const getClock =(data)=>{setClock(data); if(clock===59){ setStatus(false)  }}

  return (
    <div className=' '>
    
<Timer getClock={getClock} > </Timer>

  {transitions(( style, item) => (
        item?<animated.div style={style} className="item"> 
                                      <Sutter count={clock}> </Sutter>
          </animated.div> : 
          <animated.div style={style} className="item"> 
                                      <Header> </Header>
                                      <MainContent > </MainContent>
                                      <Footer></Footer>
          
          </animated.div>
  ))}
 {/* <Sutter count={clock}> </Sutter> */}

    </div>
  )
}
