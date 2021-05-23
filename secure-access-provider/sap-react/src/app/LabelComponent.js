import React from 'react';

class LabelComponent extends React.Component {
    render() {
        return(
            <div>
                <label id='labelComponent'>{this.props.text}</label>
            </div>
        );
    }
}

export default LabelComponent;