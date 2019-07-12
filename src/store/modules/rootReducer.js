import { combineReducers } from 'redux';

import main from './main/reducer';
import cart from './cart/reducer';

export default combineReducers({
    main,
    cart,
});
