import React from "react";
import './style.css'
import wp from './whatsApp.png'
function Home()
{
    var a=10
    var b=20
    var mycol={color: 'Yellow', backgroundColor: 'green'}
    return(
        <>
            <h1>Home</h1>
            a value is {a} <br/>
            b value is {b}

            <p style={{color: 'red', backgroundColor: 'green'}}>Hello I am Nency</p>
            <p style={{color: 'white', backgroundColor: 'balck'}}>Hello I am Nency</p>
            <p stype={mycol}>I am Nency</p>
            <p stype={mycol}>I am Nency</p>
            <p stype={mycol}>I am Nency</p>
            <img src={wp}/>
        </>
    )
}

export default Home