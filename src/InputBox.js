import React from 'react';

function InputBox(props) {
    return (
        <form >
            <input 
            value ={props.input}
            onChange={props.onChange}
            />
        </form>
    );
}

export default InputBox;