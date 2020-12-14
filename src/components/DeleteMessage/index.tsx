import React from 'react'
import {
  Container,
  IconDelete,
  MessageText,
  SectionButton,
  ConfirmButton,
  ConfirmButtonText,
  CancelButton,
  CancelButtonText,
  Content
} from './styles'

const DeleteMessage = () => {
  return (
    <Content>
      <IconDelete />

      <MessageText>Quer excluir suas aulas de Matemática?</MessageText>

      <SectionButton>
        <ConfirmButton>
          <ConfirmButtonText>Não</ConfirmButtonText>
        </ConfirmButton>

        <CancelButton>
          <CancelButtonText>Com certeza</CancelButtonText>
        </CancelButton>
      </SectionButton>
    </Content>
  )
}

export default DeleteMessage
