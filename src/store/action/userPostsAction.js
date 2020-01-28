export const userPostsAction = (user_data) => async (dispatch, getState) => {
    const user_id = user_data.id

    const myHeaders = new Headers({
        "content-type": "application/json",
    });

    const config = {
        method: 'GET',
        headers: myHeaders,
    };
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`, config);
    const data = await response.json();
    const action = {
        type: 'USER_POSTS',
        payload: data,
    }
    dispatch(action)
    
};