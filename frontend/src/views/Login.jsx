import React,{useState} from "react";
import { Form, Button ,Col, Row, Container } from "react-bootstrap";
import loginIcon from '../images/user_avatar.png'
import '../style/Login.css';
import uiImg from '../images/LoginInterface1.jpg'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export default function Login(){
    const [username, setUsername]=useState('');
    const [usernameError, setUsernameError]=useState('');

    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState('');

    const [successMsg, setSuccessMsg]=useState('');

    const history = useHistory();

    const handleUsernameChange=(e)=>{
        setSuccessMsg('');
        setUsernameError('');
        setUsername(e.target.value);
    }

    const handlePasswordChange=(e)=>{
        setSuccessMsg('');
        setPasswordError('');
        setPassword(e.target.value);
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();

        //checking if email is empty
        if(username!==''){
            const usernameRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(usernameRegex.test(username)){
                setUsernameError('');
                if(username=== username){
                    setUsernameError('');
                    if(password=== password){
                        history.push("/dashboard");
                    }
                    else{
                        setPasswordError('Password does not match with the email address');
                    }
                }
                else{
                    setUsernameError('Email does not match with our database');
                }
            }
            else{
                setUsernameError('Invalid email');
            }

        }
        else{
            setUsernameError('Email required*');
        }
        //checking if password is empty
        if(password!==''){

        }
        else{
            setPasswordError('Password required*');
        }

        var data = JSON.stringify({
            "username": username,
            "password": password
          });
          
        var config = {
        method: 'post',
        url: 'auth/signin',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };
          
        axios(config)
        .then(function (response) {
        // console.log();
        const res =JSON.stringify(response.data)
        if(response.status === 200){
            console.log("inside the if")
            
        }
        })
        .catch(function (error) {
        console.log(error);
        });

    }



    
    return(
        <>
            <Container className="mt-5">
            <h1 className="shadow-sm  mt-5 p-3 text-center rounded">Sign in</h1>
                <Row>
                   <Col lg={4} md={6} sm={12} className="text-center  mt-5 p-3" >
                        <img className="icon-img" src={loginIcon} alt="icon"/>

                        
                        <Form onSubmit={handleFormSubmit}>
                        {successMsg&&<>
                        <div className="success-msg">{successMsg}</div>
                        <br></br>
                        </>}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                
                                <Form.Control type="text" placeholder="Enter email" name="email"  onChange={handleUsernameChange} value={username}/>
                                {usernameError&&<div className="error-msg">{usernameError}</div>}
                                
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                
                                <Form.Control type="password" placeholder="Password" name="password" onChange={handlePasswordChange} value={password} />
                                {passwordError&&<div className="error-msg">{passwordError}</div>}
                            </Form.Group>
                            
                            <Button variant="primary btn-block" type="submit">Sign in</Button>

                            <div className="mt-3">
                                <a href="#"><small className="reset">Forget Password</small></a>
                               
                            </div>
                        </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12} >
                    <img className="w-100" src={uiImg} alt="icon"/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}