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
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 10
    },
    quizz: {
        marginHorizontal: 30,
        textAlign: 'center'
    },
    titleHome: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#036ffc'
    },
    settingsTitle: {
        marginBottom: -30,
        fontSize: 25,
        alignContent: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center'
    }
})