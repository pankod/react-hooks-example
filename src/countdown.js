import React, { useState, useRef, useEffect } from "react";

export function Countdown(props) {
    const intervalRef = useRef();
    const [countDown, setCountdown] = useState(50);

    console.log("asda", countDown)
    useEffect(() => {
        console.log("useEffect", countDown)
        const id = setInterval(function () {
            const newSecond = countDown - 1;

            setCountdown(newSecond);
        }, 1000);

        intervalRef.current = id;

        return () => {
            clearInterval(intervalRef.current);
        }
    });

    return (
        <div>
            <p>{countDown} seconds</p>
            <button onClick={() => setCountdown(countDown + 10)}>
                Add to 10 seconds
      		</button>
        </div>
    );
}
