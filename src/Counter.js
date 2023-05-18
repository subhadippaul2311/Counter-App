import React, { useState } from 'react';
import './Counter.css';
import { ImArrowUp } from 'react-icons/im';
import { ImArrowDown } from 'react-icons/im';
import { ImArrowRight } from 'react-icons/im';
import { ImArrowLeft } from 'react-icons/im';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementByTen = () => {
    setCount(count + 10);
  };

  const decrementByTen = () => {
    setCount(count - 10);
  };

  return (
    <div className="mainDiv">
      <h1>Counter App</h1>

      <div className="childDiv">
        <ImArrowUp onClick={increment} className="up" />

        <div className="leftRight">
          <ImArrowLeft onClick={decrementByTen} />
          <h2>{count}</h2>
          <ImArrowRight onClick={incrementByTen} />
        </div>

        <ImArrowDown onClick={decrement} className="down" />
      </div>
    </div>
  );
};

export default Counter;
