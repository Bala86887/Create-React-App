

import {useEffect} from "react"
import React from "react"

function Timer(){
  let[count,setcount]=React.useState(0)
  useEffect(function(){
   
    let id=setInterval(()=>{
      let num=count++
      setcount(num)
      console.log(num)
    },1000)

function check(){
    clearInterval(id)
}
return check
  },[])

  return(
    <div>
    
      <h1>{count}</h1>
    </div>
  )

}


export default Timer;