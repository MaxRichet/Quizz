import {Text, View} from 'react-native'
import React from 'react'
import style from '../style.js'

export default class Home extends React.Component{
    render(){
        return(
            <View>
                <Text style={style.titleHome}>Bienvenue sur le kuizzzz</Text>
            </View>
        )
    }
}