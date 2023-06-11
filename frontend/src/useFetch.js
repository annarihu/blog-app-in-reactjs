import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState([]);

    useEffect( () => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok){
                    throw Error("Could not fetch data for that resource!");
                }
                return res.json()
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
                setError([]);
            })
            .catch((e) => {
                if(e.name === "AbortError"){
                    console.log("Fetch aborted");
                }
                else{
                    setIsLoading(false);
                    setError(e.message);
                }
            })
        }, 1000)

        return () => abortCont.abort();

    },[url]);

    return { data, isLoading, error}
}

export default useFetch;