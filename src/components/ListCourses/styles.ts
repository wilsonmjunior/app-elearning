import { ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { rem } from '../../utils/responsive'

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 ${rem(15)};
  min-height: 28%;
`
