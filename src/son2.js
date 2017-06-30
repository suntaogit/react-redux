import React,{Component} from 'react';
import {connect} from 'react-redux';
import Sonsson from './sonsson';

class Son2 extends Component{
    render(){
        const {son1_text} = this.props;
        return(
            <div>
                <h1>{son1_text}</h1>
                <hr />
                <p>--兄弟2儿子数据</p>
                <h2><Sonsson /></h2>
            </div>
        )
    }    
}
function mapStateToProps(state){
    return {son1_text: state.reducer2.son1_text}
}

export default connect(mapStateToProps)(Son2);