import React from 'react';
import './Child.css';

const Child = (props) => {
    return (
        <div className="Child">
            <div>I am a Child!</div>
            <button onClick={() => {
                props.setWindow('opened')
            }}>Open Window
            </button>
            <button onClick={() => {
                props.setWindow('closed')
            }}>Close Window
            </button>
        </div>
    )
};

export default Child;
