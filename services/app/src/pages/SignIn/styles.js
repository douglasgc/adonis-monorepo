import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 84px);
  background: #000;

`;
export const Header = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  img {
    width: 180px;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  img {
    width: 180px;
    margin: 10px 0 10px;
  }
  h3 {
    line-height: 28px;
    padding-bottom: 24px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
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
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    
    text-align: center!important;
    width: 100%;
    display: block;
    color: #000;
    margin-bottom: 12px;
    text-decoration: none;
  }
`;
