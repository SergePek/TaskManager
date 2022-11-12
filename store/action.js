import { ADDTASK, DELETETASKS } from "./actionType";

export const addTask = (payload) => {
    type:ADDTASK
    payload: payload
}

export const deleteTasks = () => {
    type:DELETETASKS
}