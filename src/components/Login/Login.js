import React, { useState } from "react";
import { connect } from 'react-redux';
import './Login.css';
import { withRouter } from "react-router-dom"
import {loginAction} from '../../store/action/loginAction';
import {useEffect} from "react"


export const Login = props => {
    let [state, setState] = useState({
      email: "",
    });
    let [showMessage, setShowMessage] = useState(false);
    let [loader, setLoader] = useState(false);

    const handleChange = e =>
        setState({ ...state, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        if (loader === true) {
            return
        } 
        setLoader(true)
        props.dispatch(loginAction(state.email))
        
    }

    useEffect(() => {
        if (props.user_data === null) {
            return
        }
        if (props.user_data.id) {
            props.history.push('/userPosts');
        }
        if (!props.user_data.id) {
            setLoader(false)
            setShowMessage("The Email is not been found")
        }
    }, [props.user_data]); 

    return(
        <div className="loginForm">

            <h5 className="loginTitle"><span className="headLine">LOGIN</span></h5>

            <div className="loginWrapper">
            <form onSubmit={handleSubmit}>
                <div>
                    <input className="loginInput" placeholder={"Email"} name="email" value={state.email} 
                    onChange={handleChange}/>
                </div>

                <div className="erroeMessage">
                    {loader ? 
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div>
                    </div><div></div></div> : null
                    }
                    <p>{showMessage}</p>
                </div>
                
                <div className="buttonContainer">
                    <button type="submit" className="loginButton" disabled={loader} content="Login">Submit</button>     
                </div>      
            </form>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user_data: state.loginReducer.user_data,
    }
}

export default withRouter(connect(mapStateToProps)(Login))