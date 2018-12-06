import React from 'react';
const leetify = require('leetify');

function OutputBox(props) {
    console.log(props.transformation);
    console.log("the props transformation in outbox")
    switch (props.transformation){
        case 'leet':
            return (<div> {leetify(props.input)} </div>)
        case 'upperLeet':
            return(<div> {leetify(props.input.toUpperCase())} </div>)
        case 'upper':
            return(<div> {props.input.toUpperCase()} </div>)
        default:
            return(<div> {props.input} </div>)
    }
}

export default OutputBox;