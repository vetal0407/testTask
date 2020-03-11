import { combineReducers } from 'redux'

import mainReducer from './redusers/main'

const rootReducer = combineReducers({
    main: mainReducer,
})

export default rootReducer
