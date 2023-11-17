import React, {useState} from 'react';

const Button = () => {

    const[state, setState] = useState(0)

    function handlerStateClick() {
        setState(state + 1)
    }
    console.log('render state')
    return (
        <div>
            <button onClick={handlerStateClick}>
                state click: {state}
            </button>
        </div>
    );
};

export default Button;