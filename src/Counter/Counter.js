import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementcounter,
  decrementcounter,
} from "../redux/Action/Counter.Action";

function Counter(props) {
  const C = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementcounter());
  };
  const handleDecrement = () => {
    dispatch(decrementcounter());
  };
  return (
    <div>               
      <button onClick={() => handleIncrement()}>Increment</button>
      <p>{C.counter}</p>
      <button onClick={() => handleDecrement()}>Decrement</button>
    </div>
  );
}

export default Counter;
