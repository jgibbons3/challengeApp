const initialState = {
    posts: []
    // {
    //     access: tokenInLocalStorage ?  tokenInLocalStorage : ""
    // }
  };

const userPostsReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'USER_POSTS':
            // localStorage.setItem(action.payload.id);
            return {
                ...state,
                posts: action.payload
            }
          
        default:
            return state;
    }
}

export default userPostsReducer;