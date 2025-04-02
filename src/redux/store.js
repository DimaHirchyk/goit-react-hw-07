import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./filtersSlice";
import contactSliceReducer from "./contactsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigContact = {
  key: "contact",
  storage,
};

const persistedContactReducer = persistReducer(
  persistConfigContact,
  contactSliceReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filters: filterSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
