const userReducer = (users = [], action) => {
    switch (action.type) {
        case "FETCH_ALL_USERS":
            return action.payload
        case "FETCH_ONE_USER":
            return [action.payload]
        case "ADD_USER":
            return [...users, action.payload]
        default:
            return users
    }
}

export default userReducer