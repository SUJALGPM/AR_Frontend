import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Button, Form, FormGroup, Input, Col, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import firebase from "firebase/compat/app";
import { message } from 'antd';
import "firebase/compat/storage";

const AddFilter = () => {

    //State to render after work...
    const navigate = useNavigate();

    //store the form data in useState...
    const [filterName, setFilterName] = useState('');
    const [filterImage, setFilterImage] = useState(null);
    const [categoryName, setCategoryName] = useState('');
    const [loopData, setLoopData] = useState([]);

    //Get the categoryName for add filter....
    const fetchCategoryName = async () => {
        const catData = await fetch('https://custom-iztj.onrender.com/api/admin/getCategory');
        if (!catData) {
            console.log("Category Name not found...!!!");
        } else {
            const jsonData = await catData.json();
            setLoopData(jsonData);
        }
    }

    //For getting Category Name instant...
    useEffect(() => {
        fetchCategoryName();
    }, []);

    //Handle the choose dropdown option....
    const handleDropdownChange = (e) => {
        setCategoryName(e.target.value);
    }

    //Firebase setup to pass download link of image....
    //Upload the image to firebase...
    const handleUpload = async (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const storageRef = firebase.storage().ref()
            const fileRef = storageRef.child(selectedFile.name);
            fileRef.put(selectedFile)
                .then((snapshot) => {
                    snapshot.ref.getDownloadURL()
                        .then((downloadURL) => {
                            console.log("LINK HAI PICK :", downloadURL);
                            setFilterImage(downloadURL)
                        })
                })
        } else {
            console.log("NO FILE SELECTED..!!!");
        }
    }

    //Handle the POST API for add filter in particular category Only....
    const handleAddFilter = async (e) => {
        e.preventDefault();

        //Make a format of data...
        const formData = {
            categoryId: categoryName,
            filterName: filterName,
            filterUrl: filterImage
        }

        try {
            const res = await fetch('https://custom-iztj.onrender.com/api/admin/addFilter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res) {
                console.log('Fitler add successfully....');
                message.success("Fitler add successfully....");
                navigate('/filterList');
            } else {
                console.log("Failed to add filter...");
                message.error("Failed to add filter...");
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
                        <div style={{ background: "rgb(253,165,0)", border: "1px solid black", borderRadius: "8px", padding: "20px", marginTop: "80px" }}>
                            <h3 className="text-center mb-4">Add New Filter</h3>
                            <Form className="register-form">
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="filter"
                                        placeholder="Enter filter name"
                                        value={filterName}
                                        onChange={(e) => setFilterName(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="file"
                                        id="image"
                                        accept="image/*"
                                        name='select'
                                        onChange={handleUpload}
                                    />
                                </FormGroup>
                                {/* Category Dropdown Field */}
                                <FormGroup>
                                    <Input
                                        type="select"
                                        id="dropdownField"
                                        onChange={handleDropdownChange}
                                        value={categoryName}
                                    >
                                        <option value="" disabled>
                                            Select an Category
                                        </option>
                                        {loopData.map(item => (
                                            <option key={item.catID} value={item.catID}>
                                                {item.catNAME}
                                            </option>
                                        ))}
                                    </Input>
                                </FormGroup>
                                {/* Log in Button */}
                                <Button onClick={handleAddFilter} color="primary" className="w-100">
                                    Add New Filter
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

export default AddFilter;
