import React, { useState } from 'react'
import noPhoto from '../assets/noPhoto.png'

const ContactDetails = ({ contact }) => {

    const [buttonAppear, setButtonAppear] = useState(false);

    const imgStyles = {
        height: '260px',
        objectFit: 'cover',
    }
    return (
        <div className="card mb-4" key={contact.id}
            onMouseEnter={() => setButtonAppear(true)}
            onMouseLeave={() => setButtonAppear(false)}
            >
            {buttonAppear &&
                <button className="btn btn-primary" onClick={() => (console.log('deleted!'))} >
                    X
                </button>}
            <img
                src={contact.img ? contact.img : noPhoto}
                alt={contact.name}
                className="card-img-top"
                style={imgStyles}
            />
            <div className="card-body">
                <h4>{contact.name}</h4>
                <button className="btn btn-primary" >
                    Favorito
                </button>

            </div>
        </div>
    )
}

export default ContactDetails
