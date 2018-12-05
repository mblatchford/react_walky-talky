import React from 'react';

function OutputBox(props) {
    return (
        <div>
            {props.input}
            {props.upper}
            {props.leet}
        </div>
    );
}

export default OutputBox;