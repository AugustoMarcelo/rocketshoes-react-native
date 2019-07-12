import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronReduxSaga from 'reactotron-redux-saga';

if (__DEV__) {
    const tron = Reactotron.configure({ host: '10.193.138.155' })
        .useReactNative()
        .use(reactotronRedux())
        .use(reactotronReduxSaga())
        .connect();

    console.tron = tron;

    tron.clear();
}
