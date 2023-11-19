import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const { data } = await axios.get('http://localhost:5000/api/user')

        setUsers(data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    console.log(users);
    return (
        <div className="">
            <h1 className="text-center text-5xl py-8 font-semibold">Users</h1>

            <div className="mx-auto flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
                    {
                        users.map((user) => (
                            <User key={user._id} user={user} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Users;