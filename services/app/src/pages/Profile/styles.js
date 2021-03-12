import styled from "styled-components";

export const Container = styled.div`
  padding: 12px 24px;
  width: 100%;
  display: flex;
  h2 {
    flex: 1;
  }
  button {
    color: #000;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #00FF12;
    height: 46px;
    border: 0;
    padding: 12px 24px;
  }
`;
export const Content = styled.div`
  padding: 12px 24px;
  width: 100%;
  display: block;
  h2 {
    flex: 1;
  }
  button {
    color: #000;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #00FF12;
    height: 46px;
    border: 0;
    padding: 12px 24px;
  }
`;

export const Form = styled.form`
  background: #fff;
  width: 100%;
  margin-top: 10px;
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 12px 24px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #00FF12;
    height: 46px;
    border: 0;
    width: 100%;
  }
`;