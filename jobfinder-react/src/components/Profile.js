import React, {useEffect, useState } from 'react';
import axios from 'axios'
import cthulhu from './images/cthulu.jpeg'
//estructura del perfil:
// {
//     id: int
//     name: String,
//     lat: String,
//     lon: String,
//     phone: String,
//     dept: String
// }

const Profile = (props) => { //componente para mostrar la lista de fiscalias

  const [userInfo, setUserInfo] = useState({})

  useEffect(() => { //funciona como un ComponentDidMount, el cual realiza la busqueda del token
    
    console.log(props.token)
    const baseURL = "http://localhost:5000/users/me";
      
    axios.get(baseURL, {
      headers: {
        'Authorization': `Bearer ${props.token}`
      }   
    }).then((response) => {
      setUserInfo(response.data)
    }).catch(err => {
      console.log(err)
    });
  }, [])

    
    return ( //cuerpo del componente.
      <div className='content-container'>
        <div key={1}>
          {userInfo.isEnterprise ? (
            <div>
              <h1>Perfil de la Empresa: </h1>
              <p>Nombre: {userInfo.enterpriseName}</p>
            </div>
          ) : (
            
            <div>
                 <div id="page-wrap">
    
    <img src={cthulhu} alt="Photo of Cthulu" id="pic" width="300" height="300"/>

    <div id="contact-info" class="vcard">
    
    
        <h1>Mi información</h1>
    
        <p color="black">
            Nombre: <span class="name">{ userInfo.firstName }</span><br />
            Apellido: <span class="lastn">{ userInfo.lastName }</span><br />
            Email: <a class="email" >{userInfo.email}</a>
        </p>
    </div>
            
    </div>
              <div class='content-container'>
                <form class='form' >
                  <div class='control block-cube block-input'>
                    Resumen: <input placeholder='Resumen' />
                    <div class='bg-top'>
                      <div class='bg-inner'></div>
                    </div>
                    <div class='bg-right'>
                      <div class='bg-inner'></div>
                    </div>
                    <div class='bg'>
                      <div class='bg-inner'></div>
                    </div>
                  </div><br />
                  <div class='control block-cube block-input'>
                    Educacion: <input placeholder='Educacion' />
                    <div class='bg-top'>
                      <div class='bg-inner'></div>
                    </div>
                    <div class='bg-right'>
                      <div class='bg-inner'></div>
                    </div>
                    <div class='bg'>
                      <div class='bg-inner'></div>
                    </div>
                  </div><br />
                  <div class='control block-cube block-input'>
                    Habilidades: <input placeholder='Habilidades' />
                    <div class='bg-top'>
                      <div class='bg-inner'></div>
                    </div>
                    <div class='bg-right'>
                      <div class='bg-inner'></div>
                    </div>
                    <div class='bg'>
                      <div class='bg-inner'></div>
                    </div>
                  </div><br />
                  <div class='control block-cube block-input'>
                    Experiencia: <input placeholder='Experiencia' />
                    <div class='bg-top'>
                      <div class='bg-inner'></div>
                    </div>
                    <div class='bg-right'>
                      <div class='bg-inner'></div>
                    </div>
                    <div class='bg'>
                      <div class='bg-inner'></div>
                    </div>
                  </div><br />
                  <div class='control block-cube block-input'>
                    Otras Habiilidades: <input placeholder='Otras habilidades' />
                    <div class='bg-top'>
                      <div class='bg-inner'></div>
                    </div>
                    <div class='bg-right'>
                      <div class='bg-inner'></div>
                    </div>
                    <div class='bg'>
                      <div class='bg-inner'></div>
                    </div>
                  </div><br />
                  <div class='control block-cube block-input'>
                    Referencias: <input placeholder='Referencias' />
                    <div class='bg-top'>
                      <div class='bg-inner'></div>
                    </div>
                    <div class='bg-right'>
                      <div class='bg-inner'></div>
                    </div>
                    <div class='bg'>
                      <div class='bg-inner'></div>
                    </div>
                  </div><br />


                  <button class='btn block-cube block-cube-hover' type='submit'>
                    <div class='bg-top'>
                      <div class='bg-inner'></div>
                    </div>
                    <div class='bg-right'>
                      <div class='bg-inner'></div>
                    </div>
                    <div class='bg'>
                      <div class='bg-inner'></div>
                    </div>
                    <div class='text'><a href='http://localhost:3001'>
                      Guardar Informacion</a>
                    </div>
                  </button>
                  
                </form>
                )
              </div>

</div>
          )}
        </div>
      </div>
    )
  }



  export {Profile as default}