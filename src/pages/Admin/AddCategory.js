import React, { useState } from 'react';
import Layout from "../../components/Layout.js";
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const AddCategory = () => {

    //State to render after work...
    const navigate = useNavigate();

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

            const msg = await response.json();

            if (response.ok === true) {
                message.success(`Message: ${msg.message}`)
                navigate('/categoryList');
            } else {
                message.error(`Message:${msg.message}`);
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
                        <div style={{ background: "rgb(253,165,0)", border: "1px solid black", borderRadius: "8px", padding: "20px", marginTop: "130px" }}>
                            <h3 className="text-center mb-4">Add New Category</h3>
                            <Form className="register-form" style={{ height: "195px" }}>
                                <FormGroup>
                                    <Label for="adminId" style={{ fontSize: "16px", fontStyle: "italic", textDecoration: "underline" }}>Enter Category Name :-</Label>
                                    <Input
                                        type="text"
                                        id="Category Names"
                                        placeholder="Category Name"
                                        value={categoryName}
                                        onChange={(e) => setCategoryName(e.target.value)}
                                        style={{ marginTop: "10px" }}
                                    />
                                </FormGroup>
                                {/* Log in Button */}
                                <Button onClick={handleDoctorCreate} color="info" className="w-100" style={{ marginTop: "15px" }}>
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
