import React,{useState} from 'react';

const Increment = () =>{

  

    const [count,setCount]=useState(0);
    
   

    const Ic = () =>{
        setCount(count + 1);
    }

    const Dc = () =>{
        if (count>0){
        setCount(count - 1)
        }
    }

    const Rs = () =>{
        setCount(0)
    }


    return(
        <>
        <h1>{count}</h1>
        <button onClick={Ic}>Increment</button>

        {count>0 && <button onClick={Dc} >Decrement</button>}
        <button onClick={Rs}>Reset</button>
        </>

    );
};

export default Increment;