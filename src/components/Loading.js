import React from 'react'
import "../styles/loading.css"
import wheel from '../images/main/wheel.png';


const Loading = () => {
  return (
    <div className='loading'>
      <div style={{width:"100%",height: "100%", display: "flex", alignItems: "center", justifyContent: "center",  gap: "20px"}}>
        <img className='wheel' style={{width: "70px"}} src={wheel} alt="wheel" />
        <h1 style={{fontWeight: "400", color: "rgb(14, 140, 157)"}}>Loading...</h1> 
      </div>
    </div>
  )
}

export default Loading