import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    border-radius: 2px;
`;

export const ProductList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    background: #fff;
    border-radius: 2px;
    padding: 5px;
`;

export const ProductContainer = styled.View`
    flex-direction: column;
`;

export const Product = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const ProductInfo = styled.View`
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
`;

export const Title = styled.Text``;

export const Value = styled.Text`
    font-size: 12px;
    color: #222;
`;

export const CartItemSubTotal = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
    padding: 10px 5px;
`;

export const CartItemCount = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Amount = styled.Text`
    margin: 0 3px;
`;

export const CartItemTotalValue = styled.Text`
    color: #222;
    font-size: 16px;
    font-weight: bold;
`;

export const CartTotal = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin: 5px 0;
`;
export const CartTotalLabel = styled.Text`
    font-size: 12px;
    color: #cecece;
`;

export const CartTotalValue = styled.Text`
    font-size: 20px;
    color: #222;
    font-weight: bold;
`;
export const CheckoutButton = styled(RectButton)`
    background: #7159c1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px;
    color: #fff;
    border-radius: 4px;
    margin: 2px;
`;
