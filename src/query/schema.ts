import todos from "../bd"
import {GraphQLError} from "graphql/error";

const hello = (_, { name }) => `Hello ${name || 'World'}`;
const infos = ()=>({name:"ali",age:16,posts:[{title:"post1"}]})
const allTodos = () => {
    return todos
}
const todoById = (_, { id }) => {
    const element =  todos.find((element)=>element.id===id)
    if (!element) {
        throw new GraphQLError(`Todo with id '${id}' not found.`, {
            extensions: {
                http: {
                    status: 400,
                    headers: {
                        "x-custom-header": "some-value",
                    },
                },
            },
        })
    }
    return element
}

export {hello , infos , allTodos , todoById }