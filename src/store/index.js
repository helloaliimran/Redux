import { createStore } from "redux";

//create reducer.
const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type == "increment") {
    return {
        showCounter: state.showCounter,
      counter: state.counter + 1,
    };
  } else if (action.type == "decrement") {
    return {
        showCounter: state.showCounter,
      counter: state.counter - 1,
    };
  } else if (action.type == "increase") {
    return {
        showCounter: state.showCounter,
      counter: state.counter + action.amount,
    };
  } else if (action.type == "toogle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter 
    };
  } else {
    return state;
  }
};

//create store.
const store = createStore(counterReducer);

export default store;
