import { configureStore } from '@reduxjs/toolkit'
import allReducer from './reducers'
import { persistStore, persistCombineReducers, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'
const config = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['themeReducer'],
    whitelist: ['languageReducer'],
    debug: __DEV__, //to get useful logging
};

const sagaMiddleware = createSagaMiddleware()

const reducers = persistCombineReducers(config, allReducer);
const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store, {}, () => {
    // console.log('Test', store.getState());
});
export default store