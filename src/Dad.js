import React from 'react';
import './Dad.css';
import Child from "./Child";

const Dad = (props) => {
    return (
        <div className="Dad">
            <div>I am a Dad.</div>
            <Child setWindow={props.setWindow}/>
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

export default Dad;
