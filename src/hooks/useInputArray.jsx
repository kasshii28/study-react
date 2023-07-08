import { useState , useCallback } from 'react';

export const useInputArray = () =>{
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);
  
    const handleChange = useCallback((e) =>{
      if(e.target.value.length > 5){
        alert("５文字を超えています");
        return ;
      }
      setText(e.target.value.trim());
    },[]);
  
    const handleAdd = useCallback(()=>{
      setArray((prevarray)=>{
        if(prevarray.some(item=>item===text)){
          alert("同じ要素があります");
          return prevarray;
        }
        return [...prevarray,text];
    });

    },[text]);
  
    return {text,array,handleChange,handleAdd}
  }