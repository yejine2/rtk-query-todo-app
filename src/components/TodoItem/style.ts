import styled, { css } from 'styled-components'

type TodoItemType = {
  done: boolean
}

export const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`
export const Change = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 2rem;
  cursor: pointer;
  margin-right: 1rem;
  &:hover {
    color: #42a5f5;
  }
  display: none;
`

export const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  &:hover {
    ${Remove} {
      display: initial;
    }
    ${Change} {
      display: initial;
    }
  }
`

export const CheckCircle = styled.div<TodoItemType>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 1.6rem;
  border: 1px solid #ced4da;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  cursor: pointer;
  ${({ done }) =>
    done &&
    css`
      border: 1px solid #ff9800;
      color: #ff9800;
    `}
`

export const Text = styled.div<TodoItemType>`
  flex: 1;
  font-size: 1.9rem;
  color: #495057;
  ${({ done }) =>
    done &&
    css`
      color: #ced4da;
    `}
`
