import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';
import api from '../../servies/api';
import * as CartActions from '../../store/modules/cart/actions';
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

export default function Main() {
    const [products, setProducts] = useState([]);

    const amountInCart = useSelector(state =>
        state.cart.products.reduce((sumAmountInCart, product) => {
            sumAmountInCart[product.id] = product.amount;
            return sumAmountInCart;
        }, {})
    );

    const adding = useSelector(state => state.cart.adding);

    const dispatch = useDispatch();

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products');
            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));
            setProducts(data);
        }

        loadProducts();
    }, []);

    function handleAddProduct(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

    return (
        <Container>
            <ProductList
                data={products}
                keyExtractor={product => String(product.id)}
                renderItem={({ item }) => (
                    <Product>
                        <ProductImage source={{ uri: item.image }} />
                        <ProductTitle>{item.title}</ProductTitle>
                        <AddToCartButton
                            onPress={() => handleAddProduct(item.id)}
                        >
                            <ViewCartInfo>
                                {!adding.includes(item.id) ? (
                                    <>
                                        <Icon
                                            name="add-shopping-cart"
                                            size={20}
                                            color="#FFF"
                                        />
                                        <ProductCountText>
                                            {amountInCart[item.id] || 0}
                                        </ProductCountText>
                                    </>
                                ) : (
                                    <ActivityIndicator
                                        size={21}
                                        color="#cecece"
                                        style={{
                                            paddingHorizontal: 6,
                                        }}
                                    />
                                )}
                            </ViewCartInfo>
                            <AddToCartText>ADICIONAR</AddToCartText>
                        </AddToCartButton>
                        <Price>{item.priceFormatted}</Price>
                    </Product>
                )}
            />
        </Container>
    );
}
