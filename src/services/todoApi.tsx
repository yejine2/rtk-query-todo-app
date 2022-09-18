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
  }),
})

export const { useTodosQuery } = todoApi
