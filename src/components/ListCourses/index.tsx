import React from 'react'

import CardCourse from '../CardCourse'
import { Text } from '../CardCourse/styles'
import ShimmerLoading from '../ShimmerLoading'

import { Container } from './styles'

export interface Course {
  id: string
  name: string
}

interface ListCoursesProps {
  courses: Course[]
  isDelete?: boolean | false
  loading: boolean
}

const ListCourses = ({ courses, isDelete, loading }: ListCoursesProps) => {
  return (
    <Container>
      <ShimmerLoading loading={loading} />

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
