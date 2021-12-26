import React from "react";
import {Link} from "react-router-dom";

import {Form, Button, Col, Row, Container} from "react-bootstrap";
import history from './history';

import "../style/SideBar.css";
import Dashboard from "./Dashboard";
import "../style/StudentList.css";
import AddstudentForm from "../components/AddStudentForm";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
export default function StudentList(){
    return(

        <div className="studentList">
           
            <div className="">
                <div className="admin-dashboard">
                <Dashboard/>
                </div>
            </div>
            <div className="">
                <div className="studentsContainer">
                    <div className="students-heading">
                        <h1>Student List </h1>
                    </div>
                    <div className="add-student-btn">
                        <form action="../components/AddStudentForm">
 
                        <button className="btn-add-student" variant="btn btn-success" onClick={()=>history.push('../components/AddStudentForm')}>Add New Student</button>
                        
                        </form>
 
                    </div>
                </div>  
             </div>
            
        </div>
 
    )
}