import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reducer from './reducer/reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: 'cartItems',
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);

export default store;
