import styled from 'styled-components';

export const Container = styled.div`
    height: 42px;
    width: 100%;
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    z-index: 999;
`;

export const Menu = styled.div`
    display: flex;
    width: 50%;
    height: 100%;

    @media (max-width: 1024px) {
        width: 100%;
    }

    ul {
        display: flex;
        flex: 1;
        height: 100%;
        width: 50%;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        list-style: none;

        .nav-item .active {
            color: red;
        }

        li {
            display: flex;
            flex-direction: column;
            position: relative;
            color: #FFF;
            cursor: pointer;
            transition: color 1s;
            text-align: center;
            width: 120px;
            font-size: 15px;
            font-family: 'Poppins Extra Bold';
            

            &:hover {
                color: red;
            }
        }
    }
`;