import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex: 1;
    height: 100%;
    width: 100%;
    /* background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */

    .container {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        /* width: 100vw; */
        /* padding: 0 40%; */

        .wrap {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            max-height: 1140px;
        }

        .Typist {
            margin: 20px;
            height: 20px;
            max-height: 20px;
            
        }

        h1 {
            color: #FFF;
            font-size: 65px;
            align-self: center;
            letter-spacing: 5px;
            font-weight: 600;
            margin-bottom: 15px;
            text-align: center;
        }

        span {
            color: #FFF;
            font-size: 24px;
            margin-bottom: 10px;
            height: 100px;
            font-family: 'DM Mono', monospace;
            letter-spacing: 5px;
        }

        button {
            color: #FFF;
            background: red;
            margin: 20px;
        }
    }
`;
