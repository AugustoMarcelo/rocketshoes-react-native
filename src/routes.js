import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import CustomHeader from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            Cart,
        },
        {
            headerBackTitleVisible: false,
            defaultNavigationOptions: navigation => ({
                header: <CustomHeader {...navigation} />,
            }),
        }
    )
);

export default Routes;
