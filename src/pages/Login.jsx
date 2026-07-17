import React, { useState } from 'react'
import Navmenu from './Navmenu';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../services/LoginService';

export default function Login() {

  const navigator = useNavigate();

  const[username, setUserName] = useState('')
  const[password, setPassword] = useState('')

  const [errors, setErrors] = useState({
      username: '',
      password: '',
  })

  const formValidation = () =>{
    let valid = true;

      const errorrsCopy = {...errors}


      if (!username.trim()) {
          errorrsCopy.username = 'User name is required. '
          valid = false;
      }

      if (!password.trim()) {
          errorrsCopy.password = 'Password is required. '
          valid = false;
      } 

      setErrors(errorrsCopy);
      return  valid;
  }

  const loginFormHandler = (e)=>{
    e.preventDefault();
    if (formValidation()) {

      const user = {username, password};
      
      userLogin(user).then((response) =>{
        // console.log(response.data);
        localStorage.setItem('user', JSON.stringify(response.data.username));
        localStorage.setItem('role', JSON.stringify(response.data.role));

        switch (response.data.role) {
          case 'ADMIN':
              navigator('/Home');
              break;
          case 'STUDENT':
              navigator('/Home');
              break;
          case 'SUPERVISOR':
              // navigator('/Home');

              console.log("supervisor login here ");
              break;
          default:
              console.log('Unknown user');
      }
           
    }).catch(error => console.error(error));
      // console.log(user);
    }
  }




  return (
    <React.Fragment>
        <Navmenu/>
        <div className="container-fluidh h-fixed bg-light pt-5">
          <div className="row pt-5">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-0">
                <div className="card-body">
                  <p className="lead text-center card-title">Indrustrial practical traning</p>
{/*                   <p className="lead text-center card-title">IPMS Login form</p> */}
                  <form className='p-3'>
                    <div class="input-group mb-3">
                    
                      <input 
                        className={`form-control rounded-1 ${errors.username ? 'is-invalid' : ''}`} 
                        placeholder='Enter username'  
                        value={username}
                         onChange={(e) => setUserName(e.target.value)} 
                         type="text" name="username" />

                         {errors.username && <div className='invalid-feedback'> {errors.username} </div>}
                    </div>
                    <div className="input-group mb-3">
       
                      <input 
                          className={`form-control rounded-1 ${errors.password ? 'is-invalid' : ''}`}  
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}  
                         type="password" name="password" placeholder='Enter your password' />

                        {errors.password && <div className='invalid-feedback'> {errors.password} </div>}
                    </div>
                    <div className="input-group mb-3">
                      <button className="form-control btn btn-warning rounded-1" onClick={loginFormHandler}>Login</button>
                    </div>

                    <div className="input-group mb-3">
                      <p><Link  className='text-none'>Forget password</Link> </p>
                      {/* <p><Link to='/Home' className='text-none'>Forget password</Link> </p> */}
                    </div>
                  </form>
                </div> 
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </React.Fragment>
    
  )
}
