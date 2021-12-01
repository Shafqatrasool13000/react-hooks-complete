import React, { useEffect, useState } from 'react'

const UseEffectConditionally = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log("Effect updates");
        document.title = `Counter is ${count}`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Count is {count}</button>
        </div>
    )
}

export default UseEffectConditionally
