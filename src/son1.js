import React,{Component} from 'react';
import {connect} from 'react-redux';

class Son1 extends Component{
    render(){
        const {son1_text} = this.props;
        return(
            <div><h1>{son1_text}</h1></div>
        )
    }
}

const initialState1 = {son1_text:'son1的数据haha'};

export const reducer1 = (state=initialState1, action) => {
    switch(action.type){
        case 'suibian':
            return {son1_text:'随便'};
        default:
            return initialState1;
    }
} 

function mapStateToProps(state){
    return {son1_text: state.reducer1.son1_text}
}

export default connect(mapStateToProps)(Son1);