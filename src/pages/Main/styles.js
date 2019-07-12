import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background: #42a5f5;
`;

export const ProductList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    padding: 10px;
`;

export const Product = styled.View`
    background: #fff;
    flex-direction: column;
    padding: 10px;
    border-radius: 2px;
    margin-bottom: 10px;
    position: relative;
    elevation: 5;
`;

export const ProductImage = styled.Image`
    width: 164px;
    height: 164px;
    flex: 1;
    align-self: center;
`;

export const ProductTitle = styled.Text`
    color: #222;
    font-size: 14px;
    margin: 10px 0;
`;

export const Price = styled.Text`
    position: absolute;
    top: 0px;
    right: 0px;
    background: #7159c1;
    color: #fff;
    padding: 5px;
    border-bottom-left-radius: 2px;
    border-top-right-radius: 2px;
    font-size: 16px;
    elevation: 2;
`;

export const AddToCartButton = styled(RectButton)`
    background: #7159c1;
    flex-direction: row;
    border-radius: 4px;
    align-items: center;
`;

export const ViewCartInfo = styled.View`
    background: rgba(0, 0, 0, 0.3);
    flex-direction: row;
    padding: 10px;
    justify-content: space-between;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`;

export const AddToCartText = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    flex: 1;
    text-align: center;
`;

export const ProductCountText = styled.Text`
    margin-left: 5px;
    color: #fff;
    font-size: 14px;
`;
