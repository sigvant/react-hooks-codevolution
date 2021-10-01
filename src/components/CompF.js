import React, { useContext } from 'react'
import { CountContext } from '../App'

function CompF() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <h2>Component F - {countContext.countState}</h2>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            {/* this name 'countCountext.countDispatch' comes because in APP.js we provided the name
            countDispatch in the object of the value attribute of the context provider. */}
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompF
