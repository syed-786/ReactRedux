const initialState = {
arryList : [],
}

const reducer = (state = initialState, action) => {

        switch(action.type){
            case 'ADD' : return {...state, arryList :  state.arryList.concat([action.payload])}
            default : return state;
        }

}

export default reducer;