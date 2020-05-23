import React from 'react'
import axios from 'axios'
import Register from '../RegisterPage'

function Process(){

  const URL = "https://localhost:8080"

  function search(params){
    const name = params.name
    const password = params.password
    axios.post(`${URL}/signin`, {name, password}).then(resp=>(''))
      .catch(window.alert('usuario ou senha invalido!'))
  }

  return(
    <Register search={search}/>
  )
}

export default Process
