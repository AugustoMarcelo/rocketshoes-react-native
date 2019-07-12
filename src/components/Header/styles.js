import styled from 'styled-components/native';

export const Header = styled.View`
    background: #141419;
    height: 50px;
    flex-direction: row;
    padding: 10px 10px;
    justify-content: space-between;
    align-items: center;
    elevation: 5;
`;

export const CartInfo = styled.View`
    position: relative;
`;

export const CountText = styled.Text`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 10px;
    color: #fff;
    background: #7159c1;
    padding: 2px;
    text-align: center;
    width: 16px;
    border-radius: 8px;
`;
