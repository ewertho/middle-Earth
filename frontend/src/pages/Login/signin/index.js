import React from 'react'
import axios from 'axios'
import Register from '../../RegisterPage'

function Process(){

  const URL = "https://localhost:8080"

  function search(pass, mail){
    const name = mail
    const password = pass
    axios.post(`${URL}/signin`, {name, password}).then(resp=>(''))
      .catch(window.alert('usuario ou senha invalido!'))
  }

  return(
    <Register search={search}/>
  )
}

export default Process
