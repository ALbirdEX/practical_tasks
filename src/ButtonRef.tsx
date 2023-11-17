import React, {useRef} from 'react';

const Button = () => {

    const ref = useRef(0)

    function handlerRefClick() {
        ref.current = ref.current +1
        console.log(`ref click: ` + ref.current)
    }
    console.log('render ref')
    return (
        <div>
            <button onClick={handlerRefClick}>
                ref click: {ref.current}
            </button>
        </div>
    );
};

export default Button;