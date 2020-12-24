import React from 'react'

import Header from '../../components/Header'
import ListCourses, { Course } from '../../components/ListCourses'
import Title from '../../components/Title'

import { useGet } from '../../hooks/api'

import { Container, Content, HeaderContent } from './styles'

const CoursesSaves = () => {
  const [data, loading] = useGet<Course>({ url: 'courses' })

  return (
    <Container>
      <Header search />

      <Content>
        <HeaderContent>
          <Title>Cursos Salvos</Title>
        </HeaderContent>

        <ListCourses courses={data} isDelete loading={loading} />
      </Content>
    </Container>
  )
}

export default CoursesSaves
