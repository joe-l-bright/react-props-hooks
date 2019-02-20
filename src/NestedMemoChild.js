import React, {memo} from 'react';
import './Child.css';
import ReactLoading from 'react-loading';

const NestedMemoChild = memo((props) => {
    return (
        <div className="Child">
            <ReactLoading type={'spin'} color={'#fff'} height={20} width={80} />
            <div>I am a NestedMemoChild! @ {Date.now()}</div>
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
});

export default NestedMemoChild;
