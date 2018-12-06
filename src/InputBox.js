import React from 'react';

function InputBox(props) {
    return (
        <form >
            <input 
            value ={props.input}
            // onChange={props.changeHandler}
            onChange={(event) => {
                // console.log(event.target.value);
                props.changeHandler(event.target.value);
            }}
            />
        </form>
    );
}

export default InputBox;