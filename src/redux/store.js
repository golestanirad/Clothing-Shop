import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
/// project files
import rootReducer from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};
const middleware = [];

const PReducer = persistReducer(persistConfig, rootReducer);
const logger = createLogger({});
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const store = createStore(PReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);
export { store, persistor };
