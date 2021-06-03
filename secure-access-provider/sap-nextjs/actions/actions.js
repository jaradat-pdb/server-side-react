export const InitialState = {
    text: 'Initial label (state) value.'
}

export const changeState = () => dispatch => {
    return dispatch({
        type: 'ChangeLabel',
        text: document.getElementById('inputTextBox').value
    })
}