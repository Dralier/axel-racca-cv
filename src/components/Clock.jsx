import React, { useEffect, useState } from "react";

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setcurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setcurrentTime(time);
    }

    setInterval(updateTime, 1000);

    return (
        <div className="clock flex h-full items-center justify-center bg-backg">
            <h1 className="text-rose font-bold">{currentTime}</h1>            
        </div>
    );
};

export default Clock;
