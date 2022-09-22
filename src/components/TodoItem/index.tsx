import React from 'react'
import * as S from './style'
import { MdDone, MdDelete } from 'react-icons/md'
import { FaPen } from 'react-icons/fa'
import { Todo } from '../../models/todo.model'
import { useDeleteTodoMutation } from '../../services/todoApi'

type TodoProps = {
  todo: Todo
}

function TodoItem({ todo }: TodoProps) {
  const [deleteTodo] = useDeleteTodoMutation()

  const onDeleteTodo = (id: any) => {
    deleteTodo(id)
  }

  return (
    <S.TodoItemBlock>
      <S.CheckCircle done={todo.done}>{todo.done && <MdDone />}</S.CheckCircle>
      <S.Text done={todo.done}>{todo.title}</S.Text>
      <S.Change>
        <FaPen size={17} />
      </S.Change>
      <S.Remove onClick={() => onDeleteTodo(todo.id)}>
        <MdDelete />
      </S.Remove>
    </S.TodoItemBlock>
  )
}

export default TodoItem
