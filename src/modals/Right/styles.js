import styled from 'styled-components';

export const Overlay = styled.div`
    background: rgba(242, 243, 245, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    transition: all .3s;

    animation-name: Overlay;
    animation-duration: .2s;

    @keyframes Overlay{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;

export const Container = styled.div`
    width: 90%; max-width: 500px;
    padding: 30px 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 22px;
    /* box-shadow: 0px 20px 60px 10px rgba(0, 0, 0, 0.07); */
    box-shadow: 0px 16px 40px var(--shaddow);

    animation-name: Modal;
    animation-duration: .4s;

    .Meme{
        width: 60%;
        border-radius: 6px;
        filter: drop-shadow(0px 4px 24px rgba(2, 13, 25, 0.2));

        margin: 20px 0;
    }

    @keyframes Modal{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    h1{
        color: #000;
        font-family: 'Nunito', sans-serif;
    }
    p{
        width: 100%;
        font-size: 12px;
        font-weight: bold;
        color: var(--title);
        opacity: 0.6;
        font-family: 'Nunito', sans-serif;
        text-align: center;
    }
`;

export const DismissButton = styled.button`
    background: #3498DB;
    width: 60%; height: 45px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    font-family: 'Nunito', sans-serif;

    transition: all .2s;

    margin: 10px 0;

    &:hover{
        filter: brightness(.9);
    }
`;  