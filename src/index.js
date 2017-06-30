import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';
import {reducer1,reducer2} from './reducer';
import Son1 from './son1';
import Son2 from './son2';

class App extends Component{
    render(){
        const {text, h1ChangeText, buttonChangeText} = this.props;
        return(
            <div>
                <h1 onClick={h1ChangeText}>{text}</h1>
                <button onClick={buttonChangeText}>click</button>
                <hr />
                <Son1 />
                <hr />
                <Son2 />
            </div>
        )
    }
}

const reducer = combineReducers({reducer1,reducer2});

let store = createStore(reducer);

function mapStateToProps(state){
    return {
        text: state.reducer1.text
    };
}

const h1ChangeAction ={ type:'TEXT_CHANGE'};
const buttonChangeAction ={ type: 'BUTTON_CHANGE'};

function mapDispatchToProps(dispatch){
    return {
        h1ChangeText: () => {dispatch(h1ChangeAction)},
        buttonChangeText: () =>{dispatch(buttonChangeAction)}
    }
}

App = connect(mapStateToProps,mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
)