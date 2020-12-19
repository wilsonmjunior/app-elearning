import styled, { css } from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'

import { TabItemProps } from './'

export const Container = styled.View<TabItemProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${(props) => props.focused && css`
    flex: 1;
    width: 100%;
    border-color: #FF6680;
    border-top-width: 2px;
  `}
`

export const Icon = styled(Feather)<TabItemProps>`
  font-size: 24px;
  color: ${(props) => props.focused ? '#FF6680' : '#C4C4D1'};
`

export const TextLabel = styled.Text<TabItemProps>`
  margin-left: 14px;
  font-size: 15px;
  color: ${(props) => props.focused ? '#FF6680' : '#C4C4D1'};
`
