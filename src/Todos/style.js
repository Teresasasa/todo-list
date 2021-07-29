import styled from "styled-components";

export const Header = styled.header`
    color: white;
    
    @media only screen and (min-width: 768px) {
    margin-top: 200px;
    font-size: 30px;
    }
    
    @media only screen and (max-width: 767px) {
    margin-top: 20px;
    font-size: 24px;
    }
`;

export const Input = styled.input`
    border: none;
    margin-top: 20px;
    margin-bottom: 20px;
    
    @media only screen and (min-width: 768px) {
    height:70px;
    width:700px;
    font-size: 30px;
    }
    
    @media only screen and (max-width: 767px) {
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
    
    
    @media only screen and (min-width: 768px) {
    height: 72px;
    width: 200px;
    font-size: 30px;
    }
    
    @media only screen and (max-width: 767px) {
    height:48px;
    width:48px;
    font-size: 23px;
    }
`;

export const DeleteButton = styled.button`
    background: #ffbf00;
    color: #02025c;
    
    @media only screen and (min-width: 768px) {
    height: 50px;
    width: 150px;
    border-radius: 8px;
    margin-right: 430px;
    font-size: 28px;
    // float: right;
    }
    
    @media only screen and (max-width: 767px) {
    width: 28px;
    height: 28px;
    border-radius:50%
    }
`;

export const TodoLists = styled.section`
    margin-top: 20px;
    text-align: left;
    color: white;
    
    @media only screen and (min-width: 768px) {
    margin-left: 430px;
    font-size: 30px;
    }
    
    @media only screen and (max-width: 767px) {
    margin-left: 80px;
    font-size: 24px;
    }
`;


