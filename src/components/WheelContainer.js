import React from 'react'
import wheel from '../images/main/wheel.png';



const WheelContainer = ({main,content}) => {
  return (
    <div className="wheel-container" ref={main}>
        <img className='wheel' src={wheel} alt="wheel" />
        {content}
    </div>
  )
}

export default WheelContainer