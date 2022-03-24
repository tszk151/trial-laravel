import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await Axios.get('/api/users');
        setUsers(response.data.users)
    }

    return (
        <div>
            <h1>ユーザー一覧</h1>
            <ul>
                {users.map((user) =>
                <li key={user.id}>
                    {user.name}
                    <Link to={`/users/${user.id}`}>
                        詳細
                    </Link>
                </li>)}
            </ul>
        </div>
    );
}

export default Users;
