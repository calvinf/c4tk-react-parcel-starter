import React from 'react';
import {render} from 'react-dom';

const Hello = ({name}) => {
    return (
        <h1>Hello, {name}</h1>
    );
};

render(
    <Hello name="C4TK" />,
    document.querySelector('#app'),
);
