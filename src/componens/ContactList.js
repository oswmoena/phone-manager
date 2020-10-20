import React, { useEffect, useState } from 'react'
import ContactDetails from './ContactDetails'
import { useDispatch, useSelector } from 'react-redux';
import { userList } from '../selectors';
import { getUserListApi } from '../actions';


const ContactList = () => {

    const dispatch = useDispatch();
    const userData = useSelector(userList)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(getUserListApi());
        userData && setLoading(false);
    }, [dispatch])


    if (loading) {
        return <div className={"col-12 text-center"}>
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="sr-only">Loading...</span>
            </button>
        </div>
    }

    return (
        <div className="container">
            {console.log('y?', userData)}
            <div className="row">
                {userData.map((contact) => (
                    <div className="col-md-4" key={contact.id}>
                        <ContactDetails contact={contact} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactList
