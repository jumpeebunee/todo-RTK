import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "../../types/types";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    fetchAllTodos: builder.query<ITodo[], string>({
      query: () => ({
        url: "/todos",
      }),
      providesTags: (result) => ["Todo"],
    }),
    changeTodoTitle: builder.mutation<ITodo, ITodo>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: ["Todo"],
    }),
    updateTodo: builder.mutation<ITodo, ITodo>({
      query: (todo) => ({
        method: "PUT",
        url: `/todos/${todo.id}`,
        body: todo,
      }),
      invalidatesTags: ["Todo"],
    }),
    createNewTodo: builder.mutation<ITodo, ITodo>({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todo"],
    }),
    deleteTodo: builder.mutation<ITodo, ITodo>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});
