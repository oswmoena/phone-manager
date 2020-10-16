import { GET_USER_LIST } from './types';
import { url } from '../constants'

export const getUserList = payload => ({
    type: GET_USER_LIST,
    payload,
});

export const getUserListApi = () => {
    return (dispatch) => {
        fetch(`${url}/user`)
            .then((response) =>
                response.json())
            .then((data) =>
                dispatch(getUserList(data)))
            .catch((err) => {
                console.error('Error: ', err);
            })
    }
}