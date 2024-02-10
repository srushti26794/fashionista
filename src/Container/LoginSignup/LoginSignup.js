import React, { useState } from 'react';
import "./LoginSignup.css"
import * as yup from 'yup';
import { useFormik } from 'formik';

function LoginSignup(props) {
    const [type, setType] = useState('login')

    let authSchema = {}, initialval = {}

    const handleSignup = () => {
        setType('signup')
    }

    const handleLogin = () => {
        setType('login');
    }

    const handleForgot = () => {
        setType('forgot');
    }

    console.log(type);

    if (type === 'login') {
        authSchema = yup.object({
            email: yup.string().required("Please enter email").email("Enter valid email"),
            password: yup.string().required("Enter password")
        })
        initialval = ({
            email: '',
            password: ''
        })
    } else if(type === 'signup') {
        authSchema = yup.object({
            email: yup.string().required("Please enter email").email("Enter valid email"),
            password: yup.string().required("Enter password"),
            confpassword :  yup.string().required("Confirm your password").oneOf([yup.ref('password'), null], "Passwords do not match")
        })
        initialval = ({
            email: '',
            password: '',
            confpassword:''
        })
    } else if(type === 'forgot') {
        authSchema = yup.object({
            email: yup.string().required("Please enter email").email("Enter valid email")
        })
        initialval = ({
            email: ''
        })
    }

    console.log(type);

    let formikObj = useFormik({
        initialValues: initialval,
        validationSchema: authSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    let { handleBlur, handleChange, handleSubmit, values, errors, touched } = formikObj

    console.log(errors);

    return (
        <div className="container">
            <div className="row">
                <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
                    <div className="panel border bg-white">
                        <div className="panel-heading">
                            {
                                type === 'forgot' ? 
                                <h4 className="pt-3 font-weight-bold">Forgot password</h4> :

                                type === 'signup' ?
                                <h3 className="pt-3 font-weight-bold">Signup</h3> :

                                <h3 className="pt-3 font-weight-bold">Login</h3>
                            }
                        </div>
                        <div className="panel-body p-3">

                            <form onSubmit={handleSubmit} action="login_script.php" method="POST">

                                <div className="form-group py-2">
                                    <div className="input-field">
                                        <span className="far fa-user p-2" />
                                        <input onChange={handleChange} onBlur={handleBlur} value={values.email} name='email' id='email' type="text" placeholder="Email" required />
                                    </div>
                                    <span>{errors.email && touched.email ? errors.email : null}</span>
                                </div>
                                
                                {
                                    type === 'forgot' ? 
                                    null :
                                    <div className="form-group py-1 pb-2">
                                    <div className="input-field">
                                        <span className="fas fa-lock px-2" />
                                        <input onChange={handleChange} onBlur={handleBlur} value={values.password} name='password' id='password' type="password" placeholder="Password" required />
                                        <button className="btn bg-white text-muted"> <span className="far fa-eye-slash" /> </button>
                                    </div>
                                    <span>{errors.password && touched.password ? errors.password : null}</span>
                                </div>
                                }                               

                                {
                                    type === 'signup' ?
                                        <div className="form-group py-1 pb-2">
                                            <div className="input-field">
                                                <span className="fas fa-lock px-2" />
                                                <input onChange={handleChange} onBlur={handleBlur} value={values.confpassword} name='confpassword' id='confpassword' type="password" placeholder="Confirm Password" required />
                                                <button className="btn bg-white text-muted"> <span className="far fa-eye-slash" /> </button>
                                            </div>
                                            <span>{errors.confpassword && touched.confpassword ? errors.confpassword : null}</span>
                                        </div> : null
                                }


                                {
                                    type === 'forgot' ?
                                    <><button type='submit' onClick={handleForgot} className="btn btn-primary btn-block mt-3">Find Account</button>
                                    <a onClick={handleLogin} href="#" id="login">Login</a></> :

                                    type === 'signup' ?
                                    <><button type='submit' onClick={handleSignup} className="btn btn-primary btn-block mt-3">SignUp</button>
                                    <div className="text-center pt-4 text-muted">Already an account? <a onClick={handleLogin} href="#">Login</a> </div></> :
                                    
                                    <><div className="form-inline"> <input type="checkbox" name="remember" id="remember" /> <label htmlFor="remember" className="text-muted">Remember me</label> <a onClick={handleForgot} href="#" id="forgot" className="font-weight-bold">Forgot password?</a></div>
                                    <button type='submit' onClick={handleLogin} className="btn btn-primary btn-block mt-3">Login</button>
                                    <div className="text-center pt-4 text-muted">Don't have an account? <a onClick={handleSignup} href="#">Sign up</a> </div></>
                                }
                                
                            </form>
                        </div>

                        <div className="mx-3 my-2 py-2 bordert">
                            <div className="text-center py-3"> <a href="https://wwww.facebook.com" target="_blank" className="px-2"> <img src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg" alt /> </a> <a href="https://www.google.com" target="_blank" className="px-2"> <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt /> </a> <a href="https://www.github.com" target="_blank" className="px-2"> <img src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png" alt /> </a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default LoginSignup;