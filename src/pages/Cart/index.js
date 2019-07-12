import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image, TouchableOpacity, TextInput, Text } from 'react-native';
import api from '../../servies/api';

import {
    Container,
    ProductList,
    CartTotalLabel,
    CartTotalValue,
    ProductContainer,
    Product,
    ProductInfo,
    Title,
    Value,
    CartItemSubTotal,
    CartItemCount,
    Amount,
    CartItemTotalValue,
    CheckoutButton,
    CartTotal,
} from './styles';

export default class Cart extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const { products } = this.state;
        const response = await api.get('/products');
        this.setState({ products: [...products, ...response.data] });
    }

    render() {
        const { products } = this.state;
        return (
            <Container>
                <ProductList
                    data={products}
                    keyExtractor={product => String(product.id)}
                    renderItem={({ item }) => (
                        <ProductContainer>
                            <Product>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{ width: 72, height: 72 }}
                                />
                                <ProductInfo>
                                    <Title>{item.title}</Title>
                                    <Value>{item.price}</Value>
                                </ProductInfo>
                                <TouchableOpacity>
                                    <Icon
                                        name="delete-forever"
                                        size={24}
                                        color="#7159c1"
                                    />
                                </TouchableOpacity>
                            </Product>
                            <CartItemSubTotal>
                                <CartItemCount>
                                    <TouchableOpacity>
                                        <Icon
                                            name="remove-circle-outline"
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </TouchableOpacity>
                                    <Amount>1</Amount>
                                    <TouchableOpacity>
                                        <Icon
                                            name="add-circle-outline"
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </TouchableOpacity>
                                </CartItemCount>
                                <CartItemTotalValue>
                                    R$ 595,00
                                </CartItemTotalValue>
                            </CartItemSubTotal>
                        </ProductContainer>
                    )}
                />
                <CartTotal>
                    <CartTotalLabel>TOTAL</CartTotalLabel>
                    <CartTotalValue>R$ 1.050,23</CartTotalValue>
                </CartTotal>
                <CheckoutButton>
                    <Text style={{ color: '#fff' }}>FINALIZAR PEDIDO</Text>
                </CheckoutButton>
            </Container>
        );
    }
}
