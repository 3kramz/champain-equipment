import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { setAllUsers } from '../../../../Redux/Actions/userActions';
import httpLink from '../../../../ServerLink/serverLink';

const Users = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        fetch(`${httpLink}/users`).then(res => res.json()).then(data => { dispatch(setAllUsers(data)) }).catch(err => console.log(err))
    }, [dispatch])



    const users = useSelector(state => state.allUsers);
    console.log(users)


    const makeAdmin = (id,role) => {

        fetch(`${httpLink}/user/admin/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({role}),
        })
            .then(res => {
                if (res.status === 403) {
                    swal("You are not authorized to make this user an admin")
                }
                return res.json()
            })
            .then( data => {
                fetch(`${httpLink}/users`).then(res => res.json()).then(data => { dispatch(setAllUsers(data)) }).catch(err => console.log(err))
                swal("Success", `You made him ${role  !== "admin" ? "User":"Admin"}`, "success")
            }).catch(() => swal("Error", "Something went wrong", "error"))

    }



    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, i) =>
                            <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.role  !== "admin" ? "User":"Admin"}</td>
                                <td>{user.role !== "admin" ? <button onClick={() => makeAdmin(user._id, "admin")} className="btn btn-primary btn-xs">Make Admin</button>: <button onClick={() => makeAdmin(user._id, "user")} className="btn btn-primary btn-xs">Romove admin</button> }</td>

                            </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default Users;