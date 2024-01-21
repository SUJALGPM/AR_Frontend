import "../App.css";
import React, { useEffect, useState } from "react";
import { Form, Input, message, Divider, Button } from "antd";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Navbar from "../components/Shared/Navbar/Navbar";

const Register = () => {

  //Render After Register.......
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <>
      <Navbar />
      <div className="background_image " style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <Form onFinish={onfinishHandler} className="register-form">
          <h3 className="text-center effect" style={{ marginBottom: 25 }}>Admin Registration</h3>
          <Divider style={{ borderColor: 'black' }}></Divider>
          <Form.Item label="name" name="name" rules={[{ required: true, type: "name", message: "Please enter name" }]}>
            <Input type="text" placeholder="Enter your name" required />
          </Form.Item>
          <Form.Item label="email" name="email" rules={[{ required: true, type: "email", message: "Please enter email" }]}>
            <Input type="email" placeholder="Enter your email" required />
          </Form.Item>
          <Form.Item label="password" name="password" rules={[{ required: true, type: "password", message: "Please enter password" }]}>
            <Input.Password type="password" placeholder="Enter your password" required />
          </Form.Item>
          <Form.Item style={{ marginLeft: 110 }}>
            <Button type='primary' htmlType='submit' shape='round' size='large' style={{width:"200px"}}>Register </Button>
          </Form.Item>
          <Divider style={{ borderColor: 'black' }}></Divider>
          <Form.Item style={{ marginLeft: 130 }}>
            <NavLink to="/login" className="text-dark magic" style={{ textDecoration: "none", fontSize: "18px", marginLeft: "15px", fontWeight: "bold" }}>Already Register</NavLink>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
