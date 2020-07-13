import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    background: #2B2B2B;
    padding-bottom: 100px;
`;

export const Row = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;

    @media (max-width: 1024px) {
        flex-direction: column;
    }

`;

export const Avatar = styled.div`
    margin-top: 80px;
    width: 30%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1024px) {
        width: 100%;
        /* margin: 10px; */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

export const AvatarImg = styled.img`
    height: 120px;
    width: 120px;
    border-radius: 100%;
    /* border: 3px solid; */
    /* background: #eee; */
`;

export const About = styled.div`


    /* width: 70%; */
    display: flex;
    flex: 1;
    margin-top: 30px;
    /* margin-left: 10%; */

    @media (max-width: 1024px) {
        /* width: 100%; */
        /* margin: 10px; */
        /* display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center; */
    }

    /* @media (max-width: 360px) {
        margin-left: 5%;
    } */
   

`;

export const Wrap = styled.div`
    display: flex;
    /* flex: 1; */
    flex-direction: column;
    /* align-items: right; */
    margin-left: 5%;

    p {
        /* justify-content: center; */
        letter-spacing: 1px;
        line-height: 30px;
        color: #7A7A7A;
    }

    hr {
        width: 70%;
        margin: 30px 0;
        border-color: rgba(150, 150, 150, .1);
        align-self: center;

        @media (max-width: 1024px) {
            width: 80%;
        }
    }

    .platforms {
        display: flex;
        flex: 1;
        justify-content: center;
        max-height: 100%;

        @media (max-width: 1024px) {
            align-self: center;
        }

        svg {
            margin: 0 10px;
        }
    }
`;

export const Title = styled.div`

    margin-top: 30px;

    h2 {
        color: #FFF;
        margin-bottom: 30px;
    }

    @media (max-width: 1024px) {
        align-self: center;
    }
`;
