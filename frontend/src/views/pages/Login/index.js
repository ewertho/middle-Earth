import React from 'react'
import axios from 'axios'

function Process(){

    const URL = "https://localhost:8080"

    function add(){
        axios.post(`${URL}/signup`, {name, img}).then(resp=>{})  
    }
    function search(params){
        const name = params.name
        const password = params.password
        axios.post(`${URL}/signin`, {name, password}).then(resp=>(
            <div>
                <a href="/lading-page"></a>
            </div>
        )).catch(window.alert('usuario ou senha invalido!'))
    }

    return(
        <Register search={search}/>
    )
}