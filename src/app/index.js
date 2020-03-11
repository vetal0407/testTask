import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/configureStore'

import Main from '../screens/Main/Main'

export default App = () => {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    )
}
