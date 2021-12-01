import React, { useState } from 'react'
import EffectOnceCall from './EffectOnceCall'
const CleanEffect = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <div>
          <button onClick={()=>setToggle(!toggle)}>Toggle</button>  
          {toggle&&
          <EffectOnceCall/>
          }
        </div>
    )
}

export default CleanEffect
