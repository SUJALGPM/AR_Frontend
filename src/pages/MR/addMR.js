import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Button, Form, FormGroup, Input, Col, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import {message} from 'antd';

const AddMR = () => {

    //State to render after work...
    const navigate = useNavigate();
    
    //Store the form data temporary in state...
    const [mrID, setMrID] = useState('');
    const [mrName, setMrName] = useState('');
    const [mrDiv, setMrDiv] = useState('');
    const [mrEmail, setMrEmail] = useState('');
    const [mrPassword, setMrPassword] = useState('');
    const [mrState, setMrState] = useState('');
    const [mrDoj, setMrDoj] = useState('');
    const [mrDesg, setMrDesg] = useState('');
    const [mrHq, setMrHq] = useState('');

    //Get AdminId from localstorage to create MR...
    const id = localStorage.getItem('adminID');
    console.log("adminID :",id);

    //Handle the MRs POST API...
    const handleMrCreate = async (e) => {
        e.preventDefault();

        //Create format of data to Pass...
        const formData = {
            MRId: mrID,
            MRname: mrName,
            DIV: mrDiv,
            email: mrEmail,
            password: mrPassword,
            state: mrState,
            DOJ: mrDoj,
            DESG: mrDesg,
            HQ: mrHq
        }

        try {
            const response = await fetch(`https://custom-iztj.onrender.com/api/mr/register/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            //Configure the response...
            const jsonData = await response.json();

            if (response.ok === true) {
                console.log("New MR Create Successfully....");
                message.success(`Message :${jsonData.message}`);
                navigate('/listMRs');
            } else {
                console.log("Failed to create new MR...!!!");
                message.error(`Message :${jsonData.message}`);
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Layout>
            <div className='backimg_1' style={{ minHeight: "100%" }}>
                <Row className="justify-content-center" >
                    <Col md={6} >
                        <div style={{ background: "orange", border: "1px solid black", borderRadius: "8px", padding: "20px", marginTop: "10px" }}>
                            <h3 className="text-center mb-4">Add New MR</h3>
                            <Form className="register-form">
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="MrId"
                                        placeholder="Enter MR ID"
                                        value={mrID}
                                        onChange={(e) => setMrID(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="MRname"
                                        placeholder="Enter MR Name"
                                        value={mrName}
                                        onChange={(e) => setMrName(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="DIV"
                                        placeholder="Enter MR DIV"
                                        value={mrDiv}
                                        onChange={(e) => setMrDiv(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="Email"
                                        placeholder="Enter MR Email"
                                        value={mrEmail}
                                        onChange={(e) => setMrEmail(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="password"
                                        placeholder="Enter MR Password"
                                        value={mrPassword}
                                        onChange={(e) => setMrPassword(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="state"
                                        placeholder="Enter MR State"
                                        value={mrState}
                                        onChange={(e) => setMrState(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="DOJ"
                                        placeholder="Enter MR DOJ"
                                        value={mrDoj}
                                        onChange={(e) => setMrDoj(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="DESG"
                                        placeholder="Enter MR DESG"
                                        value={mrDesg}
                                        onChange={(e) => setMrDesg(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="HQ"
                                        placeholder="Enter MR HQ"
                                        value={mrHq}
                                        onChange={(e) => setMrHq(e.target.value)}
                                    />
                                </FormGroup>
                                {/* Log in Button */}
                                <Button onClick={handleMrCreate} color="primary" className="w-100">
                                    Create New MR
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

export default AddMR;
