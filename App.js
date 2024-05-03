import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'

import style from './style.js'
import Home from './components/Home.js'
import Quizz from './components/Quizz.js'
import Settingsquizz from './components/Settingsquizz.js'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function HomeScreen(){
  return(
    <View style={style.container} >
      <Home />
    </View>
  )
}

function StartquizzScreen(){
  return(
    <Stack.Navigator initialRouteName='Settingsquizz'>
      <Stack.Screen name='Settingsquizz' component={SettingsquizzScreen} />
      <Stack.Screen name='Quizz' component={QuizzScreen} />
    </Stack.Navigator>
  )
}

function QuizzScreen({route, navigation}){
  return(
    <View style={style.container} >
      <Quizz route={route} navigation={navigation} />
    </View>
  )
}

function SettingsquizzScreen({route, navigation}){
  return(
    <View style={style.container} >
      <Settingsquizz route={route} navigation={navigation} />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions= {({route}) => ({
          tabBarIcon : ({focused, color, size}) => {
  
            let name = 'asterisk'
  
            if(route.name === 'Home')
              name='home'
            else if(route.name === 'StartQuizz')
              name = 'question'
  
            return <FontAwesome name={name} size={24} color={color} />
          },
          tabBarActiveTintColor : '#036ffc',
          tabBarInactiveColor : '#333333',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="StartQuizz" component={StartquizzScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}