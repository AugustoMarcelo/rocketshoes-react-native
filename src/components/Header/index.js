import React from 'react';
import { useSelector } from 'react-redux';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header, CartInfo, CountText } from './styles';

export default function CustomHeader({ navigation }) {
    const cartSize = useSelector(state => state.cart.products.length);
    return (
        <Header>
            <Image
                source={require('../../assets/logo.png')}
                style={{ width: 200, height: 26, resizeMode: 'cover' }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <CartInfo>
                    <Icon
                        name="shopping-basket"
                        size={24}
                        color="#fff"
                        style={{ marginRight: 5 }}
                    />
                    <CountText>{cartSize}</CountText>
                </CartInfo>
            </TouchableOpacity>
        </Header>
    );
}
