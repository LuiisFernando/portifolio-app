import styled from 'styled-components';

export const Container = styled.div`
    /* background: yellow; */
    height: 42px;
    width: 100%;
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
`;

export const Menu = styled.div`
    display: flex;
    width: 50%;
    height: 100%;

    ul {
        display: flex;
        flex: 1;
        height: 100%;
        width: 50%;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        list-style: none;

        li {
            color: #FFF;
        }
    }
`;