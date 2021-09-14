
import React, { useEffect, useState } from "react";
import '../styles/CardPoke/cardPoke.css'


const CardPoke = (props) => {

    //PEGANDO ABILIDADE
   // props.dados.species.name.map(e => (
     //   console.log(e.ability.name)
    //))

    return(
        <div>
            <div className="card mb-3" style={{maxWidth: '540px' , marginTop: '200px', display: 'flex', justifyContent: 'center'}}>
            <div className="cardContent row g-0">
                <div className="col-md-4">
                    <img src={props.dados.sprites.front_default} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5><strong>Name:</strong> {props.dados.name}</h5>

                        <h5><strong>Habilidades: </strong>
                            {props.dados.abilities.map(e => (
                            <span> {e.ability.name} /</span>
                            ))}
                        </h5>

                        <h5><strong>Wight:</strong> {props.dados.weight}</h5>

                        <h5><strong>Species:</strong> {props.dados.species.name}</h5>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CardPoke