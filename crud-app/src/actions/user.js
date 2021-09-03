import * as api from '../Service/api'

export const getUsers = () => async (dispatch)=> {
    try {
        await api.getUsers().then(
            (res) => {
                const { data } = res
                dispatch({ type: 'FETCH_ALL_USERS', payload: data })
            })
        .catch(err => console.log(err))
    } catch (error) {
        console.log(error.message);
    }    
}

export const getoneUser = (id) => async (dispatch)=> {
    try {
        const { data } = await api.getoneUser(id)
        dispatch({ type: 'FETCH_ONE_USER', payload: data })
    } catch (error) {
        console.log(error.message);
    }    
}

export const addUser = (user) => async (dispatch)=> {
    try {
        const { data } = await api.addUser(user)
        dispatch({ type: 'ADD_USER', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}