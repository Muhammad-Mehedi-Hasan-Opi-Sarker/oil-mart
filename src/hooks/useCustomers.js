import { useEffect, useState } from "react"

const useCustomers=()=>{
    const [customers,setCustomers]=useState([])
    useEffect(()=>{
        fetch('data.json').then(res=>res.json()).then(data=>setCustomers(data))
    },[])
    return [customers,setCustomers];
}
export default useCustomers;