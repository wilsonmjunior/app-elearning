import React from 'react'
import { ActivityIndicator } from 'react-native'

import Header from '../../components/Header'
import ListCourses, { Course } from '../../components/ListCourses'

import { useGet } from '../../hooks/api'
import { normalize } from '../../utils/responsive'

import { Container, Content, HeaderContent, Title, Label } from './styles'

const Home = () => {
  const [data, loading] = useGet<Course>({ url: 'courses' })

  return (
    <Container>
      <Header search />

      <Content>
        <HeaderContent>
          <Title>Categorias</Title>
          <Label>43 cursos</Label>
        </HeaderContent>

        {
          !loading
            ? <ListCourses courses={data} />
            : <ActivityIndicator size="large" color="#6548A3" style={{ marginTop: normalize(100) }} />
        }
      </Content>
    </Container>
  )
}

export default Home
