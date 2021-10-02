import {useState} from 'react'

function useCounter(initialCount = 5, value) {
    // lets try with a parameter above
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(initialCount)
    }

    return [count, increment, decrement, reset]
    // we return everything we need for the comps to work
}

export default useCounter
