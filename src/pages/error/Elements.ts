import styled from "styled-components";

export const ErrorWrapper = styled.div`
    padding-top: 200px;
`;

export const ErrorContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.bigScreen}px) {
    }
    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.laptop}px) {
    }
    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.tablet}px) {
        display: flex;
        flex-wrap: wrap;
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    }
`;

export const ErrorInfo = styled.div`
    padding-left: 5px;
    & h1 {
        padding-bottom: 42px;
        text-align: center;
        line-height: 1.46;
        font-size: 60px;
        color: ${({ theme }) => theme.palette.brown};
    }
    & h4 {
        padding-bottom: 80px;
        color: ${({ theme }) => theme.palette.brown};
    }
    & button {
        font-size: 24px;
        line-height: 1.37;
        margin-left: 10px;
        padding: 14px 84.5px;
    }

    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.laptop}px) {
    }
    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.tablet}px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const ErrorPicture = styled.div`
    & img {
        width: 730px;
        height: 586px;
    }

    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.laptop}px) {
        & img {
            width: 528px;
            height: 436px;
        }
    }

    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.tablet}px) {
        & img {
            width: 730px;
            height: 586px;
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        & img {
            width: 440px;
            height: 360px;
        }
    }
`;
