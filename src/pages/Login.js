import React, { useState } from "react";
import { Input, message, Button } from "antd";
import { FormGroup, Label, Form } from "reactstrap";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [adminId, setAdminId] = useState([]);
  const [password, setPassword] = useState([]);

  const onfinishHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        adminId,
        password,
      }

      console.log(formData);
      dispatch(showLoading());

      const res = await fetch(`https://custom-iztj.onrender.com/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      dispatch(hideLoading());
      const data = await res.json();
      if (res.ok === true) {
        console.log("After response ok data :", data);
        const token = data.token;
        console.log("token :", token);
        localStorage.setItem("token", token);
        localStorage.setItem("adminID", data.data.adminID);
        localStorage.setItem("adminName", data.data.adminNAME);
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
      <div className="background_image" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <Form className="register-form">
          <h3 className="text-center">Login Form </h3>
          <hr style={{ borderColor: 'black' }} />
          <FormGroup>
            <Label for="adminId">Email ID :-</Label>
            <Input
              type="text"
              name="adminId"
              id="adminId"
              value={adminId}
              placeholder="Enter Admin ID"
              onChange={(e) => setAdminId(e.target.value)}
              required />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password :-</Label>
            <Input type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required />
          </FormGroup>

          <Button type='primary' htmlType='submit' color="primary" size='lg' onClick={onfinishHandler} style={{ width: "200px", marginLeft: "94px" }}>Login</Button>
        </Form>
      </div>
    </>
  );
};

export default Login;

