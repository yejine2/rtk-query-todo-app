import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Todo } from '../models/todo.model'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    todos: builder.query<Todo[], void>({
      query: () => '/todo',
      providesTags: ['Todo'],
    }),
    addTodo: builder.mutation<{}, Todo>({
      query: (todo) => ({
        url: '/todo',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation<void, string>({
      query: (id) => ({
        url: `/todo/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
    updateTodo: builder.mutation<void, Todo>({
      query: ({ id, ...rest }) => ({
        url: `/todo/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
})

export const {
  useTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todoApi
