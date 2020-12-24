import { Dimensions, Platform, PixelRatio } from 'react-native'

export const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT
} = Dimensions.get('window')

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320

export const normalize = (size: number) => {
  const newSize = size * scale

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export const rem = (size: number) => {
  return `${normalize(size).toString()}px`
}
