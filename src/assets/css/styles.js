import { StyleSheet } from 'react-native'

const colors = StyleSheet.create({
	blue: {
		color: '#22368E'
	},
	yellow: {
		color: '#FFEC14'
	}
})

const bg_colors = StyleSheet.create({
	blue: {
		backgroundColor: '#22368E'
	}
})

const shadow = StyleSheet.create({
	default: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3,

		elevation: 4
	}
})

const styles = StyleSheet.create({
	shadowDefault: {
		...shadow.default
	},
	fg_blue: {
		...colors.blue
	},
	fg_yellow: {
		...colors.yellow
	},
	bg_blue: {
		...bg_colors.blue
	}
})

export default styles