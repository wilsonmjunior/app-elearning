import React from 'react'
import { Text } from 'react-native'

import SkeletonContent from 'react-native-skeleton-content-nonexpo'

export default function CoursesSaves () {
  return (
    <SkeletonContent
      containerStyle={{ marginTop: 50, marginLeft: 10, marginRight: 10, flexDirection: 'row', justifyContent: 'space-between' }}
      isLoading={true}
      layout={[
        { key: 'someId', width: 192, height: 100, marginBottom: 6 },
        { key: 'someId2', width: 192, height: 100, marginBottom: 6 }
      ]}
    >
      <Text>Your content</Text>
      <Text style={{ marginTop: 5, fontSize: 20 }}>Other content</Text>
    </SkeletonContent>
  )
}
