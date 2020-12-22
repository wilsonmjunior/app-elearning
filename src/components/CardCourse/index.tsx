import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

import Math from '../../images/Math.svg'

import { normalize } from '../../utils/responsive'

import { Label } from '../CardLesson/styles'

import { Container, DeleteButton, Section, Text } from './styles'

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
          <DeleteButton>
            <Feather name="trash" size={normalize(16)} color="#C4C4D1"/>
          </DeleteButton>
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
