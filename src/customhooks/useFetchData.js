import { useEffect, useState } from "react"


const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading]=useState(false);

    const fetchDataApi = async() => {
        setLoading(true);
        const response = await fetch(url);

        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
    }

    useEffect(() => {
        fetchDataApi();
    },[url]);

    return {data:data?.articles, loading} //optional check
}

export default useFetchData;