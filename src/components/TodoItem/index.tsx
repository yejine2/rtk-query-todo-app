import React from 'react'
import * as S from './style'
import { MdDone, MdDelete } from 'react-icons/md'
import { Todo } from '../../models/todo.model'
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../../services/todoApi'

type TodoProps = {
  todo: Todo
}

function TodoItem({ todo }: TodoProps) {
  const [deleteTodo] = useDeleteTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()

  const onDeleteTodo = (id: any) => {
    deleteTodo(id)
  }

  const onToggleTodo = () => {
    updateTodo({ ...todo, done: !todo.done })
  }

  return (
    <S.TodoItemBlock>
      <S.CheckCircle onClick={onToggleTodo} done={todo.done}>
        {todo.done && <MdDone />}
      </S.CheckCircle>
      <S.Text done={todo.done}>{todo.title}</S.Text>
      <S.Remove onClick={() => onDeleteTodo(todo.id)}>
        <MdDelete />
      </S.Remove>
    </S.TodoItemBlock>
  )
}

export default TodoItem
