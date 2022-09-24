import React, { useState } from 'react'
import * as S from './style'
import { MdAdd } from 'react-icons/md'
import { useAddTodoMutation } from '../../services/todoApi'

function TodoAdd() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [addTodo] = useAddTodoMutation()

  const onToggle = () => setOpen(!open)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  const onSubmit = async (e: any) => {
    e.preventDefault()
    await addTodo({
      id: Math.random(),
      title: value,
      done: false,
    })
    setValue('')
  }

  return (
    <>
      {open && (
        <S.InsertFormPositioner>
          <S.InsertForm onSubmit={onSubmit}>
            <S.Input
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              value={value}
            />
          </S.InsertForm>
        </S.InsertFormPositioner>
      )}
      <S.CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </S.CircleButton>
    </>
  )
}

export default TodoAdd
