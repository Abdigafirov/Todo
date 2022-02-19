import api from "./Middleware/api";
import {configureStore} from "@reduxjs/toolkit";
import todo from "./todo";

export default configureStore({

    reducer: {
        todo:todo,
    },
    middleware: [
        api
    ]

})