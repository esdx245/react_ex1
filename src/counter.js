import React, { useState } from 'react';
import OddEvenResult from './OddEvenResult';

const Counter = (props) => { //만약 props가 하나일 경우 {}로 감싸면 바로 접근 가능
    const [count, setCount]= useState(props.initialValue);//비구조화 할당으로 count에는 초기값 0을 할당하고 setCount에는 count를 변경할 수 있는 함수를 할당
    const increase = () => {
        setCount(count + 1);//setCount 함수의 괄호는 count의 상태를 변화함
    }
    const decrease = () => {
        count> 0? setCount(count - 1): setCount(0);
    }
    return ( // counter 값이 변화할 경우 함수가 다시 호줄된다. 즉 re-render 된다.
        <div>
            <h2>{count}</h2>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <OddEvenResult count={count}/>
        </div>
    )
}
export default Counter;