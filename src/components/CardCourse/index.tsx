import React from 'react'
import { TouchableOpacity } from 'react-native'

import Math from '../../images/Math.svg'
import { Label } from '../CardLesson/styles'

import { Container, Section, Text } from './styles'

interface CardProps {
  nameCourse: string
  numberClass: number
  isDelete?: boolean
}

const CardCourse = ({ nameCourse, numberClass, isDelete }: CardProps) => {
  return (
    <Container>
      {
        isDelete && (
          <TouchableOpacity>
            <Text>delete</Text>
          </TouchableOpacity>
        )
      }
      <Section>
        <Math />
      </Section>

      <Section>
        <Text>{nameCourse}</Text>
        <Label>{numberClass} aulas</Label>
      </Section>
    </Container>
  )
}

export default CardCourse
