import React, {  useState , useEffect} from 'react'
import  axios  from 'axios'
import Confetti from 'react-confetti'
import '../css/cake.css'
export default function Cake() {
  const [wish , setWish] = useState(false)
  const [ text , setText ] = useState("")
  useEffect(()=>{
    axios.get('./data.json').then( res => setText(res.data) )

  } ,[])

 const Wish = ()=>{
    
   const flame = document.querySelector('.flame')
   const flame2 = document.querySelector('.flame2')
   const flame3 = document.querySelector('.flame3')
   const  text = document.querySelector('.text')
   const text2 = document.querySelector('.text2')
   text2.classList.add('opacity-0');
   flame.classList.add('opacity-0');
   flame2.classList.add('opacity-0');
   flame3.classList.add('opacity-0');
   

   text.style.cssText = ' top:-90px; z-index:1;transition: .3s; opacity:1; ' 

   
   setWish(true)

  }   
   


  return (
    <>
     { wish ?<Confetti ></Confetti> : null }
         <p className="text2 mt-10 md:mt-5 w-full  ">{text?text.info:''}</p>

    <div className=' cake-body md:h-[74vh]'>
        <div id="birthday-cake" className=' m-4 '>
  <div className="cake ">
    <div className="middle"></div>
    <div className="chocs"></div>
    <div className="top"></div>
  </div>
  <div className="candles duration-70">
    <div className="flame " onClick={Wish}></div>
    <div className="flame2" onClick={Wish} ></div>
    <div className="flame3" onClick={Wish}></div>
    <div className="text  ">{text? text.wish:""}</div>
    <div className="shadows"></div>
  </div>
 
</div>
      
    </div> </>
  )
}
