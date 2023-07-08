import { useState , useCallback } from 'react';

export const useCounter = () => {
    const [count, setCount] = useState(1);
    const [isShow, setIsShow] = useState(true);
  
    const handleClick = useCallback(()=>{
      if(count<10){
        setCount((prevcount)=>prevcount+1);
      }
    },[count]);
  
    const handleDisplay = ()=>{
      setIsShow((previsShow) => !previsShow);
    }
  
    return {count ,isShow,handleClick,handleDisplay};
  }