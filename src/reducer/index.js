const initialState = {text: 'hello'};
export const reducer1= (state = initialState ,action) => {
    switch(action.type){
        case 'TEXT_CHANGE':
            return {text: '点击H1改变文本'};
        case 'BUTTON_CHANGE':
            return {text: '点击button改变文本'};
        default:
            return initialState;
    }
}

const initialState1 = {son1_text:'son1的数据haha'};
export const reducer2 = (state=initialState1, action) => {
    switch(action.type){
        case 'suibian':
            return {son1_text:'随便'};
        default:
            return initialState1;
    }
} 