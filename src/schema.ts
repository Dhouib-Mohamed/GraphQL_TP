import { createSchema } from "graphql-yoga";
import {hello, infos, allTodos, todoById} from "./query/schema";
const fs = require("fs");
const path = require("path");

const schemaDir = path.join(__dirname, "schema");
const schemaFiles = fs.readdirSync(schemaDir);
export const schema = createSchema({
    typeDefs:
        schemaFiles
            .map((file) => fs.readFileSync(path.join(schemaDir, file), "utf-8"))
            .join("\n"),
    resolvers: {
        Query: {
            hello,
            infos,
            allTodos,
            todoById
        }
    },
});