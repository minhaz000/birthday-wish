import React,{useEffect , useState} from 'react'
import axios from 'axios'
export default function Header() {
  const [ text , setText ] = useState("")
  useEffect(()=>{
    axios.get('./data.json').then( res => setText(res.data) )

  } ,[])
  return (
    <div>
      

      <h1 className=' text-2xl bg-sky-400 text-white font-bold text-center p-[5vh]  uppercase'>{text?text.heading:''}</h1>

    </div>
  )
}
