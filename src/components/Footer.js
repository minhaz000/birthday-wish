import React ,{useState ,useEffect}from 'react'
import axios from 'axios'
export default function Footer() {
  const [ text , setText ] = useState("")
  useEffect(()=>{
    axios.get('./data.json').then( res => setText(res.data) )

  } ,[])
  return (
    <div>
      
      <footer className=' bg-black text-white text-center p-[4vh] '> {text?text.footer:""}  </footer>
    </div>
  )
}
