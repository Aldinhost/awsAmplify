//importaciones

import React, {useState} from 'react'
import './card.css';




const Card = () => {
    
    // Logica de la app
        // Declaracion y uso de hooks
        // const [message, setMessage] = useState('Yo soy un estado');
        const [title, setTexto] = useState('Robin hoods')


        // crear funciones auxiliares
        //Funcion para cambiar el titulo de la Card en el evento click
        const changeCardDesc = () =>{

        }



    // render de la app
    return(
        <div className='card'>
            <div className='card_image'>
                <img src='https://cdn0.ecologiaverde.com/es/posts/9/9/7/curiosidades_cientificas_sobre_el_universo_1799_orig.jpg'></img>
            </div>

            <div className='card_copy'></div>

        </div>
    )
}