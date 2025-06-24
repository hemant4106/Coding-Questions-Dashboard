import { useEffect, useState } from "react";
// json-server --watch questions.json --port 5000

function useQuestions(){

    
const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  
  
  useEffect(()=>{async function questions(){
      try{const url = "http://localhost:5000/questions";
        const res = await fetch(url);
        if(!res.ok){
            throw new Error('Failed to load Questions');
        }
        const data = await res.json();
        setQuestions(data);} catch(err){
            setError(err.message )||"something went wrong";
        } finally{
            setLoading(false);
        }
    }
    questions();
    
},[]);
    
    return{questions,loading,error};
    
}
export default useQuestions;