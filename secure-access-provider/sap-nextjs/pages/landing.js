import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeState } from '../actions/actions';

class ReduxDemo extends React.Component {
    render() {
        return(
            <div>
                <h1>Redux Demo</h1>
                <br/>
                <div className='center'>
                    <input id='inputTextBox' type='text'></input>
                    <button type='button' onClick={this.props.changeState}>
                        Update Label
                    </button>
                </div>
                <br/>
                <p>{this.props.text}</p>
                <br/>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    changeState: bindActionCreators(changeState, dispatch)
})

export default connect((state) => ({ text: state.text }), mapDispatchToProps)(ReduxDemo);