import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'src/datalayer/store'

const AppContainer = ({ children }) => (
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <Router>{children}</Router>
    {/* </PersistGate> */}
  </Provider>
)

export default AppContainer
