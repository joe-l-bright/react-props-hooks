import React, {useState} from 'react';
import './Mom.css';
import Child from "./Child";

const Mom = (props) => {
    const [breath, setBreath] = useState('inhale');

    setTimeout(()=>{
        if(breath === 'inhale') {
            setBreath('exhale');
        } else {
            setBreath('inhale');
        }
    }, 3000);

    return (
        <div className="Mom">
            <div>I am a Mom.  {breath}!</div>
            <Child setWindow={props.setWindow}/>
            <Child setWindow={props.setWindow}/>
            <button onClick={() => {
                props.setWindow('opened')
            }}>Open Window
            </button>
            <button onClick={() => {
                props.setWindow('closed')
            }}>Close Window
            </button>
            <button onClick={() => {
                props.setDoor('opened')
            }}>Open Door
            </button>
            <button onClick={() => {
                props.setDoor('closed')
            }}>Close Door
            </button>
        </div>
    )
};

export default Mom;
