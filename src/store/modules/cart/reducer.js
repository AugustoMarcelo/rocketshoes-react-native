import produce from 'immer';

export default function cart(state = { products: [], adding: [] }, action) {
    switch (action.type) {
        case '@cart/ADD_REQUEST':
            return produce(state, draft => {
                const { id } = action;
                draft.adding.push(id);
            });
        case '@cart/ADD_SUCCESS':
            return produce(state, draft => {
                const { product } = action;
                draft.products.push(product);
                draft.adding.splice(0, 1);
            });
        case '@cart/REMOVE':
            return produce(state, draft => {
                const productIndex = draft.products.findIndex(
                    p => p.id === action.id
                );

                if (productIndex >= 0) {
                    draft.products.splice(productIndex, 1);
                }
            });
        case '@cart/UPDATE_AMOUNT_SUCCESS': {
            return produce(state, draft => {
                const productIndex = draft.products.findIndex(
                    p => p.id === action.id
                );

                if (productIndex >= 0) {
                    draft.products[productIndex].amount = Number(action.amount);
                }
                draft.adding.splice(0, 1);
            });
        }
        case '@cart/UPDATE_AMOUNT_FAILED': {
            return produce(state, draft => {
                draft.adding.splice(0, 1);
            });
        }
        default:
            return state;
    }
}
