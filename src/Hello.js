import { useState } from 'react'
import { Age } from './Age'
import './Hello.css'

export function Hello(props) {
    return null

    const [age, setAge] = useState([20, 30])

    function handleOnClick() {
        setAge([...age, 40])
    }


    console.log(props, "props in hello")
    if (props.prefix) {
        return (
            <p className='name'>{`Hello ${props.prefix} ${props.firstName} ${props.lastName}`}</p>
        )

    }

    return (
        <p className='name'>
            {`Hello ${props.firstName} ${props.lastName}`}

            <Age age={age}  handleOnClick={handleOnClick}  />

            
            {/* <OldAge randomArray={age} changeRadomArray={handleOnClick} /> */}


        </p>
        
    )
}

















