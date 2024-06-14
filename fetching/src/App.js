import logo from './logo.svg';
import './App.css';
import React from "react"
import {useEffect} from "react"
let styleobj={
 
 display:"grid",
 gridTemplateColumns:"300px 300px 300px",
 border:"red solid 2px",
 width:"1000px",
 margin:"auto",
 paddingLeft:"100px"
}
function Users(check){
 let{obj}=check
let {avatar,first_name,last_name,email}=obj


return(<div>
 <img src={avatar}/>
 <h3>{first_name}</h3>
 <h3>{last_name}</h3>
 <h3>{email}</h3>
</div>)
}

function App() {
  let[page,setpage]=React.useState(1)

let[data,setdata]=React.useState([])

  async function fetchdata(){
   try{
    let first=await fetch(`https://reqres.in/api/users?page=${page}`)
    let second=await first.json()
    setdata(second.data)
    

   } 

  catch(error){
    console.log("something went wrong")
  }
  
  }



  
useEffect(function(){
  fetchdata()
document.title=`page is ${page}`
},[page])

  // console.log(data)
  function incre(){
   
if(page==2){

  setpage(1)
}
else(
  setpage(page+1)
)

  }

 

  return (


    <div  style={{...styleobj}}>
 {data.map((elements)=>(
 <Users obj={elements}/>

 ))}



<button  onClick={incre}  style={{marginLeft:"200px",width:"300px"}}>Go To Next Page</button>
    </div>

    
  );
}

export default App;
