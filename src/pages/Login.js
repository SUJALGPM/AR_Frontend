import React, { useEffect, useState } from "react";
import { Form, Input, message, Divider, Button } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/FooterYou";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onfinishHandler = async (values) => {
    try {
      console.log(values);
      const adminId = values.id;
      const password = values.password;
      
      dispatch(showLoading());
      const res = await fetch(`https://custom-iztj.onrender.com/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values) // Remove the extra semicolon here
      });

      window.location.reload();
      dispatch(hideLoading());
      const data = await res.json(); // Parse the response data

      if (data.success) {
        localStorage.setItem("token", data.token);
        message.success("Login Successfully");
        navigate("/commonPage");
      } else {
        message.error(data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error(error);
      message.error("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="background_image" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <Form onFinish={onfinishHandler} className="register-form" >
          <h3 className="text-center effect">Login Form </h3>
          <hr />
          <Form.Item label="email" name="adminId" rules={[{ required: true, type: "text", message: "Please enter email" }]}>
            <Input type="text" placeholder="Enter Admin ID" required />
          </Form.Item>
          <Form.Item label="password" name="password" rules={[{ required: true, type: "password", message: "Please enter password" }]}>
            <Input.Password type="password" placeholder="Enter password" required />
          </Form.Item>
          <Form.Item style={{ marginLeft: 110 }}>
            <Button type='primary' htmlType='submit' shape='round' size='large' style={{ width: "190px" }}>Login</Button>
          </Form.Item>
          <Divider style={{ borderColor: 'black' }}>Don't have an account</Divider>
          <Form.Item style={{ marginLeft: 145 }}>
            <NavLink to="/register" className="text-dark magic" style={{ textDecoration: "none", fontSize: "20px", fontWeight: "bold" }}>Register Now</NavLink>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default Login;

