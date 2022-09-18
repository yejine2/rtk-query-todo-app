import React from 'react'
import * as S from './style'

type ContainerProps = {
  children: React.ReactNode
}

function TodoContainer({ children }: ContainerProps) {
  return <S.TodoContainerBlock>{children}</S.TodoContainerBlock>
}

export default TodoContainer
