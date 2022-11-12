import { createSlice} from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'tasks',

    initialState: {
        tasks: [
            {
                "date": 1667924945290,
                "text": "Пройти собеседование на React разработчика"
            },
            {
                "date": 1668443399262,
                "text": "Выполнить тестовое задание"
            }
        ]
    },
    reducers: {
        addTask: (state, action) => {

            console.log("state: " + state);
            console.log("payload: " + action.payload);

            if (!action.payload.trim())
                return;
            state.tasks.push({ text: action.payload, date: Date.now() + 1000 * 3600 * 24 * 7 });

        },
        deleteTasks: state => {
            state.tasks = [];
        }
    }
})

export const { addTask, deleteTasks } = taskSlice.actions;

export default taskSlice.reducer