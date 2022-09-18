import React from 'react'
import * as S from './style'
import { MdDone, MdDelete } from 'react-icons/md'
import { Todo } from '../../models/todo.model'

type TodoProps = {
  todo: Todo
}

function TodoItem({ todo }: TodoProps) {
  return (
    <S.TodoItemBlock>
      <S.CheckCircle done={todo.done}>{todo.done && <MdDone />}</S.CheckCircle>
      <S.Text done={todo.done}>{todo.title}</S.Text>
      <S.Remove>
        <MdDelete />
      </S.Remove>
    </S.TodoItemBlock>
  )
}

export default TodoItem
