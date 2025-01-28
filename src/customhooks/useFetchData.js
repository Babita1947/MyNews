import { useEffect, useState } from "react"


const useFetchData = (url) => {
    const [data, setData] = useState([]);

    const fetchDataApi = async() => {
        const response = await fetch(url);

        const jsonData = await response.json();
        setData(jsonData);
    }

    useEffect(() => {
        fetchDataApi();
    },[url]);

    return data?.articles; //optional check
}

export default useFetchData;