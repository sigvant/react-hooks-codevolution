import React, { useState } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = () => {
        setAge(age + 1)
    }

    const incrementSalary = () => {
        setSalary(salary + 1000)
    }
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

export default ParentComponent
