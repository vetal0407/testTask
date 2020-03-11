import { FETCH_SONGS } from '../actionTypes/main'

const initialState = {
    data: null,
    isLoading: true
}

export default function mainReducer(state = initialState, action){
    switch (action.type){
        case FETCH_SONGS.START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SONGS.SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false
            }
        default :
            return state
    }
}
