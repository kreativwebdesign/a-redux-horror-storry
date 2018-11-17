import ReactDom from 'react-dom'
import React from 'react'
import { StoreProvider } from 'redux-react-hook';
import store from './redux/store'
import UserList from './user/components/UserList'

ReactDom.render(<StoreProvider value={store}><UserList /></StoreProvider>, document.getElementById('app'))