import styled from 'styled-components/native'
import { rem } from '../../utils/responsive'

export const Container = styled.View`
  width: ${rem(156)};
  height: ${rem(172)};
  background: #509342;
  border-radius: ${rem(20)};

  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  font-size: ${rem(16)};
  color: #fff;
  font-weight: bold;
`
