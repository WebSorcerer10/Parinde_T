import React from "react"; 

import {Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'; 
import {Link} from 'react-router-dom' 
import '../styles/Login.css'
import registerImg from'../assets/login2.jpg'
import userIcon from '../assets/login.jpg'
import { useState } from "react";


const Register = () =>{
    const[credentials, setCredentials]= useState({
       userName:undefined,
       email: undefined,
       password: undefined,
    });
    const handleChange = e =>{
        setCredentials(prev =>({ ...prev,[e.target.id]: e.target.value}));
    };

    const handleClick = e=>{
        e.preventDefault();
    }
    return (
    <section>
        <Container>
            <Row>
                <Col lg='8' clasNmae="m-auto">
                    <div className="login_container d-flex justify-content-between">
                        <div className="login__img">

                            <img src={registerImg} alt=""/>

                        </div>
                        <div className="login_form">
                            <div className="user">
                                <img src={userIcon}alt=""/>
                            </div>
                            <h2>Register</h2>
                            <Form onSubmit={handleClick}>
                                <FormGroup>
                                <input type="text" placeholder="Username" required id="username" onChange={handleChang}/>
                                </FormGroup>
                               <FormGroup>
                                <input type="email" placeholder="Email" required id="email" onChange={handleChang}/>
                                </FormGroup>
                               <FormGroup>
                                <input type="password" placeholder="Password" required id="password" onChange={handleChange}/>
                                </FormGroup> 
                                <Button className="btn secondary__btn auth__btn" type="submit">Create Account
                                </Button>
                            </Form>
                            <p>Already have an account?<Link to='/login'>Login</Link></p>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    );
};
export default Register;