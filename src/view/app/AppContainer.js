import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'src/service/store'
import history from 'src/utils/js/history'

const AppContainer = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>{children}</Router>
    </PersistGate>
  </Provider>
)

export default AppContainer
