import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image, TouchableOpacity, Text } from 'react-native';
import { formatPrice } from '../../util/format';

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
    EmptyCartContainer,
    EmptyCart,
    EmptyCartMessage,
    BackHomeButton,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';

function Cart({
    navigation,
    cart,
    total,
    removeFromCart,
    updateAmountRequest,
}) {
    function increment(product) {
        updateAmountRequest(product.id, product.amount + 1);
    }

    function decrement(product) {
        updateAmountRequest(product.id, product.amount - 1);
    }

    return cart.length > 0 ? (
        <Container>
            <ProductList
                data={cart}
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
                                <Value>{item.priceFormatted}</Value>
                            </ProductInfo>
                            <TouchableOpacity
                                onPress={() => removeFromCart(item.id)}
                            >
                                <Icon
                                    name="delete-forever"
                                    size={24}
                                    color="#7159c1"
                                />
                            </TouchableOpacity>
                        </Product>
                        <CartItemSubTotal>
                            <CartItemCount>
                                <TouchableOpacity
                                    onPress={() => decrement(item)}
                                >
                                    <Icon
                                        name="remove-circle-outline"
                                        size={20}
                                        color="#7159c1"
                                    />
                                </TouchableOpacity>
                                <Amount>{item.amount}</Amount>
                                <TouchableOpacity
                                    onPress={() => increment(item)}
                                >
                                    <Icon
                                        name="add-circle-outline"
                                        size={20}
                                        color="#7159c1"
                                    />
                                </TouchableOpacity>
                            </CartItemCount>
                            <CartItemTotalValue>
                                {item.subtotal}
                            </CartItemTotalValue>
                        </CartItemSubTotal>
                    </ProductContainer>
                )}
            />
            <CartTotal>
                <CartTotalLabel>TOTAL</CartTotalLabel>
                <CartTotalValue>{total}</CartTotalValue>
            </CartTotal>
            <CheckoutButton>
                <Text style={{ color: '#fff' }}>FINALIZAR PEDIDO</Text>
            </CheckoutButton>
        </Container>
    ) : (
        <EmptyCartContainer>
            <EmptyCart>
                <Icon name="remove-shopping-cart" size={128} color="#777" />
                <EmptyCartMessage>
                    Seu carrinho ainda está vazio...
                </EmptyCartMessage>
                <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                    <BackHomeButton>
                        <Text style={{ color: '#fff' }}>VER PRODUTOS</Text>
                    </BackHomeButton>
                </TouchableOpacity>
            </EmptyCart>
        </EmptyCartContainer>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.products.map(product => ({
        ...product,
        subtotal: formatPrice(product.amount * product.price),
    })),
    total: formatPrice(
        state.cart.products.reduce((total, product) => {
            return total + product.price * product.amount;
        }, 0)
    ),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
