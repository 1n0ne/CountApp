import { useDispatch, useSelector } from "react-redux";
import {plusOne, subOne, reset  } from "./counterSlice"
const Counter = () => {

    const count = useSelector((state) =>(state.CounterR.count));
    
    const dispatch = useDispatch();
    const handeladdOne = () =>{
        dispatch(plusOne());
    }

    const handelreset = () =>{
        dispatch(reset());
    }
    
    const handlesubOne = () =>{
        dispatch(subOne());
    }
    
    return(
<div>
<h2>Count: {count}</h2>
<button onClick={handeladdOne}>+</button>
<button onClick={handelreset}>Rest</button>
<button onClick={handlesubOne}>-</button>
</div>
    );
};

export default Counter;