import React, { useState } from 'react'
import IntervalCounterFunctional from './IntervalCounterFunctional'

const IntervalCountFuctionContainer = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {
                toggle && <IntervalCounterFunctional/>
            }
        </div>
    )
}

export default IntervalCountFuctionContainer
