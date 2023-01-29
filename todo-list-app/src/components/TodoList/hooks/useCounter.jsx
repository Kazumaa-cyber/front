import { useEffect, useState } from 'react';
export const useCounter=()=>{
    const [count,setCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/data/todoItems.json')
          .then((res) => res.json())
          .then((res) => {
            setCount(res.length);
          });
      }, []);

    return [count,setCount];

}