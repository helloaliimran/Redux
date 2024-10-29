import { createStore} from "redux"

//create reducer. 
const counterReducer = (state = {counter:0}, action)=>{
    if(action.type=="increment"){
        return {
            counter: state.counter+1
        }
    }
    else if (action.type=="decrement"){
        return {
            counter: state.counter-1
        }
    }
    else {
        return state
    }
};

//create store.
const store = createStore(counterReducer);

export default store;