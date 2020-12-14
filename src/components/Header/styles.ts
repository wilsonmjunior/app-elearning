import styled from 'styled-components/native'
import { rem } from '../../utils/responsive'

export const Container = styled.View`
  width: 100%;
  height: ${rem(267)};
  background-color: #6548A3;

  align-items: center;
`

export const SearchInput = styled.TextInput`
  width: 90%;
  height: 56px;
  background-color: #fff;
  margin-top: ${rem(50)};
  border-radius: 100px;

  padding-left: 26px;
`

export const HeaderContent = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${rem(50)};
`

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
`

export const Point = styled(Title)`
  color: #FF6680;
`
