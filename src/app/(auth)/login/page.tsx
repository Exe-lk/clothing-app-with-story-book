'use client'

import styles from './page.module.scss';
import React, {useState} from 'react';
// import valiconm 'validator';
import login from '../../../../public/assets/loginRegister/login1.svg'
import register from '../../../../public/assets/loginRegister/register.png'
import { registeredUsers } from '@/dummy data/registeredUsers';
import { useLogin } from '@/components/LoginContext';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const LoginPage = () => {
  const {isLogIn, setIsLogIn} = useLogin();
  const PasswordErrorMessage = () => { 
    return ( 
      <p className={styles.FieldError}>Password should have at least 8 characters</p> 
    ); 
   }; 

   const ValidateEmail = () => { 
    return ( 
        <p className={styles.FieldError}>Please enter a valid email</p> 
   )}; 

  

  // const IsFormValid = () => { 
  //   return ( 
  //     firstName &&  
  //     password.value.length >= 8 &&
  //     // validator.isEmail(email.value)
  //   ); 
  // }; 

  
  const clearForm = () => { 
    setName(""); 
    setLoginEmail({ 
      value: "", 
      isTouched: false, 
    }); 
    setRegEmail({ 
      value: "", 
      isTouched: false, 
    }); 
    setLoginPassword({ 
      value: "", 
      isTouched: false, 
    }); 
    setRegPassword({ 
      value: "", 
      isTouched: false, 
    }); 
    setConPassword({ 
      value: "", 
      isTouched: false, 
    }); 
  }; 
  
  const handleSubmit = (e:any) => { 
    e.preventDefault(); 
    clearForm(); 
  }; 
  const logInSubmit = () =>{
    // registeredUsers.map((user:any)=>{
    //   return(<>
    //     {loginEmail.value===user.email && loginPassword.value===user.pw ? setIsLogIn(true) : alert('login failed...')}
    //     {isLogIn===true?redirect("/dss"):''}
    //   </>
    //   )
    // })
    alert("login")
  }

  const [action, setAction] = useState('');
  const [name, setName] = useState(""); 
  const [regEmail, setRegEmail] = useState({ 
    value: "", 
    isTouched: false, 
  }); 
  const [loginEmail, setLoginEmail] = useState({ 
    value: "", 
    isTouched: false, 
  }); 
  const [regPassword, setRegPassword] = useState({ 
    value: "", 
    isTouched: false, 
  }); 
  const [loginPassword, setLoginPassword] = useState({ 
    value: "", 
    isTouched: false, 
  }); 
  const [conPassword, setConPassword] = useState({ 
    value: "", 
    isTouched: false, 
  }); 

  // const registerSubmit = (e:any)=>{
  //   window.localStorage.setItem('registeredUsers', name)
  //   console.log('data added')
  // }
  

  const RegisterLink = ()=>{
    setAction('active')
  }

  const LoginLink = ()=>{
    setAction('')
  }
  const router = useRouter()
  return (
    // <div className={`${styles.wrapper}${action}`}>
    //   <div className={[`${styles.form}`, `${styles.login}`].join(' ')}>
    //     <form action="">
    //       <h1>Login</h1>
    //       <div className={styles.inputBox}>
    //         <input type="text" placeholder='Username' required />
    //         <FaUser className={styles.icon}/>
    //       </div>
    //       <div className={styles.inputBox}>
    //         <input type="password" placeholder='Password' required />
    //         <FaLock className={styles.icon}/>
    //       </div>
            
    //       <div className={styles.rememberForgot}>
    //         <label>
    //           <input type="checkbox" />Remember me
    //         </label>
    //         <a href="#">Forgot password</a>
    //       </div>

    //       <button type='submit'>Login</button>
    //       <div className={styles.registerLink}>
    //         <p>Don't have an account?
    //           <a href="#" onClick={RegisterLink}>Register</a>
    //         </p>
    //       </div> 
    //     </form>
    //   </div>
      
    //   <div className={[`${styles.form}`, `${styles.register}`].join(' ')}>
    //   <form onSubmit={handleSubmit}> 
    //       <h1>Register</h1>

    //       <div className={styles.inputBox}>
    //         <input type="text" 
    //         value={firstName}  
    //         placeholder='First name'
    //         onChange={(e) => { 
    //           setFirstName(e.target.value); 
    //         }} 
    //         required />
    //         <FaUser className={styles.icon}/>
    //       </div>

    //       <div className={styles.inputBox}>
    //         <input type="text" 
    //         value={lastName}  
    //         placeholder='Last name' 
    //         onChange={(e) => { 
    //           setLastName(e.target.value); 
    //         }} 
    //         required />
    //         <FaUser className={styles.icon}/>
    //       </div>

    //       <div className={styles.inputBox}>
    //         <input type="email" 
    //         value={email.value}  
    //         placeholder='Email' 
    //         onChange={(e) => { 
    //           setEmail({ ...email, value: e.target.value }); 
    //         }} 
    //         onBlur={() => { 
    //           setEmail({ ...email, isTouched: true }); 
    //         }} 
    //         required />
    //         <FaEnvelope className={styles.icon}/>
    //         {
    //           // email.isTouched && !validator.isEmail(email.value)?(<ValidateEmail/>):null
    //         }
    //       </div>
          
    //       <div className={styles.inputBox}>
    //         <input type="password" 
    //         value={password.value}  
    //         placeholder='Password' 
    //         onChange={(e) => { 
    //           setPassword({ ...password, value: e.target.value }); 
    //         }} 
    //         onBlur={() => { 
    //           setPassword({ ...password, isTouched: true }); 
    //         }} 
    //         required />
    //         <FaLock className={styles.icon}/>
    //         {password.isTouched && password.value.length < 8 ? ( 
    //          <PasswordErrorMessage /> 
    //        ) : null} 
    //       </div>
            
    //       <div className={styles.rememberForgot}>
    //         <label>
    //           <input type="checkbox" />Remember me
    //         </label>
    //         <a href="#">Forgot password</a>
    //       </div>

    //       <button 
    //       type='submit'
    //       // disabled={!IsFormValid()}
    //       >
    //         Register
    //       </button>

    //       <div className={styles.registerLink}>
    //         <p>Already have an account?
    //           <a href="#" onClick={LoginLink}>Login</a>
    //         </p>
    //       </div> 
    //     </form>
    //   </div>
    // </div>

    <div className={`${styles.wrapper} ${action==='active' ? styles.active : ''} container my-auto d-flex align-items-center justify-content-center vw-100 vh-100`} >

      {
        registeredUsers.map((user:any)=>{
          return(
            <>

              <div className={`${styles.login} row mx-0 p-2 h-auto text-center `} key={user.userId}>
                <div className="col-6 overflow-hidden position-relative">
                  <Link href='/' className='position-fixed top-0 start-0 fs-2'>
                    <i className="bi bi-arrow-left-circle" style={{color:'rgba(180, 110, 28, 1)'}}></i>
                  </Link>
                  <img src={login.src} alt="login" className='img-fluid object-fit-cover' style={{height:'350px',width:'600px'}}/>
                </div>
                <div className={`${styles.right} col-6`}>
                  <div className='row mx-0 text-center'>
                    <p className={`${styles.heading}`}>fashion<span><b>nova</b></span></p>
                    <p className='text-uppercase fs-6'>login to your account</p>
                  </div>
                  <div className='row mx-0 alert alert-dismissible fade show alert-secondary text-start ' role='alert'>
                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                    <div className='col-1 m-auto'>
                      <i className="bi bi-lock-fill"></i>
                    </div>
                    <div className='col-11 d-flex flex-column justify-content-center align-items-start'>
                      <p><span className='fw-bold'>Email: </span>isuru@gmail.com</p>
                      <p><span className='fw-bold'>Password: </span>123456</p>
                    </div>

                  </div>
                  <form action="" className='my-1'>
                    <label htmlFor="email" className='form-label my-1 text-start w-100'>Email address</label>
                    <input type="text" id='email' value={loginEmail.value} placeholder='Example@gmail.com' onChange={(e)=>{
                      setLoginEmail({...loginEmail, value:e.target.value})
                    }} onBlur={()=>{
                      setLoginEmail({...loginEmail, isTouched:true})
                    }} className='form-control my-1'/>
                    <label htmlFor="password" className='form-label my-1 text-start w-100'>Password</label>
                    <input type="password" id='password' value={loginPassword.value} onChange={(e)=>{
                      setLoginPassword({...loginPassword, value:e.target.value})
                    }} onBlur={()=>{
                      setLoginPassword({...loginPassword, isTouched:true})
                    }} className='form-control my-1'/>
                    <div className='row mx-0 text-end my-2'>
                      <a href="#" className='text-decoration-none text-black'>Forgot password</a>
                    </div>
          
                    <button className='btn my-2 d-block mx-auto text-white fs-7 px-5 fw-bold' style={{background:'rgba(180, 110, 28, 1)'}}onClick={logInSubmit}>LOGIN</button>
                  </form>

                  <p>Don’t have an account? <a href="#" className='text-decoration-none' style={{color:'rgba(180, 110, 28, 1)'}} onClick={RegisterLink}>signup here</a></p>
                  
                </div>
                <p className='fs-7'>© Copyright 2024 FN. All Rights Reserved | EXE.LK</p>
              </div>
              <div className={`${styles.register} row mx-0 p-2  h-auto text-center`} >
                <div className="col-6 overflow-hidden">
                  <Link href='/' className='position-fixed top-0 start-0 fs-2'>
                    <i className="bi bi-arrow-left-circle" style={{color:'rgba(180, 110, 28, 1)'}}></i>
                  </Link>
                  <img src={register.src} alt="register" className='img-fluid object-fit-cover' style={{height:'500px',width:'600px'}}/>
                </div>
                <div className={`${styles.right} col-6 `}>
                  <div className='row mx-0 text-center'>
                    <p className={`${styles.heading}`}>fashion<span><b>nova</b></span></p>
                    <p className='text-uppercase fs-6'>register to your account</p>
                  </div>
                  <form  className='my-1'>

                    <label htmlFor="name" className='form-label my-1 text-start w-100'>Name</label>
                    <input type="text" id='name' value={name} placeholder='Jhon Walker' onChange={(e)=>{
                      setName(e.target.value)
                    }} className='form-control my-1'/>

                    <label htmlFor="email" className='form-label my-1 text-start w-100'>Email</label>
                    <input type="text" id='email' placeholder='Example@gmail.com' value={regEmail.value} onChange={(e)=>{
                      setRegEmail({...regEmail, value:e.target.value})
                    }} onBlur={()=>{
                      setRegEmail({...regEmail, isTouched:true})
                    }} className='form-control my-1'/>

                    <label htmlFor="password" className='form-label my-1 text-start w-100'>password</label>
                    <input type="password" id='password' value={regPassword.value} onChange={(e)=>{
                      setRegPassword({...regPassword, value:e.target.value})
                    }} onBlur={()=>{
                      setRegPassword({...regPassword, isTouched:true})
                    }} className='form-control my-1'/>

                    <label htmlFor="password" className='form-label my-1 text-start w-100'>Confirm Password</label>
                    <input type="password" id='password' value={conPassword.value} onChange={(e)=>{
                      setConPassword({...conPassword, value:e.target.value})
                    }} onBlur={()=>{
                      setConPassword({...conPassword, isTouched:true})
                    }} className='form-control my-1'/>
          
                    <button className='btn my-2 d-block mx-auto text-white fs-7 px-5 fw-bold' style={{background:'rgba(180, 110, 28, 1)'}}>REGISTER</button>

                  </form>

                  <p>Already have an account? <a href="#" className='text-decoration-none' style={{color:'rgba(180, 110, 28, 1)'}} onClick={LoginLink}>login</a></p>
                </div>
                <p className='fs-7'>© Copyright 2024 FN. All Rights Reserved | EXE.LK</p>
              </div>

            </>
          )
        })
      }
      

    </div>
  )
}

export default LoginPage