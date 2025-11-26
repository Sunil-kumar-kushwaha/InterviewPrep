import { useState } from "react";
import { useDebounce } from "./utils/useDebounce";

export const Debounce = () => {

    const [userdata, setUserdata] = useState(0);
    const [data, setdata] = useState([]);
    // const timer = useRef<any>(null);

    

    // const debouncedSearch = useCallback((value: any) => {
    //     if (timer.current) clearTimeout(timer.current);
    //     timer.current = setTimeout(() => {
    //         fetch(`https://jsonplaceholder.typicode.com/posts/${value}`).then((response) => response.json()
    //         ).then((json) => setdata(json));
    //     }, 2000)
    // }, []);
    const fetchData = (value: number) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${value}`).then((response) => response.json()
        ).then((json) => setdata(json));
    }
    const debouncedSearch = useDebounce(fetchData, 500)
    const getUserList = (e: any) => {
        const value = e.target.value
        setUserdata(value);
        debouncedSearch(value); // use returned debounced fn
    }




    return (


        <div>   <input type="number" value={userdata} onChange={(e) => { getUserList(e) }} placeholder="Enter the number to get number of people data" />
            {data.length === 0 ? 'Loading...' : (
                <div>
                    {JSON.stringify(data)}
                </div>
            )}

        </div>


    )
}

