import styled from 'styled-components';

export const Container = styled.div`
    background: #C0392B;
    width: 100%;
    min-height: 100vh;

    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;

    padding: 50px;

    .pageTitle{
        color: #fff;
        font-family: 'Nunito', sans-serif;
        margin-bottom: 20px;
    }

    .Buttons{
        margin-top: 20px;
    }
`;

export const FormContainer = styled.div`
    width: 95%; max-width: 490px; min-width: 300px;
    min-height: 420px;
    background: #E74C3C;
    border-radius: 15px;
    box-shadow: 15px 17px 0px rgba(0, 0, 0, 0.03);

    padding: 26px;

    margin: 0 20px;
`;

export const FormVisor = styled.div`
    min-height: 86px; width: 100%;    
    background: #C01200;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 20px 40px;
    
    h1{
        color: #fff;
        font-family: 'Nunito', sans-serif;
        font-size: 16px;
        font-weight: normal;

        line-break: auto;
        text-align: center;
        width: 100%;
    }
`;
export const FormOptionButton = styled.button`
    background: #fff;
    width: 100%; min-height: 55px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    color: #E74C3C;
    font-family: 'Nunito', sans-serif;

    transition: all .2s;
    padding: 10px;

    margin: 10px 0;

    &:hover{
        filter: brightness(.9);
    }
`;  
export const NextQuestionButton = styled.div``;