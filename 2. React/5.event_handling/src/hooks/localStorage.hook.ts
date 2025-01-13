import { useEffect, useState } from "react";

export const useLocalStorage = (state: any, storageKey: string) => {
const[storedData, setStoredData] = useState<any>();
const[isInitilized, setIsInitilized] = useState<boolean>(false);
useEffect(() => {
    const data = localStorage.getItem(storageKey);
    try{
        if(data !== null){
            setStoredData(JSON.parse(data));
        }else{
            setStoredData(null)
        }
    }catch{
        setStoredData(data);
    }
    setIsInitilized(true);
}, []);

useEffect(() => {
    if(isInitilized){
        if(typeof(state) === 'object'){
            localStorage.setItem(storageKey, JSON.stringify(state));
        }else{
            localStorage.setItem(storageKey, state.toString());
        }
    }
}, [state, storageKey, isInitilized]);

return{
    storedData
}
}