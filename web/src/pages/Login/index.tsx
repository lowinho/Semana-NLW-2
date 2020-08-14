import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';

import { FaHeart } from 'react-icons/fa';

import './styles.css';


function Login() {
  return (

    <div id="container" className="container">
      <div className="logo">

      <div className="image-logo">
        <img src={logoImg} id='image-logo'/>
        <p>Sua plataforma de <br /> estudos online.</p>
      </div>
      </div>

      <div className="form">
        <form>

          <div className="login">
            <div className="login-account">
          <h1>Fazer Login</h1>
          <Link to='/' id='new-account'>Criar uma conta</Link>
          </div>
          <input type="text" id='input-text' placeholder='E-mail'/>
          <input type="password" id='input-password' placeholder='Senha'/>
          </div>

          <div className="forget-password">

            <div id='checkbox'>
            <input type='checkbox' />
            <span>Lembrar-me</span>
            </div>


            <Link to='/'>Esqueci minha senha</Link>
          </div>

            <button type='submit'>Entrar</button>

        </form>

        <div className="footer">

        <footer>

        <div className="text-register">
            <div id="register">
              <p>Não tem conta?</p>
              <Link to='/'>Cadastre-se</Link>
            </div>

            <div id='free'>
                <p>É de graça</p>
                <FaHeart size={16} color='#8257E5'/>

            </div>
          </div>

        </footer>
        </div>
      </div>
    </div>


  )
}

export default Login;
