import React from 'react';
import './Child.css';
import ReactLoading from 'react-loading';

const NestedChild = (props) => {
    return (
        <div className="Child">
            <ReactLoading type={'spin'} color={'#fff'} height={20} width={80} />
            <div>I am a NestedChild! @ {Date.now()}</div>
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

export default NestedChild;
