import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Col, Row } from 'reactstrap';
import {message} from 'antd';

const AddDoctor = () => {

    //Render after work....
    const navigate = useNavigate();

    //Store the data in state....
    const [loopData, setLoopData] = useState([]);
    const [selectedMRID, setSelectedMRID] = useState('');
    const [doctorsName, setDoctorName] = useState('');
    const [doctorSpec, setDoctorSpec] = useState('');
    const [doctorScCode, setDoctorScCode] = useState('');
    const [doctorLocality, setDoctorLocality] = useState('');
    const [doctorCity, setDoctorCity] = useState('');
    const [doctorState, setDoctorState] = useState('');

    //Fetch the MR detials for id...
    const fetchData1 = async () => {
        const response = await fetch('https://custom-iztj.onrender.com/api/mr/getMrDetail');
        if (!response) {
            console.log("MR Details is not fetched...!!!");
        } else {
            const data = await response.json();
            setLoopData(data);
        }
    }

    useEffect(() => {
        fetchData1();
    }, []);

    //MR ID setting for proper field.....
    const handleDropdownChange = (e) => {
        setSelectedMRID(e.target.value);
    };

    const handleDoctorCreate = async (e) => {
        e.preventDefault();

        // Include selected MRID in your form data
        const formData = {
            doctorName: doctorsName,
            speciality: doctorSpec,
            scCode: doctorScCode,
            locality: doctorLocality,
            city: doctorCity,
            state: doctorState,
            mrId: selectedMRID,
        };


        try {
            const response = await fetch('https://custom-iztj.onrender.com/api/doctor/createDoctor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            if (response) {
                message.success("Doctor Created Successfully.....");
                navigate('/doctorList');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <Layout>
            <div className='backimg_1' style={{ minHeight: "100%" }}>
                <Row className="justify-content-center" >
                    <Col md={6} >
                        <div style={{ background: "orange", border: "1px solid black", borderRadius: "8px", padding: "20px", marginTop: "10px" }}>
                            <h3 className="text-center mb-4">Add New Doctor</h3>
                            <Form className="register-form">
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="DoctorName"
                                        placeholder="Doctor Name"
                                        value={doctorsName}
                                        onChange={(e) => setDoctorName(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="speciality"
                                        placeholder="Dr. Speciality"
                                        value={doctorSpec}
                                        onChange={(e) => setDoctorSpec(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="city"
                                        placeholder="Dr. City"
                                        value={doctorCity}
                                        onChange={(e) => setDoctorCity(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="scCode"
                                        placeholder="Dr. scCode"
                                        value={doctorScCode}
                                        onChange={(e) => setDoctorScCode(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="locality"
                                        placeholder="Dr. locality"
                                        value={doctorLocality}
                                        onChange={(e) => setDoctorLocality(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="state"
                                        placeholder="Dr. State"
                                        value={doctorState}
                                        onChange={(e) => setDoctorState(e.target.value)}
                                    />
                                </FormGroup>
                                {/* MRID Dropdown Field */}
                                <FormGroup>
                                    <Input
                                        type="select"
                                        id="dropdownField"
                                        onChange={handleDropdownChange}
                                        value={selectedMRID}
                                    >
                                        <option value="" disabled selected>
                                            Select an MRUniqueID
                                        </option>
                                        {loopData.map(item => (
                                            <option key={item.MRID} value={item.MRID}>
                                                {item.MRUnique}
                                            </option>
                                        ))}
                                    </Input>
                                </FormGroup>
                                {/* Log in Button */}
                                <Button onClick={handleDoctorCreate} color="primary" className="w-100">
                                    Create Doctor
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

export default AddDoctor;
