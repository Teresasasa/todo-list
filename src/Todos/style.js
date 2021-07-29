import styled from "styled-components";
import {MAX_MOBILE_WIDTH, MIN_TABLET_WIDTH} from "./utils";

export const Header = styled.header`
    color: white;
    
    @media only screen and (min-width: ${MIN_TABLET_WIDTH}px) {
    margin-top: 200px;
    font-size: 30px;
    }
    
    @media only screen and (max-width: ${MAX_MOBILE_WIDTH}px) {
    margin-top: 20px;
    font-size: 24px;
    }
`;

export const Input = styled.input`
    border: none;
    margin-top: 20px;
    margin-bottom: 20px;
    
    @media only screen and (min-width: ${MIN_TABLET_WIDTH}px) {
    height:70px;
    width:600px;
    font-size: 30px;
    }
    
    @media only screen and (max-width: ${MAX_MOBILE_WIDTH}px) {
    font-size: 24px;
    height:45px;
    width:300px;
    font-size: 24px;
    }
`;

export const SubmitButton = styled.button`
    background: red;
    color: white;
    border: none;
    margin-top: 20px;
    margin-bottom: 20px;
    
    
    @media only screen and (min-width: ${MIN_TABLET_WIDTH}px) {
    height: 72px;
    width: 130px;
    font-size: 28px;
    }
    
    @media only screen and (max-width: ${MAX_MOBILE_WIDTH}px) {
    height:48px;
    width:48px;
    font-size: 23px;
    }
`;

export const TodoLists = styled.div`
    margin-top: 20px;
    text-align: left;
    color: white;
    margin-bottom: 200px;
`;

export const Todos = styled.span`
    @media only screen and (min-width: ${MIN_TABLET_WIDTH}px) {
    font-size: 30px;
    padding: 15%;
    }
    
    @media only screen and (max-width: ${MAX_MOBILE_WIDTH}px) {
    margin-left: 10%;
    font-size: 24px;
    }
`;

export const DeleteButton = styled.button`
    background: #ffbf00;
    color: #02025c;
    float: right;

    @media only screen and (min-width: ${MIN_TABLET_WIDTH}px) {
    height: 36px;
    width: 150px;
    border-radius: 8px;
    margin-right: 15%;
    font-size: 26px;
    }
    
    @media only screen and (max-width: ${MAX_MOBILE_WIDTH}px) {
    width: 28px;
    height: 28px;
    border-radius:50%;
    margin-right: 10%;
    }
`;

export const Footer = styled.footer`
    color: white;
    font-size: 24px;
    font-style: italic;
    text-decoration:underline;
`;


