import axios from 'axios'
import { createContext, useReducer } from 'react'
import { postReducer } from '../reducers/postReducer'
import { url, POSTS_LOADED_SUCCESS, POSTS_LOADED_FATL } from './Constants'

export const PostContext = createContext()

const PostContextProvider = ({ children }) => {
    //state
    const [postState, dispatch] = useReducer(postReducer, {
        posts: [],
        postsLoading: true
    })

    //get all posts
    const getPosts = async () => {
        try {
            const response = await axios.get(`${url}/task`)
            if (response.data.success) {
                dispatch({ type: POSTS_LOADED_SUCCESS, payload: response.data.tasks })
            }
        } catch (error) {
            dispatch({ type: POSTS_LOADED_FATL })
        }
    }

    //post context data
    const postsContextData = { postState, getPosts }
    return (
        <PostContext.Provider value={postsContextData}>
            {children}
        </PostContext.Provider>
    )
}
export default PostContextProvider