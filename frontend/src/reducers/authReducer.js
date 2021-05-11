export const authReducer = (state, action) => {
    const { type, payload: { isAuththenticated, user } } = action

    switch (type) {
        case 'SET_AUTH':
            return {
                ...state,
                authLoading: false,
                isAuththenticated,
                user
            }

        default:
            return state
    }
}