import {TodoStatus} from "./enum/todoStatus"

const todos = [
    {
        id : "1547",
        name : "todo1",
        content : "this is todo 1",
        status : TodoStatus.DONE
    },
    {
        id : "1596",
        name : "todo2",
        content : "this is todo 2",
        status : TodoStatus.WAITING
    },
    {
        id : "1747",
        name : "todo3",
        content : "this is todo 3",
        status : TodoStatus.IN_PROGRESS
    }
]
export default todos