import styled from "styled-components";

export const StyledOverlay = styled.div`
 width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;`

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;`

export const StyledLabel = styled.label`
 margin: 5px 0;
color: #fff;`

export const StyledInput = styled.input`
  width: 300px;
    border: none;
    outline: none;
    margin-bottom: 1rem;
    padding: 8px 10px;
    cursor: pointer; 
    border-radius: 4px; `

export const StyledButton = styled.button`
 background-color: #B53471;
    color: #fff;
    border: none;
    outline: none;
    padding: 8px 25px;
    cursor: pointer;
    border-radius: 4px;`