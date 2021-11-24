import React, { useContext } from 'react';

import { Overlay, Container, DismissButton } from './styles';

import ModalContext from '../../Contexts/ModalContexts';

function Right() {
    const Context = useContext(ModalContext);

    function closeModal() {
        Context.setRightModal(false);

        Context.loadQuestion();
    }

  return (
      <Overlay>
          <Container>
            <h1>Você acertou!</h1>

            <img className="Meme" src="https://i.imgflip.com/2ku910.jpg" alt="Meme"/>
            {/* <img className="Meme" src="https://sm.ign.com/t/ign_br/news/s/spider-man/spider-man-3-footage-appears-in-trailer-for-life_pr76.h720.jpg" alt="Meme"/> */}

            <p>Jogou muito, parça! :)</p>
            <DismissButton onClick={closeModal}>Fechar</DismissButton>
          </Container>
      </Overlay>
  );
}

export default Right;