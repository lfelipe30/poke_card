
import React, { useEffect, useState } from "react";
import api from  "../services/api.js"
import '../styles/SelecionarPokemon/selecionarPokemon.css'
import CardPoke from './CardPoke'


const SelecionarPokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const [selecionado, setSelecionado] = useState(null)
    const [dados, setDados] = useState({
                sprites:{
                    front_default: ""
                },

                abilities:[{
                    ability:{
                        name:""
                    }
                }]

    })

    useEffect(() => {
        api.get("")
            .then((response) => setPokemon(response.data.results))
            .catch((e) => {console.error("Ocorreu um erro na sua requisição" + e)})
    }, []) 

    useEffect(() => {
        api.get(`/${selecionado}`)
            .then((response) => setDados(response.data))
            .catch((e) => {console.error("Ocorreu um erro na sua requisição" + e)})
    }, [selecionado]) 
 

    return(
    <>
        <h1 className="titulo">SELECIONE UM POKEMON</h1>

        <div className="principal">
            <select className="form-select" aria-label="Default select example" onChange={(e) => setSelecionado(e.target.value)}>
                    {pokemon?.map(poke => (
                        <option key={poke.name}>{poke.name}</option>
                    ))}
            </select>
             {selecionado ? <CardPoke dados={dados} /> : null}
        </div>
    </> 
    )
}

export default SelecionarPokemon