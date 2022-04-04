import { useEffect, useState } from "react"

const useReatings = () =>{
    const [reatings, setreatings] = useState([]);
    useEffect( () =>{
        fetch('reatings.json')
        .then(res => res.json())
        .then(data => console.log(data));
    }, []);
    return [reatings, setreatings];
}
export default useReatings;