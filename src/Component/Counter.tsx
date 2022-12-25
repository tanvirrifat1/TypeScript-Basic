import React, { useReducer } from 'react';

const initialState={
 count:0
}

type counterStateType={
      count:number
}

const INCREASE= "INCREASE"
const RESET="RESET"
const DECREASE="DECREASE"

type IncreaseActionType={type: typeof INCREASE}
type ResetActionType={type:typeof RESET}
type DecreaseActionType={type:typeof DECREASE}

type CounterActionType= 
 | IncreaseActionType 
 | ResetActionType 
  | DecreaseActionType


const reducer=(state:counterStateType,action:CounterActionType)=>{
switch (action.type) {
    case INCREASE:
       return {count:state.count+1}
    case RESET:
       return {count:0}
    case DECREASE:
       return {count:state.count-1}

    default:
        throw new Error();
}
}

const Counter = () => {

const [state,dispatch]=useReducer(reducer,initialState)
    
    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={()=>{dispatch({type:INCREASE})}}>Increase</button>
            <button onClick={()=>{dispatch({type:RESET})}}>Reset</button>
            <button onClick={()=>{dispatch({type:DECREASE})}}>Decrease</button>
        </div>
    );
};

export default Counter;