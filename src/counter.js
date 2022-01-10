import { useState } from "react"

export function Counter() {
    
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("Akash")
    const [color, setColor] = useState("red")

    function increaseOnclick() {
        //counter = counter + 1
        // i am increasing my counter by one myself. React has no role here. 
        //as a result data will change but UI will not

        setCounter(counter + 1) 
        setColor('green')
        //I am using write function provided by react to write the new counter value
        //i.e. i am asking react to increase my counter by one
        //react will update the data and UI
        //IMPORTANT: this process will not happen right away

        setName(name === "Akash" ? "Rahul" : "Akash")
        // setAge(24)
        // setCollegeName('dsfsd')


        // react batches all instructions and execute them when it sees fit
    }



    function decreaseOnclick() {
        setCounter(counter - 1)
        // setCounter(0) 
        // setName("Akash")
    }


    return (    
        <div style={{display:'flex', justifyContent:'center',marginTop:50, flexDirection:'column', alignItems:'center'}}>
            <h style={{ backgroundColor:color}} > Counter app</h>
            <p id="counter">{counter}</p>
            <input type='button' value='Increament' onClick={increaseOnclick} />
            <input type='button' value='Decreament' onClick={decreaseOnclick} />
            <p>{name}</p>
        </div>
    )
}




// state of a component  is private
// read and write, both of these operations can be done ny that component only

//[to read that value, to write that value] = useState(someValue)
//[variable, fn]


// JSX property 
//beacuse of react, i can write my styles as JS object











/**
 * 
 * create a follow button with red backgroundcolor
 * when clicked on it => change it to followed, chnage it background color to white
 * show another button with unfollow
 * 
 * 
 * 
 */