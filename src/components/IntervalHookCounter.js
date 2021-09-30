import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    
    const tick = () => {
        setCount(prevCount => count + 1)
    }

    useEffect(() => {
        // multiple useEffect can be used to group similar code
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])
    // needs to be thought as an array that react need to watch for changes
    // empty array means 'ignore looking for changes'

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
