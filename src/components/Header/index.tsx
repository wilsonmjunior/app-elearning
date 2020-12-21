import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'

import { Container, HeaderContent, SearchInput, Title, Point } from './styles'

interface HeaderProps {
  search?: boolean
}

const Header = ({ search }: HeaderProps) => {
  return (
    <Container>
      <HeaderContent>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="#FF6680" />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row' }}>
          <Title>e</Title>
          <Point>.</Point>
          <Title>learing</Title>
        </View>

        <TouchableOpacity>
          <Feather name="power" size={24} color="#FF6680" />
        </TouchableOpacity>
      </HeaderContent>

      {
        search && (
          <SearchInput placeholder="Busque um curso">
            <Feather name="search" size={24} color="#C4C4D1" />
          </SearchInput>
        )
      }
    </Container>
  )
}

export default Header
