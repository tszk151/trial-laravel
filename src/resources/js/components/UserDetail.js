import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
    const params = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser(params)
    }, [params])

    const getUser = async (params) => {
        const response = await Axios.get(`/api/users/${params.id}`);
        setUser(response.data.user)
    }

    return (
        <div>
            <h1>ユーザー詳細</h1>
            <p>ID: {user.id}</p>
            <p>名前: {user.name}</p>
            <p>メールアドレス: {user.email}</p>
        </div>
    );
}

export default UserDetail;
