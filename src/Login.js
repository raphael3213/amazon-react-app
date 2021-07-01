import React , {useState} from 'react'
import './Login.css'
import {Link , useHistory} from "react-router-dom"
import {auth,db} from './firebase'
import { useAlert } from 'react-alert';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();
    const alert = useAlert();

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            if(auth){
                alert.success(<div style={{ textTransform: 'initial' }}>Logged In</div>)
                history.push('/')
            }
        })
        .catch((error)=>{

        });
    }
    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{

            if(auth){
                history.push('/')
                alert.show(<div style={{ textTransform: 'initial' }}>Logged In</div>)
            }

        })
        .catch((error)=>{
            alert.error(<div style={{ textTransform: 'initial' }}>User with same email exists.Please try a different email ID</div>)
        });

    }
    return (
        <div className="login">
            <Link to="/">
                <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="Amazon Logo" className="login__image" />

            </Link>
            <div className="login__box">
                <h2>Sign in</h2>
                <form action="">
                    <span>Email ID</span>
                    <input type="text" value={email} onChange = {event => setEmail(event.target.value)}/>
                    <span>Password</span>
                    <input type="password" value={password} onChange = {event => setPassword(event.target.value) }/>
                    <button onClick = {signIn}>Sign-In</button>
                </form>
                
                <span className="login__box__tc">
                    By continuing, you agree to Fake Amazon's Conditions of Use and Privacy Notice.
                </span>
                <button onClick={register}>Create your Amazon account</button>
            </div>
            
        </div>
    )
}

export default Login
