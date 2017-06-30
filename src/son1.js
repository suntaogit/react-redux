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

function mapStateToProps(state){
    return {son1_text: state.reducer2.son1_text}
}

export default connect(mapStateToProps)(Son1);