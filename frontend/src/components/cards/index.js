import React from 'react'


export default props=>{

    
    return(
        <div className="card" >
            <img className="card-img-top" src={require("../../assets/img/uriel-soberanes.jpg")} alt="Card cap"></img>
            <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}