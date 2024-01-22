import React, { useEffect, useState } from 'react';
import Layout from "../../components/Layout.js";
import { Button, Form, FormGroup, Label, Input, Container, Col, Row } from 'reactstrap';

const AddCategory = () => {

    //store the form data in useState...
    const [categoryName, setCategoryName] = useState([]);

    //Get AdminID from localStorage...
    const id = localStorage.getItem('adminID');

    //Post the category Name to server...
    const handleDoctorCreate = async (e) => {
        e.preventDefault();

        //Make data for API...
        const formData = {
            categoryName
        }

        try {
            const response = await fetch(`https://custom-iztj.onrender.com/api/admin/addCategory/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response) {
                console.log("Failed to create new Category...!!");
                window.alert("Failed to create new Category...!!");
            }

            if (response) {
                console.log("New Category create Successfully...");
                window.alert("New Category create Successfully...");
            }
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <Layout>
            <div className='backimg_1' style={{ minHeight: "100%" }}>
                <Row className="justify-content-center" >
                    <Col md={6} >
                        <div style={{ background: "lightblue", border: "1px solid black", borderRadius: "8px", padding: "20px", marginTop: "10px" }}>
                            <h3 className="text-center mb-4">Add New Category</h3>
                            <Form className="register-form">
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="Category Names"
                                        placeholder="Category Name"
                                        value={categoryName}
                                        onChange={(e) => setCategoryName(e.target.value)}
                                    />
                                </FormGroup>
                                {/* Log in Button */}
                                <Button onClick={handleDoctorCreate} color="primary" className="w-100">
                                    Create New Category
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

export default AddCategory;
