import axios from "axios";
const api = ({dispatch}) => (next) => (action) => {
    if (action.type !== 'api/apiCall') {
        next(action)
        return
    }
    next(action)
    const {url, method, type,data} = action.payload

    axios({
        baseURL : 'https://jsonplaceholder.typicode.com',
        url,
        method,
        data
    }).then(res => {
        dispatch({
            type,
            payload: res.data
        })
    })
}
export default api