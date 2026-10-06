import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    // 숫자 1 증가 핸들러(함수)
    const increment = () => {
        setCount(count + 1);
    }
    // 숫자 1 감소 핸들러(함수)
    const decrement = () => {
        setCount(count - 1);
    }

    return(
        <div>
            <h2>Make counter</h2>
            <h3>Now count: {count}</h3>
            <button onClick={increment}> +증가 </button>
            <button onClick={decrement}> -감소 </button>
            <button onClick={() => setCount(0)}> 초기화 </button>
        </div>
    )
}
export default Counter;
