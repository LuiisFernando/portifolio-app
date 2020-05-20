import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    width: 100%;
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
        margin: 10px;
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

    /* padding: 0 150px; */
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1024px) {
        width: 100%;
        /* margin: 10px; */
        /* display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center; */
    }
    h2 {
        color: #FFF;
        margin-bottom: 30px;
    }

    p {
        color: #eee;
        display: flex;
        justify-content: center;
        letter-spacing: 1px;
        line-height: 30px;
        color: #7A7A7A;
        text-align: left;

        @media (max-width: 768px) {
            margin: 0 30px;
        }
    }

    hr {
        width: 70%;
        margin: 30px;
        border-color: rgba(150, 150, 150, .1);
    }
`;
