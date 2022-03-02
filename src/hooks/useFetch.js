import React, {useState , useEffect} from 'react'

const useFetch = () => {
   const [error , setError] = useState(false)
   const [data , setData] = useState({})
   const [loading, setLoading] = useState(false)

    useEffect(() =>{

        setLoading(true)
        fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => setError(true))

        setLoading(false)
     
    } , [])
    return {error , loading , data}
}


export default useFetch;