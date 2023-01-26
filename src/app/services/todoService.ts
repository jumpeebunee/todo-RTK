import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodo } from '../../types/types';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    fetchAllTodos: builder.query<ITodo[], string>({
      query: () => ({
        url: '/todos',
      }),
      providesTags: (result) => ['Todo'],
    }),
    updateTodo: builder.mutation<ITodo, ITodo>({
      query: (todo) => ({
        method: 'PUT',
        url: `/todos/${todo.id}`,
        body: todo,
      }),
      invalidatesTags: ['Todo'],
    })
  })
})