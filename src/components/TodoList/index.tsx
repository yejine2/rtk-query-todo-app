import React from 'react'
import * as S from './style'
import TodoItem from '../TodoItem'
import { useTodosQuery } from '../../services/todoApi'

function TodoList() {
  const { data: todos, isLoading, isFetching } = useTodosQuery()

  if (isLoading || isFetching) {
    return <S.Loader>Lodaing...</S.Loader>
  }

  return (
    <S.TodoListBlock>
      {todos?.map((todo: any) => (
        <div key={todo.id}>
          <TodoItem todo={todo} />
        </div>
      ))}
    </S.TodoListBlock>
  )
}

export default TodoList
