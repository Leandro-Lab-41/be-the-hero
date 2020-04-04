import React, {useState} from 'react';
import './styles.css';
import {Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
//import { useState } from 'react';

import api from '../../services/api';


export default function NewIncident(){
    
    const [title, setTitle] = useState('');
    const [description, setdescription] = useState('');
    const [value, setValue ] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };
        try {
            await api.post('incidents', data, {
                headers:{
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }

    return(

        <div className="new-incident-container"> 
        <div className="content">
            <section>
            <img src = {logoImg} alt = "Be The Hero" />
            <h1>Cadastrar Novo Caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

            <Link className = "back-link" to="/profile">
                        <FiArrowLeft size={16} color="E02041"/>
                        Voltar para Home
                    </Link>
            </section>

            <form onSubmit={handleNewIncident}>
                <input 
                placeholder = "Titulo do Caso" 
                value={title}
                onChange={e=> setTitle(e.target.value)}
                />

                <textarea 
                placeholder="Descrição"
                value={description}
                onChange={e=> setdescription(e.target.value)} 
                />

                <input 
                placeholder = "Valor em Reais"
                value={value}
                onChange={e=> setValue(e.target.value)} 
                />


                

                <button className = "button" type="submit">Cadastrar</button>
            </form>
        </div>
        </div>
    )
}