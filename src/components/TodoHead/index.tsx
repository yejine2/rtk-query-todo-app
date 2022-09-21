import React from 'react'
import * as S from './style'
import { useTodosQuery } from '../../services/todoApi'

function TodoHead() {
  const { data: todos } = useTodosQuery()
  const today = new Date()

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' })

  const undoneTasks = todos?.filter((todo) => !todo.done)

  return (
    <S.TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {undoneTasks?.length}개 남음</div>
    </S.TodoHeadBlock>
  )
}

export default TodoHead
