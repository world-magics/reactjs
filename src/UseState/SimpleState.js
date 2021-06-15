import React,{useState} from 'react';
import PropTypes from 'prop-types';

function SimpleState() {
const [count,setCount]=useState(0);  
 
function increment(){
    setCount(count+1)
}
function decrement(){
    setCount(count-1)
}
function reset(){
    setCount(0);
}

return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};

SimpleState.propTypes = {};

export default SimpleState;