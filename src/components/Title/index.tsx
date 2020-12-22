import React from 'react'
import styled from 'styled-components/native'

import { rem } from '../../utils/responsive'

const Container = styled.Text`
  font-size: ${rem(20)};
  color: #3D3D4C;
`

interface TitleProps {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => (
  <Container>{children}</Container>
)

export default Title
