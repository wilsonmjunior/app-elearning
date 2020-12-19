import React from 'react'
import { StatusBar } from 'react-native'

import TabRoutes from './routes/TabRoutes'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TabRoutes />
    </>
  )
}

export default App
