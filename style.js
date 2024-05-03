import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    color: '#ba0d7b',
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    picker: { 
        height: 50, 
        width: 250 
    },
    title: {
        fontSize: 25,
        alignContent: 'center',
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    button: {
        position: 'absolute',
        bottom: 0
    }
})