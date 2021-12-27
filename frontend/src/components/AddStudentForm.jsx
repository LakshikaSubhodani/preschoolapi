import React, {Component} from 'react';
import {useState , useEffect} from "react";
import { Form, Button ,Col, Row, Container } from "react-bootstrap";
import "../style/AddStudentForm.css";
export default function AddStudentForm(props) {

    const initialValues ={ username: "", password: "", email: "", studentfullname: "", studentinitialname: "", dob:"", address: "", classname: ""};
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

        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
          }
          if (!values.email) {
            errors.email = "Email is required!";
          }
          else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }
          if (!values.studentfullname) {
            errors.studentfullname = "Student Full Name is required!";
          }
          if (!values.studentinitialname) {
            errors.studentinitialname = "Student Initial Name is required!";
          }
          if (!values.dob) {
            errors.dob = "Student birthday is required!";
          }
          if (!values.address) {
            errors.address = "Student Address is required!";
          }
          if (!values.classname) {
            errors.classname = "Class Name is required!";
          }
          return errors;

        };      
        
    return(  
        <Container className="mt-5">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success"><p className="success-msg-reg">
                    Registered Student successfully !</p></div>
                ) :  <br></br> 
            }

        <Row>
          <Col lg={12} md={6} sm={12} className="text-center  mt-5 p-3" >
            <div className="stdForm">
               <center> 

              <Form className="student-register-form"  onSubmit={handleSubmit}>
                    
                  <div className="student-register-form-heading">
                      <h2>Student Register Form</h2>
                  </div>
                  
                    <div className="form-group text-left">
                      <label htmlFor="studentUserName">User Name</label>
                      <input type="text" 
                          className="form-control" 
                          id="username" 
                          name="username"
                          placeholder="MP00000"
                          value={formValues.username}
                          onChange={handleChange}
                      />
                  </div>
                  <p>{formErrors.username}</p>
                  
                  <div className="form-group text-left">
                      <label htmlFor="studentInputPassword1">Password</label>
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
                  <label htmlFor="studentInputEmail1">Email address</label>
                  <input type="email" 
                         className="form-control" 
                         id="email" 
                         name="email"
                         placeholder="amali@gmail.com"
                         value={formValues.email}
                         onChange={handleChange}
                  />                  
                  </div>
                  <p>{formErrors.email}</p>
                  
                  <div className="form-group text-left">
                      <label htmlFor="studentFullName">Full Name</label>
                      <input type="text" 
                          className="form-control" 
                          id="studentfullname" 
                          name="studentfullname"
                          placeholder="Amali Perera"
                          value={formValues.studentfullname}
                          onChange={handleChange}
                      />
                  </div>
                  <p>{formErrors.studentfullname}</p>
                  
                  
                  <div className="form-group text-left">
                      <label htmlFor="studentFullName">Name with Initials</label>
                      <input type="text" 
                          className="form-control" 
                          id="studentinitialname" 
                          name="studentinitialname" 
                          placeholder="A.Perera"
                          value={formValues.studentinitialname}
                          onChange={handleChange}
                      />
                  </div>
                  <p>{formErrors.studentinitialnamee}</p>

                  <p>{formErrors.dob}</p>
                  <div className="form-group text-left">
                      <label htmlFor="studentDoB">Date of Birth</label>
                      <input type="date" 
                          className="form-control" 
                          id="dob" 
                          name="dob" 
                          placeholder=""
                          value={formValues.dob}
                          onChange={handleChange}
                      />
                  </div>
                  
                  <div className="form-group text-left">
                      <label htmlFor="studentAddress">Address</label>
                      <input type="text" 
                          className="form-control" 
                          id="address" 
                          name="address" 
                          placeholder="Rukmale,Gampaha"
                          value={formValues.address}
                          onChange={handleChange}
                      />
                  </div>
                  <p>{formErrors.address}</p>

                  
                  <div className="form-group text-left">
                  <label htmlFor="studentFullName">Class</label>
                  <input type="text" 
                      className="form-control" 
                      id="classname" 
                      name="classname"
                      placeholder="A"
                      value={formValues.classname}
                      onChange={handleChange}
                  />
                  </div>
                  <p>{formErrors.classname}</p>

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