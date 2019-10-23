import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
/// project files
import rootReducer from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};
const PReducer = persistReducer(persistConfig, rootReducer);
const logger = createLogger({});
const store = createStore(PReducer, applyMiddleware(logger));
const persistor = persistStore(store);
export  { store, persistor };
