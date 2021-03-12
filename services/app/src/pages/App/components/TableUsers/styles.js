import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    margin: 0px;
    border: 1px solid #efefef;

    th {
        color: #000;
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        background-color: #00ff121c;
        height: 46px;
        text - align: left;
        
    }

    td, th {
        padding: 10px;
        text - align: left;
        margin: 0px;
        height: 46px;
    }
    tr:nth-child(odd) {
        background: #efefef73;
    }

    .labels tr td {
        background - color: #00FF12;
        font - weight: bold;
        color: #fff;
    }
`;

export const Button = styled.button`
    height: 32px!important;
    line-height: 32px!important;
    padding: 0px 12px!important;
    background: #efefef!important;
    margin-right: 12px!important;
`;
