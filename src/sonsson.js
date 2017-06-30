import React,{Component} from 'react';
import {connect} from 'react-redux';

class Sonsson extends Component{
    render(){
        const {son1_text} = this.props;
        return(
            <div>
                <p>{son1_text}</p>
            </div>
        )
    }    
}

function mapStateToProps(state){
    return {son1_text: state.reducer2.son1_text}
}

export default connect(mapStateToProps)(Sonsson);