import axios from 'axios'
export const GET_TASKS = 'GET_TASKS'
export const POST_TASKS = 'POST_TASKS'

export const getTask = (payload) => {
    return async(dispatch) => {
        console.log("info de actions")
        try {
            let tasks = await axios.get(`http://localhost:3001/task`)
            return dispatch({
                type: GET_TASKS,
                payload: tasks.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const postTask = (data) => {
    return async () => {
        try {
            await axios.post(`http://localhost:3001/task`, data)
        } catch (error) {
        console.log(error)  
        }
    }
}
export const deleteTask = (id) => {
    console.log(id, "line 31 en action")
    return async () => {
        try {
            await axios.delete(`http://localhost:3001/task`, id)
        } catch (error) {
        console.log(error)  
        }
    }
}

export const EditTask = (id) => {
    return async () => {
        try {
            await axios.put(`http://localhost:3001/task`, id)
        } catch (error) {
          console.error(error)  
        }
    }
}

