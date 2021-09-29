import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('Use effect, updating document title')
        document.title = `You clicked ${count} times`
    }, [count])
    // we pass a function that gets rendered after every update of the comp

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Click {count} Times</button>
        </div>
    )
}

export default HookCounterOne
