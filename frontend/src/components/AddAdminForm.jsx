import React, {Component} from 'react';
import {useState , useEffect} from "react";
import { Form, Button ,Col, Row, Container } from "react-bootstrap";
import "../style/AddAdminForm.css";
export default function AddAdminForm(props) {

    const initialValues ={ email: "", password: "", role: "", };
    const [formValues,setFormValues]= useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
       
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };

      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors])

      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


        if (!values.email) {
            errors.email = "Email is required!";
          }
          else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }
        if (!values.password) {
            errors.password = "Password is required!";
          }
 
          if (!values.role) {
            errors.role = "Role is required!";
          }
          return errors;

        };      
        
    return(  
        <Container className="mt-5">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success"><p className="suc-msg">
                    Registered New Admin successfully !</p></div>
                ) :  <br></br> 
            }

        <Row>
          <Col lg={12} md={6} sm={12} className="text-center  mt-5 p-3" >
            <div className="adminForm">
               <center> 

              <Form className="admin-register-form"  onSubmit={handleSubmit}>
                    
                  <div className="admin-register-form-heading">
                      <h2>New Admin Register Form</h2>
                  </div>

                  <div className="form-group text-left">
                  <label htmlFor="adminInputEmail1">Email address</label>
                  <input type="email" 
                         className="form-control" 
                         id="email" 
                         name="email"
                         placeholder="admin@gmail.com"
                         value={formValues.email}
                         onChange={handleChange}
                  />                  
                  </div>
                  <p>{formErrors.email}</p>
                  
                  <div className="form-group text-left">
                      <label htmlFor="adminInputPassword1">Password</label>
                      <input type="password" 
                          className="form-control" 
                          id="password"
                          name="password" 
                          placeholder="Password"
                          value={formValues.password}
                          onChange={handleChange}
                      />
                  </div>
                  <p>{formErrors.password}</p>

                  <div className="form-group text-left">
                      <label htmlFor="adminInputRole">Role</label>
                      <input type="text" 
                          className="form-control" 
                          id="role"
                          name="role" 
                          placeholder="Role"
                          value={formValues.role}
                          onChange={handleChange}
                      />
                  </div>
                  <p>{formErrors.role}</p>
                  

                  
                  
                     

                  <div className="reset-button">
                  <button type="reset" value="Reset"  class="btn btn-primary" >Clear</button>
                  </div>
                  <div className="submit-button">
                  <button 
                      type="submit" 
                      className="btn btn-primary"
                      
                  >
                      Register
                  </button>
                  </div>
              </Form>
              </center>
              </div>
              </Col>
            </Row>
          </Container>
      )
  }