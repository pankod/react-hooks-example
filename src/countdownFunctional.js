import React from 'react';

export const CountdownFunctional = (props) => (
    <div>
        <p>{props.countDown} seconds</p>
        <button onClick={() => false}>
            Add 10 seconds
        </button>
    </div>
);
