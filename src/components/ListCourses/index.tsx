import React from 'react'

import CardCourse from '../CardCourse'

import { Container } from './styles'

export interface Course {
  id: string
  name: string
}

interface ListCoursesProps {
  courses: Course[]
}

const ListCourses = ({ courses }: ListCoursesProps) => {
  return (
    <Container>
      {
        courses.map((course) => (
          <CardCourse
            key={course.id}
            nameCourse={course.name}
            numberClass={10}
          />
        ))
      }
    </Container>
  )
}

export default ListCourses
