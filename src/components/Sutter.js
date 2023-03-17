import React ,{ useState , useEffect} from  'react'
import axios from 'axios'
export default function Sutter(props) {
  const [ text , setText ] = useState("")
  useEffect(()=>{
    axios.get('./data.json').then( res => setText(res.data) )

  } ,[])
  return (
    <div className=' bg-blue-400 h-[100vh] w-[100vw]'>
      
        <h1 className=" pt-[45vh] text-3xl  text-center font-bold bg-red-400  "> <h1 className=' mb-4'>Dear , {text.name?text.name:""}  </h1>  {props.count ? <> 11 : 59 : {props.count}</>:<> 12 : 00 : 00</> }  </h1>
      
    </div>
  )
}
