import React from 'react'
import { ActivityIndicator } from 'react-native'

import Header from '../../components/Header'
import ListCourses, { Course } from '../../components/ListCourses'
import Title from '../../components/Title'

import { useGet } from '../../hooks/api'
import { normalize } from '../../utils/responsive'

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

        {
          !loading
            ? <ListCourses courses={data} isDelete />
            : <ActivityIndicator size="large" color="#6548A3" style={{ marginTop: normalize(100) }} />
        }
      </Content>
    </Container>
  )
}

export default CoursesSaves
