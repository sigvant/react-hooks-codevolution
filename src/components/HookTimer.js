import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
            {/* won`t work because interval is scoped, ref can be used to store
            any mutable value. the value will persist through renders without rerendering */}
        </div>
    )
}

export default HookTimer
