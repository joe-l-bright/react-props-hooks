import React, {useState} from 'react';
import './Home.css';
import Mom from "./Mom";
import Dad from "./Dad";

const Home = () => {
    const [window, setWindow] = useState('closed');
    const [door, setDoor] = useState('closed');

    return (
        <div className="Home">
            <div>I am a Home</div>
            <Mom setWindow={setWindow} setDoor={setDoor}/>
            <Dad setWindow={setWindow} setDoor={setDoor}/>
            <div>I have a window that is {window}</div>
            <div>I have a door that is {door}</div>
        </div>
    )
};

export default Home;
