const initState = {
    counter:1
}
const reducer=(state=initState,action)=>{
    switch(action.type){
        case 'add':
            return {...state,counter:state.counter+action.num};
            break;

        case 'sub':
            return {...state,counter:state.counter-action.num};

    }
}

export default reducer;