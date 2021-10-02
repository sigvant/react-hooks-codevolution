import React, { useEffect, useRef } from 'react'

function FocusInput() {
    
    const inputRef = useRef(null)
    // call useRef with initial value to a variable

    useEffect(() => {
        // focus the input
        inputRef.current.focus()

    }, [])

    return (
        <div>
            <input ref={inputRef} type="text" />
            {/* add the reserved REF keyword here */}
        </div>
    )
}

export default FocusInput
