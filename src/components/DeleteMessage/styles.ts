import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  flex:1;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.2;
`

export const Content = styled.View`
  width: 277px;
  height: 242px;
  background: #f6f6f6;
  border-radius: 16px;

  align-items: center;
  justify-content: space-around;
`

export const IconDelete = styled(Feather).attrs({
  size: 40,
  color: '#FF6680',
  name: 'trash'
})`
`

export const MessageText = styled.Text`
  width: 152px;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #6C6C80;
`

export const SectionButton = styled.View`
  flex-direction: row;
`

export const ConfirmButton = styled(RectButton)`
  height: 40px;
  color: #fff;
  border-radius: 20px;

  align-items: center;
  justify-content: center;

  margin-right: 24px;
`

export const ConfirmButtonText = styled.Text`
  color: #FF6680;
`

export const CancelButton = styled(RectButton)`
  width: 133px;
  height: 40px;
  background: #FF6680;
  color: #fff;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
`

export const CancelButtonText = styled.Text`
  color: #fff;
`
