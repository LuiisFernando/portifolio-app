import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    width: 100%;
    background: url(${props => (props.background ? props.background : 'none')});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        /* width: 100vw; */
        /* padding: 0 40%; */

        h1 {
            color: #FFF;
            font-size: 55px;
            align-self: center;
            letter-spacing: 5px;
        }

        h2 {
            color: #FFF;
            font-family: 'Poppins Thin';
            align-self: center;
        }
        span {
            color: #FFF;
        }
    }
`;

export const Image = styled.img`
    display: flex;
    flex: 1;
    height: 100%;
    width: 100%;
`;
