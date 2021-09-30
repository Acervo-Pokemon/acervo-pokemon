import { StyleSheet } from 'react-native'
import { defaultColors } from '../const/const'

export const colors = StyleSheet.create({
  blue: {
    color: `${defaultColors.blue}`
  },
  yellow: {
    color: `${defaultColors.yellow}`
  }
})

export const bg_colors = StyleSheet.create({
  blue: {
    backgroundColor: `${colors.blue.color}`
  }
})

export const row = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 14
  }
})

const btn = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 55,
    height: 55
  }
})

export const button = StyleSheet.create({
  default: {
    ...btn.default,
    backgroundColor: `${colors.blue.color}`,
  },
  disabled: {
    ...btn.default,
    backgroundColor: 'grey',
  }
})

export const shadow = StyleSheet.create({
  default: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 4
  }
})