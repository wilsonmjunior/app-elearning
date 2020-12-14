import React from 'react'
import { TextInput, TextInputProps, View } from 'react-native'

type InputProps = & TextInputProps

const Input = (props: InputProps) => {
  return (
    <View>
      <TextInput {...props} />
    </View>
  )
}

export default Input
