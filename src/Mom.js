import React from 'react';
import './Mom.css';
import NestedChild from "./NestedChild";
import NestedMemoChild from "./NestedMemoChild";
import ReactLoading from 'react-loading';
import {Outside} from "./Outside";

const Mom = (props) => {
    let {randomColor, Backyard, Frontyard} = React.useContext(Outside);

    return (
        <div className="Mom">
            <ReactLoading type={'spin'} color={randomColor()} height={20} width={40} />
            <div>I am a Mom.  {Backyard.breath}!{Frontyard.breath}! @ {Date.now()}</div>
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

export default Mom;
