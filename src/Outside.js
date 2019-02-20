import * as React from "react";

let Outside = React.createContext({});

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Frontyard = () => {
    const [weather, setWeather] = React.useState('inhale');

    setTimeout(() => {
        if (weather === 'sunny') {
            setWeather('cloudy');
        } else {
            setWeather('sunny');
        }
    }, 1000);

    return {weather}
};

const Backyard = () => {
    const [breath, setBreath] = React.useState('inhale');

    setTimeout(() => {
        if (breath === 'inhale') {
            setBreath('exhale');
        } else {
            setBreath('inhale');
        }
    }, 1000);

    return {breath}
};

const OutsideProvider = (props) => {
    return (
        <Outside.Provider
            value={{
                randomColor,
                Backyard: Backyard(),
                Frontyard: Frontyard()
            }}
        >{props.children}</Outside.Provider>
    );
};

export {Outside, OutsideProvider};
