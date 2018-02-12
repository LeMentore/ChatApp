const initialState = [
    'Alex', 'John', 'Sam', 'Charlie', 'Mike'
]

const userReducer = (state = initialState, action) => {
    if(action.type === 'ADD_NEW_USER'){
        return state.concat('user_' + Date.now())
    }
    return state
}

export default userReducer;