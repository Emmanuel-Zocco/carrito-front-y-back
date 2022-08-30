import React from "react";
import {useParams} from 'react-router'
function Editarcliente (){
    const params = useParams ()

    return(
        <div>
<h2>Editar Cliente</h2>
<h3>El ID del usuario es: {params._id} </h3>
        </div>
    )
}
export default Editarcliente