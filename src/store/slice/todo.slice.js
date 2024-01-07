import { createSlice } from "@reduxjs/toolkit";

/** Using createReducer */
// import { createAction, createReducer } from "@reduxjs/toolkit";
// const addTodo = createAction("TODO/ADD");
// const updateTodo = createAction("TODO/UPDATE");
// const deleteTodo = createAction("TODO/DELETE");

// const initState = [];

// const todoReducer = createReducer(initState, (builder) => {
//     builder.addCase(addTodo, (state, action) => state.push(action.payload))
//     .addCase(updateTodo, (state, action) => state.map((todo, index) => {
//         if(index === action.payload.index) {
//             return action.payload.text
//         }
//         return todo;
//     }))
//     .addCase(deleteTodo, (state, action) => state.filter((_, index) => index !== action.payload))
//     // and provide a default case if no other handlers matched
//     .addDefaultCase((state, action) => {})
// })

/** Using createSlice */

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    updateTodo: (state, action) =>
      state.map((todo, index) => {
        if (index === action.payload.index) {
          return action.payload.text;
        }
        return todo;
      }),
    deleteTodo: (state, action) =>
      state.filter((_, index) => index !== action.payload),
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
