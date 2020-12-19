import React from 'react'
import { Container, Icon, TextLabel } from './styles'

export interface TabItemProps {
  focused: boolean
}

export interface TabWithIconProps extends TabItemProps {
  icon: string
  label: string
}

const TabBarItem = ({ focused, icon, label }: TabWithIconProps) => (
  <Container focused={focused}>
    <Icon name={icon} focused={focused} />
    <TextLabel focused={focused}>{label}</TextLabel>
  </Container>
)

export default TabBarItem
