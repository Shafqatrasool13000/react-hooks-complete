import React, { useState } from 'react'

const ObjectUseState = () => {
    const [name, setName] = useState({firstName:'',lastName:''})
    return (
        <h3>
            <form >
                <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
                <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
                <div>{JSON.stringify(name)}</div>
            </form>
        </h3>
    )
}

export default ObjectUseState
