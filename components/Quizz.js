import { Text, View, ActivityIndicator, Button } from 'react-native'
import React from 'react'
import style from '../style.js'

export default class Quizz extends React.Component{

    fetchAPI = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error('La requête a échoué');
                }
                return response.json();
            })
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
        })
    }
    
    constructor(props){

        
        super(props)

        this.state = {
            r : this.props.route.params.difficult,
            t : this.props.route.params.theme,
            data : null,
            currentQuestion : 0,
            correctAnswer : 0,
            score : ""
        }
        this.fetchQuestions();
    }
    fetchQuestions = () => {
        let apiUrl = "https://opentdb.com/api.php?amount=20"

        if(this.props.route.params.theme != "N'importe"){
            apiUrl += `&category=${this.state.t}`
        }
        if(this.props.route.params.difficult != "N'importe"){
            apiUrl += `&difficulty=${this.state.r}`
        }
        apiUrl += "&type=multiple";

        setTimeout(() => {
            this.fetchAPI(apiUrl)
                .then(data => {
                    let shuffledNewQuestions = data.results.map(question => {
                        let shuffledAnswers = this.shuffleArray([...question.incorrect_answers, question.correct_answer]);
                        return {
                            ...question,
                            answers: shuffledAnswers
                        };
                    });
                    this.setState({data : shuffledNewQuestions})
                    console.log(this.state.data)
                })
                .catch(error => console.error('Erreur de requête:', error))
            }, 1000)

    }

    submit(answer){
        this.props.navigation.navigate('Quizz', {difficult: this.state.r,theme: this.state.t})
        if(answer == this.state.data[this.state.currentQuestion].correct_answer){
            this.state.correctAnswer++
        }
        console.log(this.state.currentQuestion)
        console.log(this.state.data.length - 1)
        if(this.state.data.length - 2 >= this.state.currentQuestion){
            this.state.currentQuestion++
        } else {
            this.setState({data : null})
            this.setState({currentQuestion : 0})
            this.fetchQuestions()
        }
        this.score()
    }

    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    score = () => {
        let score = `Vous avez ${this.state.correctAnswer}`
        if(this.state.correctAnswer > 1){
            score+= ' bonnes réponses'
        } else {
            score+= ' bonne réponse'
        }
        score+= ` sur ${this.state.currentQuestion}`
        this.setState({score : score})
    }

    render(){
        if(this.state.data === null){
            return(
                <View>
                    <Text style={{marginBottom:10}}>La question arrive...</Text>
                    <ActivityIndicator color={style.color} size='small' />
                </View>
            )
        } else {
            return(
                <View style={style.quizz}>
                    <Text style={style.title}>{this.state.score}</Text>
                    <Text style={style.title}>Questions</Text>
                    <Text>{this.state.data[this.state.currentQuestion].question}</Text>
                    <View style={{position: 'relative', backgroundColor: "#036ffc", borderRadius: 10, top: 50}}>
                        <Button color={'#FFF'} title={this.state.data[this.state.currentQuestion].answers[0]} onPress={ () => this.submit(this.state.data[this.state.currentQuestion].answers[0]) } style={style.button} ></Button>
                    </View>

                    <View style={{position: 'relative', backgroundColor: "#036ffc", borderRadius: 10, top: 70}}>
                        <Button color={'#FFF'} title={this.state.data[this.state.currentQuestion].answers[1]} onPress={ () => this.submit(this.state.data[this.state.currentQuestion].answers[1]) } style={style.button} ></Button>
                    </View>

                    <View style={{position: 'relative', backgroundColor: "#036ffc", borderRadius: 10, top: 90}}>
                        <Button color={'#FFF'} title={this.state.data[this.state.currentQuestion].answers[2]} onPress={ () => this.submit(this.state.data[this.state.currentQuestion].answers[2]) } style={style.button} ></Button>
                    </View>

                    <View style={{position: 'relative', backgroundColor: "#036ffc", borderRadius: 10, top: 110}}>
                        <Button color={'#FFF'} title={this.state.data[this.state.currentQuestion].answers[3]} onPress={ () => this.submit(this.state.data[this.state.currentQuestion].answers[3]) } style={style.button} ></Button>
                    </View>
                </View>
            )
        }
    }
}