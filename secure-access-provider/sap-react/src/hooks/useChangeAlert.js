import {useEffect} from 'react';

const useChangeAlert = (text) => {
    useEffect(() => {
        alert(text);
    });
}

export default useChangeAlert;