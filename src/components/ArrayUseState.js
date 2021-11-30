import React, { useState } from 'react'

const ArrayUseState = () => {
    const [items, setItems] = useState([])
    const addItem=()=>{
        setItems([...items,{
            id:items.length,
            name:Math.floor(Math.random()*10)+1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add</button>
            <ol>
            {items.map(item=>
                <li key={item.id}>{item.name}</li>
                )}
                </ol>
        </div>
    )
}

export default ArrayUseState
