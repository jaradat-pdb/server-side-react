import React from 'react';

class MyComponent extends React.Component {
    updateText() {
        document.getElementById('para2').innerText = 
            document.getElementById('para2InputTextBox').value;
    }

    render() {
        return(
            <div>
                <input id='para2InputTextBox'></input>
                <button type='submit' onClick={this.updateText}>Update</button>
            </div>
        );
    }
}

export default MyComponent;