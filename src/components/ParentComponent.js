import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age]) 

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])
    
    return (
        <div>
            <Title/>
            <Count text='Age' count={age} /> 
            {/* text and count are passed as props with the keys that are decons in the Count element */}
            <Button handleClick={incrementAge}>Increment Age</Button>
            {/* here we are passing the method as props to the function, there, it will be decons and used */}
            <Count text='Salary' count={salary}/>
            <Button handleClick={incrementSalary}>Increment Salary</Button>            
        </div>
    )
}

// main issue here is that each interaction renders everything again, which is dumb for efficiency
// by going to the component and wrapping the export with react.memo, we can prevent it from re rendering
// if their props did not change

// be careful with props inside the elements or methods, because it might cause something to rerender
// when you don`t actually expects it to rerender



export default ParentComponent
