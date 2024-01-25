import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table, Input, Label } from 'reactstrap';
import Layout from '../../components/Layout';
import { message } from 'antd';

const EditModal = ({ isOpen, toggle, mrDetails, handleUpdate }) => {
    const [editedDetails, setEditedDetails] = useState({});

    useEffect(() => {
        setEditedDetails({ ...mrDetails });
    }, [mrDetails]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit MR Details</ModalHeader>
            <ModalBody style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                <div>
                    <Label>MR MRId:</Label>
                    <Input type="text" name="MRId" value={editedDetails.MRId || ''} onChange={handleChange} />
                    <Label>MR Name:</Label>
                    <Input type="text" name="MRname" value={editedDetails.MRname || ''} onChange={handleChange} />
                    <Label>MR DIV:</Label>
                    <Input type="text" name="MRdiv" value={editedDetails.MRdiv || ''} onChange={handleChange} />
                    <Label>MR Email:</Label>
                    <Input type="email" name="MRemail" value={editedDetails.MRemail || ''} onChange={handleChange} />
                    <Label>MR Password:</Label>
                    <Input type="password" name="MRpassword" value={editedDetails.MRpassword || ''} onChange={handleChange} />
                    <Label>MR State:</Label>
                    <Input type="text" name="MRstate" value={editedDetails.MRstate || ''} onChange={handleChange} />
                    <Label>MR MRDOJ:</Label>
                    <Input type="text" name="MRdoj" value={editedDetails.MRdoj || ''} onChange={handleChange} />
                    <Label>MR MRHQ:</Label>
                    <Input type="text" name="MRhq" value={editedDetails.MRhq || ''} onChange={handleChange} />
                    <Label>MR MRDESG:</Label>
                    <Input type="text" name="MRdesg" value={editedDetails.MRdesg || ''} onChange={handleChange} />
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={() => handleUpdate(editedDetails)}>
                    Update
                </Button>{' '}
                <Button color="danger" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

const ListMRs = () => {
    const [data, setData] = useState([]);
    const [selectedMR, setSelectedMR] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const fetchData = async () => {
        try {
            const res = await fetch('https://custom-iztj.onrender.com/api/mr/mrList');
            if (!res) {
                console.log('Failed to load the mrList..!!!');
            } else {
                const jsonData = await res.json();
                setData(jsonData);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleEdit = (mrId) => {
        const selectedMR = data.find((mr) => mr.MRId === mrId);
        setSelectedMR(selectedMR);
        setIsEditModalOpen(true);
    };

    const handleUpdate = async (editedDetails) => {

        try {
            //Format data first then pass to server...
            const formData1 = {
                MRId: editedDetails.MRId,
                MRname: editedDetails.MRname,
                DIV: editedDetails.MRdiv,
                email: editedDetails.MRemail,
                password: editedDetails.MRpassword,
                state: editedDetails.MRstate,
                DOJ: editedDetails.MRdoj,
                DESG: editedDetails.MRdesg,
                HQ: editedDetails.MRhq,
            }

            const SendEditDetail = await fetch('https://custom-iztj.onrender.com/api/mr/mrEdit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData1),
            });

            if (SendEditDetail.ok === true) {
                message.success("MR Details Update Successfully...");
                setIsEditModalOpen(false);
            } else {
                message.error("Failed to Update MR Details...!!!");
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Layout>
            <div className="backimg_1" style={{ minHeight: "100%" }}>
                <Table hover bordered responsive>
                    <thead>
                        <tr className="table-info">
                            <th style={{ textAlign: "center" }}>MRID</th>
                            <th style={{ textAlign: "center" }}>MRNAME</th>
                            <th style={{ textAlign: "center" }}>MRDIV</th>
                            <th style={{ textAlign: "center" }}>MREMAIL</th>
                            <th style={{ textAlign: "center" }}>MRPASSWORD</th>
                            <th style={{ textAlign: "center" }}>MRSTATE</th>
                            <th style={{ textAlign: "center" }}>MRDOJ</th>
                            <th style={{ textAlign: "center" }}>MRHQ</th>
                            <th style={{ textAlign: "center" }}>MRDESG</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.MRId}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.MRname}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.MRdiv}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.MRemail}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.MRpassword}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.MRstate}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.MRdoj}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.MRhq}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.MRdesg}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>
                                    <Button onClick={() => handleEdit(item.MRId)} color='warning' size="sm" style={{ width: "60px" }}>Edit</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {selectedMR && (
                    <EditModal
                        isOpen={isEditModalOpen}
                        toggle={() => setIsEditModalOpen(!isEditModalOpen)}
                        mrDetails={selectedMR}
                        handleUpdate={handleUpdate}
                    />
                )}
            </div>
        </Layout>
    );
};

export default ListMRs;
