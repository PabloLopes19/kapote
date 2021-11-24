import React, { createContext, useState } from 'react';

const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {

    const [length, setLength] = useState(0)

    const [randomNumber, setRandomNumber] = useState(0);
    const [RightModal, setRightModal] = useState(false);
    const [WrongModal, setWrongModal] = useState(false);

    function loadQuestion() {

        setRandomNumber(Math.floor(Math.random() * length));
    }

    return(
        <ModalContext.Provider value={{ RightModal, setRightModal, WrongModal, setWrongModal, loadQuestion, randomNumber, setLength }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;