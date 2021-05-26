import React, {useState} from 'react';
import useChangeAlert from '../hooks/useChangeAlert';

export default (props) => {
    const [output, setOutput] = useState('Placeholder7');

    function updateText() {
        setOutput(document.getElementById('inputTxt1').value);
    }

    useChangeAlert(`New Label Value: ${output}`);

    return(
        <div>
            <input id='inputTxt1'></input>
            <button type='button' onClick={updateText}>Update</button>
            <br/>
            <label>{output}</label>
        </div>
    );
}