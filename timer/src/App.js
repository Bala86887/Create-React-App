import logo from './logo.svg';

import {useEffect} from "react"
import React from "react"
import Timer from "./components/one.js"

function App(){
  let[value,setvalue]=React.useState(true)
 function change(){
  setvalue(!value)
 }

  return(
    <div>
      <h1>{value?<Timer/>:null}</h1>
      <button onClick={change}>unmount</button>
    </div>
  )

}


export default App;
