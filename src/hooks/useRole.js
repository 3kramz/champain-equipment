import { useEffect, useState } from "react"
import httpLink from "../ServerLink/serverLink"

const useRole = user=>{
    const [role, setRole]=useState(false)
    const [roleLoading, setRoleLoading]=useState(true)

    useEffect(()=>{
        const email = user?.email
        fetch(`${httpLink}/role/${email}`,{
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setRoleLoading(false)
            setRole(data.role)
        })

    },[user])

    return[role , roleLoading]
}
export default useRole