import { useEffect, useState } from 'react';
export const useCompleteCount=()=>{
    const [completeCount,setCompleteCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/data/todoItems.json')
          .then((res) => res.json())
          .then((res) => {
            console.log(`array`,res)
            res.forEach(element => {
                if(element.isComplete){
                    setCompleteCount(completeCount+1);
                }
            });
          });
      }, []);

    return [completeCount,setCompleteCount];

}