import {Platform} from 'react-native'

export const qaid = value => {
  /*
   * TODO: maybe testID will work for both Android and iOS?
   *       so we can remove the branch logic below.
   */
  return Platform.OS === 'android'
    ? {accessibilityLabel: value}
    : {testID: value}
}
