import styled from 'styled-components/native'

import { rem } from '../../utils/responsive'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Box = styled.View`
  position: absolute;
  left: 32px;
  width: 100%;
  height: 100px;
  background: #fff;
  border-radius: ${rem(16)};
  justify-content: center;
  padding: 20px 0;
`

export const Content = styled.View`
  margin-left: 56px;
`

interface ProgresProps {
  status: boolean
}

export const ProgressContainerVideo = styled.View<ProgresProps>`
  width: 68px;
  height: 68px;
  background: ${(props) => props.status ? '#61C5BD' : '#FF6680'};
  border-radius: 16px;
  z-index: 2;
`

export const SectionTitle = styled.View`
  width: 60%;
`

export const SectionDetails = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-right: 16px;
`

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Label = styled.Text`
  font-size: 10px;
  color: #C4C4D1;
  margin-right: 16px;
`

export const Title = styled.Text`
  font-size: 15px;
  color: #6C6C80;
`

export const Completed = styled.View`
  background: #61C5BD;
  width: 63px;
  height: 16px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`

export const CompletedText = styled.Text`
  font-size: 10px;
  color: #fff;
`
