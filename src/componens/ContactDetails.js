import React, { useState } from 'react'
import noPhoto from '../assets/noPhoto.png'
import Swal from 'sweetalert2'

const ContactDetails = ({ contact }) => {

    const [buttonAppear, setButtonAppear] = useState(false);
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });

    const swalFire = () => {
        swalWithBootstrapButtons.fire({
            title: 'Estás seguro?',
            text: "Estás a punto de eliminar este contacto de tu agenda",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, Elimínalo',
            cancelButtonText: 'No, cancelar',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Eliminado!',
                'El contacto ha sido eliminado!',
                'success'
              )
            } 
            // else if (
            //   /* Read more about handling dismissals below */
            //   result.dismiss === Swal.DismissReason.cancel
            // ) {
            //   swalWithBootstrapButtons.fire(
            //     'Cancelado',
            //     'No se ha realizado ningún cambio',
            //     'error'
            //   )
            // }
          })
    }

    const imgStyles = {
        height: '260px',
        objectFit: 'cover',
    }
    return (
        <div className="card mb-4"
            onMouseEnter={() => setButtonAppear(true)}
            onMouseLeave={() => setButtonAppear(false)}
            >
            {buttonAppear &&
                <button className="btn btn-primary" onClick={() => swalFire()} >
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
