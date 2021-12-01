import React, { useEffect, useState } from 'react'

const EffectCounterFunctional = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title=`Counter is ${count}`
    })
    return (
        <div>
             <button onClick={()=>setCount(prevCount=>prevCount+1)}>Count is {count}</button>
        </div>
    )
}

export default EffectCounterFunctional
