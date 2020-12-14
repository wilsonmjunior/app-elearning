import React from 'react'
import { StatusBar, View } from 'react-native'

import { normalize } from './utils/responsive'
import Math from './images/Math.svg'

import Header from './components/Header'
import DeleteMessage from './components/DeleteMessage'

const App = () => {
  console.warn(normalize(50))
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header search />
      {/* <View style={{ flex: 1, backgroundColor: '#f0edf5', marginTop: -69, borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
      </View> */}
      {/* <View
        style={{
          marginTop: normalize(50),
          marginLeft: normalize(10)
        }}
      >
        <Text
          style={{
            fontSize: normalize(18)
          }}
        >
          E-Learning
        </Text>

        <CardCourse nameCourse="Matematica" numberClass={10} isDelete />
        <CardCourse nameCourse="Historia" numberClass={10} />
        <Math width={400} height={200} />
      </View> */}

      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <DeleteMessage />
      </View>
    </>
  )
}

export default App
