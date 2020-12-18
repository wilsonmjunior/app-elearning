import React from 'react'
import {
  Container,
  Content,
  Box,
  ProgressContainerVideo,
  SectionTitle,
  SectionDetails,
  Section,
  Title,
  Label,
  Completed,
  CompletedText
} from './styles'

interface LessonProps {
  title: string
  duration: number
}

const CardLesson = ({ title, duration }: LessonProps) => {

  return (
    <Container>
      <ProgressContainerVideo status />
      <Box>
        <Content>
          <SectionTitle>
            <Title>{title}</Title>
          </SectionTitle>

          <SectionDetails>
            <Section>
              <Label>Aula 02</Label>
              <Label>5 min</Label>
            </Section>

            <Completed>
              <CompletedText>Completo</CompletedText>
            </Completed>
          </SectionDetails>
        </Content>
      </Box>
    </Container>
  )
}

export default CardLesson
