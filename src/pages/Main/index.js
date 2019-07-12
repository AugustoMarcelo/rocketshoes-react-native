import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../servies/api';
import {
    Container,
    ProductList,
    Product,
    ProductImage,
    ProductTitle,
    Price,
    AddToCartButton,
    ViewCartInfo,
    AddToCartText,
    ProductCountText,
} from './styles';

export default class Main extends Component {
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
                        <Product>
                            <ProductImage source={{ uri: item.image }} />
                            <ProductTitle>{item.title}</ProductTitle>
                            <AddToCartButton onPress={() => {}}>
                                <ViewCartInfo>
                                    <Icon
                                        name="add-shopping-cart"
                                        size={20}
                                        color="#FFF"
                                    />
                                    <ProductCountText>0</ProductCountText>
                                </ViewCartInfo>
                                <AddToCartText>ADICIONAR</AddToCartText>
                            </AddToCartButton>
                            <Price>{item.price}</Price>
                        </Product>
                    )}
                />
            </Container>
        );
    }
}
