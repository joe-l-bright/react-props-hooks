import React, {useState} from 'react';
import './Home.css';
import Mom from "./Mom";
import Dad from "./Dad";
import MemoChild from "./MemoChild";
import Child from "./Child";
import ReactLoading from 'react-loading';

const Home = () => {
    const [window, setWindow] = useState('closed');
    const [door, setDoor] = useState('closed');

    return (
        <div className="Home">
            <ReactLoading type={'spin'} color={'#fff'} height={20} width={40} />
            <div>I am a Home! @ {Date.now()}</div>
            <Mom setWindow={setWindow} setDoor={setDoor}>
                <MemoChild setWindow={setWindow}/>
                <Child setWindow={setWindow}/>
            </Mom>
            <Dad setWindow={setWindow} setDoor={setDoor}>
                <MemoChild setWindow={setWindow}/>
                <Child setWindow={setWindow}/>
            </Dad>
            <div>I have a window that is {window}</div>
            <div>I have a door that is {door}</div>
        </div>
    )
};

export default Home;
