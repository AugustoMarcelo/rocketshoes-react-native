import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Main extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('/products');
        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));
        this.setState({ products: data });
    }

    handleAddProduct = id => {
        const { addToCartRequest } = this.props;

        addToCartRequest(id);
    };

    render() {
        const { products } = this.state;
        const { amountInCart, adding } = this.props;

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
                                onPress={() => this.handleAddProduct(item.id)}
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
                                            size={20}
                                            color="#cecece"
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
}

const mapStateToProps = state => ({
    amountInCart: state.cart.products.reduce((amountInCart, product) => {
        amountInCart[product.id] = product.amount;
        return amountInCart;
    }, {}),
    adding: state.cart.adding,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
