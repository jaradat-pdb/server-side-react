import React from 'react';
import ReactDOM from 'react-dom';
import InputTextBoxComponent from './app/InputTextBoxComponent';
import LabelComponent from './app/LabelComponent';
import StatefulFunctionComponent from './app/StatefulFunctionComponent';
import StatefulInputTextBoxComponent from './app/StatefulInputTextBoxComponent';
import DataComponent from './app/DataComponent';
import AjaxComponent from './app/AjaxComponent';
import './index.css';

var reactElement1 = React.createElement(
  'p',
  {
    id: 'para1'
  },
  'Hello from React'
);
ReactDOM.render(reactElement1, document.getElementById('div1'));

const paraText = 'Hola de React';
const reactElement2 = <p id='para2'>{paraText}</p>
ReactDOM.render(reactElement2, document.getElementById('div2'));

function inputTextBoxFunction() {
  return(
    <div>
      <div>
        <input id='inputTextBox'></input>
        <button type='submit' onClick={updateText}>
          Update
        </button>
      </div>
      <div>
        <label id='output'></label>
      </div>
    </div>
  );
}

function updateText() {
  document.getElementById('output').innerText = document.getElementById('inputTextBox').value;
}

ReactDOM.render(inputTextBoxFunction(), document.getElementById('div3'));
ReactDOM.render(
    <React.Fragment>
        <InputTextBoxComponent/>
        <LabelComponent text='Passing a message to child via props'/>
        <StatefulInputTextBoxComponent/>
        <StatefulFunctionComponent/>
        <DataComponent/>
        <AjaxComponent/>
    </React.Fragment>,
    document.getElementById('rootDiv'));