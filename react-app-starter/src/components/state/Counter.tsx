import { useReducer } from "react";

const initialState = {count : 0 };

interface Counterstate{
    count : number;
}

type ActionType = {
    type : 'increment' | 'decrement';
    payload: number;
}

type ResetAction = {
    type : 'reset'
}

type CounterAction = ResetAction | ActionType ;

function reducer (state : Counterstate, action: CounterAction){
    switch(action.type){
        case 'increment' :
            return { count : state.count + action.payload}
        case 'decrement' :
            return { count : state.count - action.payload}
        default : 
            return state
    }
}


export const Counter = () => {
    const [state, dispatch] = useReducer(reducer , initialState);

    return(
        <>
            count : {state.count}

            <button onClick ={()=> dispatch({type : 'increment' , payload : 10 }) }> 
                increment 10
            </button>
            <button onClick ={()=> dispatch({type : 'decrement' , payload : 10 }) }> 
                decrement 10
            </button>
            <button onClick ={()=> dispatch({type : 'reset' }) }> 
            </button>
        </>
    )
}