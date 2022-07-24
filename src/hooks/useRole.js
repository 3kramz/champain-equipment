import { useEffect, useState } from "react"

const useRole = user=>{
    const [role, setRole]=useState(false)
    const [roleLoading, setRoleLoading]=useState(true)

    useEffect(()=>{
        const email = user?.email
        fetch(`http://localhost:5000/role/${email}`,{
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