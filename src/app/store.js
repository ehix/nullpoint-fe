import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from './api/apiSlice'
import { setupListeners } from "@reduxjs/toolkit/query"
import authReducer from '../features/auth/authSlice'

// Redux store, stores entire state of app in an immutable object tree.
// Have a single store for each application.

export const store = configureStore({
    // Reducers specify how the application's state changes in response to actions sent to the store.
    reducer: {
        // dynamically names, based on the tagTypes array in apiSlice; api by default.
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
    // get default redux middleware and add apiSlice middleware to it, 
    // such as caching, error handling, and dispatching.
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: false
})

setupListeners(store.dispatch)