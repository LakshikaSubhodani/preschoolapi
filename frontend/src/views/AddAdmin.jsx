import React from "react";
import {Form, Button, Col, Row, Container} from "react-bootstrap";
import "../style/SideBar.css";
import "../style/AddAdmin.css";
import history from './history';

import Dashboard from "./Dashboard";

export default function AddAdmin(){
    return(

        <div className="addAdmin">

            <div className="">
                <div className="admin-dashboard">
                <Dashboard/>
                </div>
            </div>
            <div className="">
                <div className="adminContainer">
                    <div className="admin-heading">
                        <h1>Add New Admin </h1>
                    </div>
                    <div className="add-admin-btn">
                        <form action="../components/AddAdminForm">
 
                        <button className="btn-add-admin" variant="btn btn-success" onClick={()=>history.push('../components/AddAdminForm')}>Add New Admin</button>
                        
                        </form>
 
                    </div>
                </div>  
             </div>
           
        </div>
    )
}