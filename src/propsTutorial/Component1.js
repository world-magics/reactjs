import React from 'react';


const Component1 = (props) => {
    return (
        <div>
            <h1>Hello,{props.name},{props.age}</h1>
            <h1>Hi! My years old,{props.age}</h1>
        </div>
    );
};

Component1.propTypes = {};

export default Component1;