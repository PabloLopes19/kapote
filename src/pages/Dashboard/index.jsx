import React, { useEffect, useContext } from 'react';

import { Container, FormContainer, FormVisor, FormOptionButton } from './styles';
import Right from '../../modals/Right';
import Wrong from '../../modals/Wrong';

import Questions from '../../questions.json';
import ModalContext from '../../Contexts/ModalContexts';

function Dashboard() {

    
    const Context = useContext(ModalContext);

    useEffect(() => {
        Context.setLength(Questions.length - 1);

        // eslint-disable-next-line
    }, []);

    function checkAnswer(Alt) {
        if(Alt === Questions[Context.randomNumber].rightAlt){
            Context.setRightModal(true);
        }else{
            Context.setWrongModal(true);
        }
    }

    return (
        <Container>
            { Context.RightModal && <Right /> }
            { Context.WrongModal && <Wrong /> }

            <h1 className="pageTitle">Kapote!</h1>

            <FormContainer>
                <FormVisor>
                    <h1>{ Questions[Context.randomNumber].question }</h1>
                </FormVisor>

                <div className="Buttons">

                    {
                        Questions[Context.randomNumber].alts.sort(() => Math.random() - 0.5).map(Question => (
                            <FormOptionButton key={Question} onClick={e => checkAnswer(Question) }>
                                { Question }   
                            </FormOptionButton>
                        ))
                    }
                </div>
            </FormContainer>
        </Container>
    );
}

export default Dashboard;