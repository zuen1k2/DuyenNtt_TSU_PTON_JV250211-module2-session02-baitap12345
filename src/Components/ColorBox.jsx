import React from 'react'

export default function ColorBox() {
  return (
    <div div style= {{display:"flex", gap:20}}>
    <div style = {{backgroundColor:"red",width:200,height:200,color:'white',fontSize:30,justifyContent:"center",textAlign:"center"}}> Box </div>
    <div style = {{backgroundColor:"blue",width:200,height:200,color:'white',fontSize:30,justifyContent:"center",textAlign:"center"}}> Box </div>
    <div style = {{backgroundColor:"green",width:200,height:200,color:'white',fontSize:30,justifyContent:"center",textAlign:"center"}}> Box </div>
    </div>
  )
}
