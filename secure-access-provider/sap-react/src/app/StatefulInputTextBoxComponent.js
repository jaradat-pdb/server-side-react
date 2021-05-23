import React from 'react';

class StatefulInputTextBoxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            outputText: 'Placeholder, for now...'
        };
    }

    updateText = () => {
        this.setState(
            {
                outputText: document.getElementById('statefulInputTextBox').value
            }
        );
        document.getElementById('labelComponent').textContent = document.getElementById('statefulInputTextBox').value;
        document.getElementById('statefulInputTextBox').value = '';
    }

    render() {
        return(
            <div>
                <div>
                    <input id='statefulInputTextBox' type='text'></input>
                    <button type='button' onClick={this.updateText}>
                        Update
                    </button>
                </div>
                <div>
                    <label>{this.state.outputText}</label>
                </div>
            </div>
        );
    }
}

export default StatefulInputTextBoxComponent;