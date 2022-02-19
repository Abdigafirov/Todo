import {createSlice} from '@reduxjs/toolkit'
import {apiCall} from "./api";


const todo = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        page:1
    },
    reducers: {
        getTodos: (state, action) => {
            state.todos = action.payload.filter((item,index)=>index>=0&&index<10)
        },
        saveTodos: (state, action) => {
            state.todos.unshift(action.payload)
        },
        filter: (state, action) => {
            state.todos = action.payload.filter((item,index)=>(index>=(state.page-1)*10 && index< state.page*10))
        },
        next:(state,action)=>{
          state.page++
        },
        prev:(state,action)=>{
            if (state.page!==1){
                state.page--
            }
        },

        updatedTodos: (state, action) => {
            state.todos.map(item => {
                if (item.id === action.payload.id) {

                    if (item.title === action.payload.title) {
                        item.completed = action.payload.completed
                    } else {
                        item.title = action.payload.title
                        item.userId = action.payload.userId
                    }
                }

            })
        },
        delet: (state, action) => {
            state.todos.splice(action.payload,1)
        },

    }
    })
export const getTodos = () => apiCall({
    url: '/todos',
    method: 'get',
    type: todo.actions.getTodos.type,

})
export const saveTodos = (data) => apiCall({
    url: '/todos',
    method: 'post',
    data,
    type: todo.actions.saveTodos.type,

})
export const editTodos = (data) => apiCall({
    url: '/todos/' + data.id,
    method: 'put',
    data,
    type: todo.actions.updatedTodos.type,

})
export const delet = () => ({
    type: todo.actions.delet.type,
})
export const filter = (data) => apiCall({
    url: '/todos',
    method: 'get',
    data,
    type: todo.actions.filter.type,
})
export const onNext=()=>({
    type: todo.actions.next.type,

})
export const onPrev=()=>({
    type: todo.actions.prev.type,

})

export default todo.reducer