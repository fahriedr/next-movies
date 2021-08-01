import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    position: fixed;
    z-index: 1;
    background-color: #fff;
    height: 60px;
    display: flex;
    padding: 0px 60px;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    justify-content: space-between;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Logo = styled.h1`
    color: #000;
`;

export const Ul = styled.ul`
    flex: 0 0 800px;
    display: flex;
    justify-content: space-around;
`;

export const Li = styled.li`
    display: inline-flex;
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
`;

export const RightMenu = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;

export const SearchWrapper = styled.div`
    display: flex;
    background-color: #fff;
    height: 35px;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 12px;
    border-radius: 25px;
    border: 1px solid #8c8c8c;
`;

export const SearchBar = styled.input`
    border: none;
    height: 29px;
    outline: none;
    margin-left: 4px;
    font-family: 'Poppins';
`;