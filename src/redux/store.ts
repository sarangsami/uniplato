import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { squaresReducer } from "./reducers/squaresReducer";

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, squaresReducer)

export const store = createStore(persistedReducer);
export const  persistor = persistStore(store)
