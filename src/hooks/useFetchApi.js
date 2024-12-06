import { useState } from "react"

export default async function useFetchApi(x) {
    const [api, setApi]=useState([])
    try{
        let res = await fetch(x)
        if(!res.ok){
            console.log(`http Error : ${res.status}`)
        }
        const data = res.json()
        return data
       console.log(data)
    }
    catch(err){
        console.log(`fetching error problem ${err}`)
    }
    
}