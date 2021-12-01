import React, { useEffect, useState } from 'react'

const EffectOnceCall = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const onMouseMove=e=>{
        console.log("on mouse move");
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log("useEffect render");
        window.addEventListener('mousemove',onMouseMove)
        return ()=>{
            window.removeEventListener('mousemove',onMouseMove)
        }
        
    },[])
    return (
        <div>
          Effect X {x} Y {y}       
        </div>
    )
}

export default EffectOnceCall
