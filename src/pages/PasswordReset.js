import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const PasswordReset = () => {

    //State to render after work...
    const navigate = useNavigate();

    //store the form data in useState...
    const [email, setEmail] = useState([]);

    //Post the category Name to server...
    const handleResetPassword = async (e) => {
        e.preventDefault();

        //Make data for API...
        const formData = {
            email
        }

        try {
            const response = await fetch(`https://custom-iztj.onrender.com/api/admin/forgetPass`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const msg = await response.json();

            if (response.ok === true) {
                message.success(`Message: ${msg.message}`)
            } else {
                message.error(`Message:${msg.message}`);
            }

        } catch (err) {
            console.log(err)
        }
    }

    //Handle the forgot password Page...
    const handleForgotPassword = () => {
        navigate('/');
    }

    return (
        <>
            <div className="background_image" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Form className="register-form" style={{ height: "325px" }}>
                    <h3 className="text-center">Password Reset Form </h3>
                    <hr style={{ borderColor: 'black' }} />
                    <FormGroup>
                        <Label for="adminId" style={{ fontSize: "16px", fontStyle: "italic", textDecoration: "underline" }}>Enter Email ID :-</Label>
                        <Input
                            type="email"
                            id="Email"
                            placeholder="Enter Email here...."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ marginTop: "10px" }}
                        />
                    </FormGroup>
                    {/* Log in Button */}
                    <Button onClick={handleResetPassword} color="info" className="w-100" style={{ marginTop: "15px" }}>
                        Reset Your Email
                    </Button>

                    <hr style={{ borderColor: 'black' }} />
                    <h5 style={{ textAlign: 'center' }} onClick={handleForgotPassword}>Go to Login</h5>
                </Form>
            </div>
        </>
    )
}

export default PasswordReset;
