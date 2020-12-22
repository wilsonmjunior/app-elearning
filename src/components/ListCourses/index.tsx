import React from 'react'

import CardCourse from '../CardCourse'

import { Container } from './styles'

export interface Course {
  id: string
  name: string
}

interface ListCoursesProps {
  courses: Course[]
  isDelete: boolean | false
}

const ListCourses = ({ courses, isDelete }: ListCoursesProps) => {
  return (
    <Container>
      {
        courses.map((course) => (
          <CardCourse
            key={course.id}
            nameCourse={course.name}
            numberClass={10}
            isDelete={isDelete}
          />
        ))
      }
    </Container>
  )
}

export default ListCourses
