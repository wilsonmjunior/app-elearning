import React from 'react'
import { TouchableOpacity } from 'react-native'

import { Container, Text } from './styles'

type CardProps = {
  nameCourse: string
  numberClass: number
  isDelete?: boolean
}

const CardCourse = ({ nameCourse, numberClass, isDelete }: CardProps) => {
  return (
    <Container>
      <Text>{nameCourse}</Text>
      <Text>{numberClass} aulas</Text>
      {
        isDelete && (
          <TouchableOpacity>
            <Text>delete</Text>
          </TouchableOpacity>
        )
      }
    </Container>
  )
}

export default CardCourse
