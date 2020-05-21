import React from 'react';
import './Application.css';

const message = ['Aplikacja opiera się na otagowanych przepisach',
     'Każdy użytkownik może wprowadzić swój przepis',
    'Każdy użytkownik ma dostęp do przepisu wprowadzonego przez innego użytkownika',
    'Masz dostęp do przepisów w różnych językach',
    'Przepisy wyszukiwane są na podstawie słów-kluczy, które określa się przy wprowadzeniu do bazy'];

const listMessage = message.map((message) => <li>{message}</li>);

class Application extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            color: '',
            fontColor: '',
            text: ''
        }
    }

    handleChangeColorClick = () => {
        this.setState({
            color: 'papayawhip',
            fontColor: 'black'
        })
    }

    handleClick = () => {
        this.setState({
        text: <ul>{listMessage}</ul>
        }
    )}

    render(){
        return(
            <div id="Description">
                <div id="welcome">
                    <h1>Aplikacja kulinarna</h1>
                    <p>Witaj Kucharzu. Zapraszam Cię do mojego kulinarnego świata. <br/>
                    Jeśli nie jesteś pewienm czy dobrze trafiłeś, odpowiedz sobie na następujące pytania:</p>
                    <button onClick = {this.handleChangeColorClick}>Zaczynam!</button>
                    <div id="questions" style= {{backgroundColor: this.state.color, color: this.state.fontColor}}>
                        <p>Czy zdarzyło Ci się planować obiad pod zawartośc lodówki?</p>
                        <p>Czy zdarzyło Ci się mieć ochotę na danie z konkretnego produktu, ale nie wiedziałeś co możesz przyrządzić?</p>
                        <p>A może marzyłeś o przygotowaniu romantycznej kolacji, ale nie miałeś na nią pomysłu?</p>
                    </div>
                    <h3>Jeśli chociaż raz odpowiedziałeś twierdząco, zapraszam Cię do zapoznania się z naszą Kulinarną aplikacją</h3>
                    <button onClick = {this.handleClick}>Wchodzę!</button>
                    <div id="result">
                        {this.state.text}
                    </div>
                </div>
            </div>
        );
    }
}


export default Application;