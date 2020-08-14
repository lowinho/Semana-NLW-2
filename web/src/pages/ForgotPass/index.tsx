import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { FaHeart } from 'react-icons/fa';

import './styles.css';


function ForgotPass() {
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
          <h1>Eita, esqueceu <br />sua senha?</h1>
          <p>Não esquenta, vamos dar um jeito nisso.</p>
          </div>

          <input type="text" id='input-email' placeholder='E-mail'/>

          </div>



            <button type='submit'>Enviar</button>

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

export default ForgotPass;
