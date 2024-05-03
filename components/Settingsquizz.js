import React from 'react';
import {Text, View, Button} from 'react-native'
import {Picker} from "@react-native-picker/picker";

import style from '../style.js'

export default class Settingsquizz extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            r : "N'importe",
            t : "N'importe"
        }
    }

    submit(){
        this.props.navigation.navigate('Quizz', {difficult: this.state.r,theme: this.state.t})
    }

    render(){
        return(
            <View>
                <View style={{ position: 'absolute', top: -200 }}>
                    <Text style={style.settingsTitle}>Choix de la difficulté</Text>
                    <Picker
                    selectedValue={this.state.r}
                    style={style.picker}
                    mode={"dialog"}
                    onValueChange={(itemValue) => this.setState({r : itemValue})}
                    >
                        <Picker.Item label="N'importe" value="N'importe" />
                        <Picker.Item label="Facile" value="easy" />
                        <Picker.Item label="Moyen" value="medium" />
                        <Picker.Item label="Difficile" value="hard" />
                    </Picker>
                </View>
                <View>
                    <Text style={style.settingsTitle}>Choix du thème</Text>
                    <Picker
                    selectedValue={this.state.t}
                    style={style.picker}
                    mode={"dialog"}
                    onValueChange={(itemValue) => this.setState({t : itemValue})}
                    >
                        <Picker.Item label="N'importe" value="N'importe" />
                        <Picker.Item label="General Knowledge" value='9' />
                        <Picker.Item label="Entertainment: Books" value="10" />
                        <Picker.Item label="Entertainment: Film" value="11" />
                        <Picker.Item label="Entertainment: Music" value="12" />
                        <Picker.Item label="Entertainment: Musicals & Theatres" value="13" />
                        <Picker.Item label="Entertainment: Television" value="14" />
                        <Picker.Item label="Entertainment: Video Games" value="15" />
                        <Picker.Item label="Entertainment: Board Games" value="16" />
                        <Picker.Item label="Science & Nature" value="17" />
                        <Picker.Item label="Science: Computers" value="18" />
                        <Picker.Item label="Science: Mathematics" value="19" />
                        <Picker.Item label="Mythology" value="20" />
                        <Picker.Item label="Sports" value="21" />
                        <Picker.Item label="Geagraphy" value="22" />
                        <Picker.Item label="History" value="23" />
                        <Picker.Item label="Politics" value="24" />
                        <Picker.Item label="Art" value="25" />
                        <Picker.Item label="Celebrities" value="26" />
                        <Picker.Item label="Animals" value="27" />
                        <Picker.Item label="Vehicles" value="28" />
                        <Picker.Item label="Entertainment: Comics" value="29" />
                        <Picker.Item label="Science: Gadgets" value="30" />
                        <Picker.Item label="Entertainment: Japanese Anime & Manga" value="31" />
                        <Picker.Item label="Entertainment: Cartoon & Animations" value="32" />
                    </Picker>
                </View>
                <View style={{position: 'relative', backgroundColor: "#036ffc", borderRadius: 10, top: 250}}>
                    <Button color={'#FFF'} title='Commencer le quizz' onPress={ () => this.submit() } />
                </View>
            </View>
        )
    }
}