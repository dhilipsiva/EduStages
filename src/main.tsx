import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './router'
import { StoreProvider } from 'easy-peasy'
import { store } from './store'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <AppRouter />
    </StoreProvider>
  </React.StrictMode>
)
