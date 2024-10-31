import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
const Counter = () => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
   // dispatch({ type: "increment" });
  dispatch(counterActions.increment())
  };

  const decrementHandler = () => {
   // dispatch({ type: "decrement" });
   dispatch(counterActions.decrement())
  };

  const increaseHandler = () => {
    //dispatch({ type: "increase", amount: 5 });
    dispatch(counterActions.increase(5))
  };

  const toggleCounterHandler = () => {
    //dispatch({ type: "toogle" });
    dispatch(counterActions.toogle())
  };


  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {show && (
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
