import { useState } from 'react'
import { url } from "../constants";

export default function useUserApi() {

    const [userList, setUserList] = useState();

    fetch(`${url}/user`,)
        .then((response) =>
            response.json())
        .then((data) =>
            setUserList(data));

    return { userList };
};
