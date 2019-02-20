import React from 'react';
import './Dad.css';
import NestedChild from "./NestedChild";
import NestedMemoChild from "./NestedMemoChild";
import ReactLoading from 'react-loading';

const Dad = (props) => {

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div className="Dad">
            <ReactLoading type={'spin'} color={getRandomColor()} height={20} width={40} />
            <div>I am a Dad! @ {Date.now()}</div>
            <NestedChild setWindow={props.setWindow}/>
            <NestedMemoChild setWindow={props.setWindow}/>
            {props.children}
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
