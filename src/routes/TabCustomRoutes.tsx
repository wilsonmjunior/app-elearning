/* eslint-disable react/display-name */
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Feather from 'react-native-vector-icons/Feather'

import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import { Text } from '../components/CardCourse/styles'
import LinearGradient from 'react-native-linear-gradient'

function HomeScreen () {
  return (
    <View>
      <Text>Home!</Text>
    </View>
  )
}

function ListScreen () {
  return (
    <View>
      <Text>Categories!</Text>
    </View>
  )
}

function PostScreen () {
  return (
    <View>
      <Text>New Post!</Text>
    </View>
  )
}

function NotificationsScreen () {
  return (
    <View>
      <Text>Notifications!</Text>
    </View>
  )
}

function SettingsScreen () {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

interface TabItemProps {
  color: string
  size: number
}

const TabRoutes = () => (
  <NavigationContainer
  >
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }: TabItemProps) => {
          let iconName

          switch (route.name) {
          case 'Home':
            iconName = 'home'
            break
          case 'Categories':
            iconName = 'list'
            break
          case 'Post':
            iconName = 'edit'
            break
          case 'Notifications':
            iconName = 'bell'
            break
          case 'Settings':
            iconName = 'settings'
            break
          default:
            iconName = 'circle'
            break
          }
          return <Feather name={iconName} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: '#2735b0',
        inactiveTintColor: '#777',
        showLabel: false
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={ListScreen} />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={() => ({
          tabBarIcon: ({ tintColor }) => (
            <View>
              <LinearGradient
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  marginBottom: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 6,
                  shadowColor: '#9C27B0',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 5
                }}
                start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#D500F9', '#4A148C']}>
                <Feather name="plus" size={26} color='#FFF'/>
              </LinearGradient>
            </View>
          )
        })}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
)

export default TabRoutes
