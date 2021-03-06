import React from 'react';
import './Child.css';
import ReactLoading from 'react-loading';
import {Outside} from './Outside'

const Child = (props) => {

    let {randomColor} = React.useContext(Outside);

    return (
        <div className="Child">
            <ReactLoading type={'spin'} color={randomColor()} height={20} width={80}/>
            <div>I am a Child! @ {Date.now()}</div>
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
