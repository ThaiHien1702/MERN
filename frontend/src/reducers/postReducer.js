import { POSTS_LOADED_SUCCESS, POSTS_LOADED_FATL } from '../contexts/Constants'
export const postReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case POSTS_LOADED_SUCCESS:
            return {
                ...state,
                posts: payload,
                postsLoading: false
            }
        case POSTS_LOADED_FATL:
            return {
                ...state,
                posts: [],
                postsLoading: false
            }

        default:
            return state
    }
}