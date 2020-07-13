import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding-bottom: 100px;
`;

export const Row = styled.div`
    display: flex;
    width: 100%;
    /* height: 100%; */
    /* max-height: 240px; */
    flex-direction: row;
    border-bottom: 1px solid #E8E8E8;

    @media (max-width: 1024px) {
        flex-direction: column;
    }


`;

export const Title = styled.div`
    margin-top: 80px;
    width: 30%;
    display: flex;
    justify-content: flex-end;
    height: 42px;

    h2 {
        font: 18px 'Poppins Medium';
        letter-spacing: 1px;
        border-bottom: 3px solid #11ABB0;
        text-transform: uppercase;
    }

    @media (max-width: 1024px) {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-self: center;
    }
`;

export const Information = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: 80px;
    padding-left: 50px;

    @media (max-width: 1024px) {
        width: 100%;
        margin-top: 30px;
        align-self: center;
        padding-left: 0;
    }

    margin-bottom: 20px;

`;

export const College = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 5%;
    margin-bottom: 20px;

    h2 {
        display: flex;
        align-self: left;
    }
    p {
        color: #6E7881;
        font-size: 14px;

        span {
            font-family: 'Poppins Light';
        }
    }

    @media (max-width: 1024px) {
        align-items: center;
        margin-left: 0;
    }
`;

