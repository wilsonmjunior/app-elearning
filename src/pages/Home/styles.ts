import styled from 'styled-components/native'

import { rem } from '../../utils/responsive'

export const Container = styled.View``

export const Content = styled.View`
  margin-top: ${rem(-50)};
  background-color: #F0EDF5;
  width: 100%;
  height: 100%;
  border-radius: ${rem(24)};
  z-index: 2;
`

export const HeaderContent = styled.View`
  flex-direction: row;
  margin: 24px;
  align-items: center;
  justify-content: space-between;
`

export const Label = styled.Text`
  font-size: ${rem(15)};
  color: #A0A0B2;
`
