import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabBarItem, { TabItemProps } from './TabBarItem'

import Home from '../pages/Home'
import CoursesSaves from '../pages/CoursesSaves'

const Tab = createBottomTabNavigator()

const TabRoutes = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarIcon: ({ focused }: TabItemProps) => (
            <TabBarItem focused={focused} icon="home" label="Home" />
          )
        })}
      />
      <Tab.Screen
        name="CoursesSaves"
        component={CoursesSaves}
        options={() => ({
          tabBarIcon: ({ focused }: TabItemProps) => (
            <TabBarItem focused={focused} icon="heart" label="Salvos" />
          )
        })}
      />
    </Tab.Navigator>
  </NavigationContainer>
)

export default TabRoutes
