import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import {RecipeReviewCard} from './RecipeReviewCard';

export const FormulariosComponents = () => {

  const [usuario,setUsuario] = useState({});
  const [estado,setEstado] = useState(false);

  const conseguirDatosFormulario = e =>{
    e.preventDefault();
    let datos = e.target;
    let usuario = {
        nombre: datos.nombre.value,
        apellido: datos.apellido.value,
        genero: datos.genero.value,
        biografia: datos.biografia.value,
        enviar: datos.enviar.value
    }
    setUsuario(usuario);
    console.log(usuario);
  }

  const mostrarCard = () =>{
    setEstado(true);
  }

  const quitarCard = () =>{
    setEstado(false);
  }

  const cambiarDatos = e =>{
    let name_del_input = e.target.name;
    console.log(name_del_input);
   /*  let usuario_para_modificar = usuario; */

    //usuario_para_modificar[name_del_input] = e.target.value;

    setUsuario( estado_previo => ({
        ...estado_previo,
        [name_del_input]: e.target.value
    }));

   /*  if(name_del_input === "nombre"){
        usuario_para_modificar.nombre = e.target.value;
    }

    if(name_del_input === "apellido"){
        usuario_para_modificar.nombre = e.target.value;
    }

    if(name_del_input === "genero"){
        usuario_para_modificar.nombre = e.target.value;
    }

    if(name_del_input === "biografia"){
        usuario_para_modificar.nombre = e.target.value;
    } */
  }

  return (
    <>
    <div>
        <h1>Formularios Con React</h1>
        {usuario.enviar &&
            <div className='info_usuario label label-gray'>
                {usuario.nombre}  {usuario.apellido} es un {usuario.genero} y su biografia es esta: <p>{usuario.biografia}</p>
            </div>
         }
        <form onSubmit={conseguirDatosFormulario}>
            <input type="text" name="nombre" placeholder='Nombre' onChange={cambiarDatos}/>
            <input type="text" name="apellido" placeholder='Apellido' onChange={cambiarDatos}/>
            <select name="genero" onChange={cambiarDatos}>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>
            <textarea placeholder='Biografia' name="biografia" onChange={cambiarDatos}></textarea>

            <input type="submit" value="Enviar" name='enviar'/>
              <Box sx={{ '& > :not(style)': { m: 1 } }}>
                  <Fab color="primary" aria-label="add" type="submit">
                      <AddIcon />
                  </Fab>
                  <Fab color="secondary" aria-label="edit" onClick={mostrarCard}>
                      <EditIcon />
                  </Fab>
                  <Fab variant="extended" onClick={quitarCard}>
                      <NavigationIcon sx={{ mr: 1 }} />
                      quitar car
                  </Fab>
                  <Fab disabled aria-label="like">
                      <FavoriteIcon />
                  </Fab>
              </Box>
        </form>
    </div>
    {estado == true && <RecipeReviewCard/>}
    </>
  )
}
