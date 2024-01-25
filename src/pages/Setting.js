import React, { useState } from 'react'
import Layout from "../components/Layout";
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import { message } from 'antd';

const Setting = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleUpload = (e) => {
        // Assuming only one file is selected
        setSelectedFile(e.target.files[0]);
    };

    const id = localStorage.getItem('adminID');

    const handleAddFilter = async () => {
        try {
            // Create FormData object
            const formData = new FormData();
            formData.append('file', selectedFile);

            // Send the file to the server using fetch
            const response = await fetch(`https://custom-iztj.onrender.com/api/admin/upload/${id}`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('File uploaded successfully');
                message.success('File uploaded successfully');
                // Handle success, e.g., show a success message to the user
            } else {
                console.error('File upload failed');
                // Handle failure, e.g., show an error message to the user
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            // Handle other errors, e.g., network error
        }
    };

    return (
        <Layout>
            <div className='backimg_1' style={{ minHeight: '100%' }}>
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <div style={{ background: 'rgb(253,165,0)', border: '1px solid black', borderRadius: '8px', padding: '20px', marginTop: '80px' }}>
                            <h3 className='text-center mb-4'>Uplaod Excel File</h3>
                            <Form className='register-form'>
                                <FormGroup>
                                    <Input
                                        type='file'
                                        id='Excel'
                                        accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
                                        name='select'
                                        onChange={handleUpload}
                                    />
                                </FormGroup>

                                {/* Log in Button */}
                                <Button onClick={handleAddFilter} color='primary' className='w-100'>
                                    Add Excel File
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

export default Setting;
