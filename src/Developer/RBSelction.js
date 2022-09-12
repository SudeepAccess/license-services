import { color } from "@mui/system";
import React, { useState } from "react";

function RBSelect(){
    let color=["Black","Blue"];
    const [displaycolor,setcolor]=useState();
     return(
        <div>
            <h1>happy</h1>
        <h2>Reactjs</h2>
        { color.map(result=>(

      <div>
            <input type="radio" value={result} name="radiovalues" onChange={(e)=>setcolor(e.target.value)}/>
          
        <b>{result}</b>
        </div>
        ))}
        <h3 style={{color:"green"}}>{displaycolor}</h3>
        </div>
     )
}
export default RBSelect;