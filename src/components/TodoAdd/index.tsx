import React, { useState } from 'react'
import * as S from './style'
import { MdAdd } from 'react-icons/md'

function TodoAdd() {
  const [open, setOpen] = useState(false)

  const onToggle = () => setOpen(!open)

  return (
    <>
      {open && (
        <S.InsertFormPositioner>
          <S.InsertForm>
            <S.Input
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
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
