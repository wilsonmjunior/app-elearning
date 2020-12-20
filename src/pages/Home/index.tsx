import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../../components/Header'
import ListCourses, { Course } from '../../components/ListCourses'

import { Container, Content, HeaderContent, Title, Label } from './styles'

const Home = () => {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    async function load () {
      const response = await axios.get('http://localhost:3333/courses')
      setCourses(response.data)
    }

    load()
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <HeaderContent>
          <Title>Categorias</Title>
          <Label>43 cursos</Label>
        </HeaderContent>

        <ListCourses courses={courses} />
      </Content>
    </Container>
  )
}

export default Home
