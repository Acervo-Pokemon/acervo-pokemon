import { StyleSheet } from 'react-native'
import { colors } from '../../assets/css/styles'

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTop: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginBottom: 10
    },
    image: {
        justifyContent: "center"
    },
    containerImg: {
        flex: 0.65,
        alignItems: 'center',
        height: 200
    },
    containerBottom: {
        marginTop: 10,
        justifyContent: 'center'
    }
})
export default style