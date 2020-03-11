import { FETCH_SONGS } from '../actionTypes/main'

export const fetchSongsGet = () => ({type: FETCH_SONGS.GET})
export const fetchSongsStart = () => ({type: FETCH_SONGS.START})
export const fetchSongsSuccess = data => ({
    type: FETCH_SONGS.SUCCESS,
    data
})
export const fetchSongsError = (e) => console.log(e)
