import { useEffect, useState } from "react"

const useRole = email=> {
    const [role, setRole] = useState('')
  
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`).then(res=>res.json()).then(data=>setRole(data.role))
    }, [email])
   

    return role
};

export default useRole;