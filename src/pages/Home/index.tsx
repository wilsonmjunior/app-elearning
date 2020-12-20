import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import Header from '../../components/Header'
import ListCourses, { Course } from '../../components/ListCourses'

import { Container, Content, HeaderContent, Title, Label } from './styles'
import { usePost } from '../../hooks/api'
import { Text, TouchableOpacity } from 'react-native'

interface User {
  name: string
  email: string
  password: string
}

const Home = () => {
  const [courses, setCourses] = useState<Course[]>([])

  const [result, error, loading, sendData] = usePost<User>({ url: 'users' })

  const user = {
    name: 'Wilson',
    email: 'wilson@example.com',
    password: 'pass123'
  }

  useEffect(() => {
    async function load () {
      const response = await api.get('courses')
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
        <TouchableOpacity onPress={() => sendData(user)}><Text>Delta</Text></TouchableOpacity>

        <ListCourses courses={courses} />
      </Content>
    </Container>
  )
}

export default Home
