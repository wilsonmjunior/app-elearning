import React from 'react'

import Header from '../../components/Header'
import ListCourses, { Course } from '../../components/ListCourses'
import ShimmerLoading from '../../components/ShimmerLoading'
import Title from '../../components/Title'

import { useGet } from '../../hooks/api'

import { Container, Content, HeaderContent, Label } from './styles'

const Home = () => {
  const [data, loading, error] = useGet<Course>({ url: 'courses' })

  return (
    <Container>
      <Header search />

      <Content>
        <HeaderContent>
          <Title>Categorias</Title>
          <Label>43 cursos</Label>
        </HeaderContent>

        <ListCourses courses={data} loading={loading} />
      </Content>
    </Container>
  )
}

export default Home
