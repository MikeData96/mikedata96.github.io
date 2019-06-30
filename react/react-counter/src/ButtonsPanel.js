import React from 'react';

const ButtonsPanel = (props) => {
    return (
        <div className="buttonsPanel">
            <button onClick={props.changeCounterValue} >Add 1</button>
            <button onClick={()=>props.resetCounterValue(true)}>Reset</button>
            <button onClick={()=>props.resetCounterValue(false)}>Set Init Value</button>
        </div>
    );
}

export default ButtonsPanel;
