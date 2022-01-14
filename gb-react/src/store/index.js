import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { chatsReducer } from './chats/reducer';
import { messagesReducer } from './messages/reducer';
import { profileReducer } from "./profile/reducer";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { newsReduser } from './news/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    news: newsReduser,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);