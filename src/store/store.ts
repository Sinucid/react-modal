import { configureStore } from '@reduxjs/toolkit';
import { contentReducer } from './reducers';
import { contentApi } from './services';
import oldContentReducer from './reducers/old_content';

export const store = configureStore({
    reducer: {
        [contentApi.reducerPath]: contentApi.reducer,
        content: contentReducer,
        oldContent: oldContentReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(contentApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;