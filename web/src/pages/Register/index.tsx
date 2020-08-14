import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { FaHeart } from 'react-icons/fa';

import './styles.css';


function Register() {
  return (

    <div id="container" className="container">

    <div className="back">

      <Link to='/login' id='backIcon'>
       <img src={backIcon} alt="voltar"/>
      </Link>
    </div>

      <div className="form">
        <form>

          <div className="login">
            <div className="login-account">
          <h1>Cadastro</h1>
          <p>Preencha os dados abaixo <br /> para começar.</p>
          </div>
          <input type="text" id='input-name' placeholder='Nome'/>
          <input type="text" id='input-second-name' placeholder='Sobrenome'/>
          <input type="text" id='input-email' placeholder='E-mail'/>
          <input type="password" id='input-password' placeholder='Senha'/>
          </div>



            <button type='submit'>Concluir cadastro</button>

        </form>

        </div>
      <div className="logo">

      <div className="image-logo">
        <img src={logoImg} id='image-logo'/>
        <p>Sua plataforma de <br /> estudos online.</p>
      </div>
      </div>


    </div>


  )
}

export default Register;
