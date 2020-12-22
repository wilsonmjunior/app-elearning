import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { rem } from '../../utils/responsive'

export const Container = styled.View`
  width: ${rem(136)};
  height: ${rem(152)};
  background: #fff;
  border-radius: ${rem(20)};

  margin: 0 ${rem(4)} ${rem(8)} ${rem(4)};
`

export const DeleteButton = styled(BorderlessButton)`
  position: absolute;
  right: 15px;
  top: 15px;
`

export const Section = styled.View`
  margin-top: ${rem(24)};
  margin-left: ${rem(24)};
`

export const Text = styled.Text`
  font-size: ${rem(16)};
  color: #6C6C80;
  font-weight: bold;
`

export const Label = styled.Text`
  font-size: ${rem(10)};
  color: #C4C4D1;
  margin-top: ${rem(4)};
`
