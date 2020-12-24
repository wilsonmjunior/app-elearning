import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ddd;
  z-index: 2;
`

interface ShimmerProps {
  loading: boolean
}

const ShimmerLoading = ({ loading }: ShimmerProps) => {
  return (
    loading
      ? <Container />
      : <></>
  )
}

export default ShimmerLoading
