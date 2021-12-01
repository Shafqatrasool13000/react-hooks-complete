import React, { useEffect,useState } from 'react'

const IntervalCounterFunctional = () => {

    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(prevCount => prevCount + 1);
    }
    useEffect(() => {
        const interval = setInterval(
            tick, 1000);
        return () => {
            console.log('clear Called');
            clearInterval(interval)
        }
    },[])
    return (
        <div>
            
                Counter is :
                {count}
        
        </div>
    )
}

export default IntervalCounterFunctional
