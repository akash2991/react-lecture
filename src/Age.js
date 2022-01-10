import { useState } from "react"
// import { Fragment } from "react/cjs/react.production.min"

export function Age(props) {
    // const [age, setAge] = useState([20, 30])

    // function handleOnClick() {
    //     setAge([...age, 40])
    // }


    return (
        <div style={{backgroundColor:'green'}}>
            {props.age.map( item => <p>
                My age is {item}
            </p>)}
            <button onClick={props.handleOnClick} >change age</button>
        </div>
            
    )
}




        // you are telling reat that data of age has chnaged. And I am supplying you the new data
        // I got your mesaage with the new data
        // I will cross check it onece agin and if the data is different only then I'll
        // update the UI.
        // Whne? whenever I want










// function App() {


//     function Hello() {

//         function Age() {

            
//         }
//     }


// }







