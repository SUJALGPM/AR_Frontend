import React, { useState, useEffect } from "react";
import Layout from '../../components/Layout';
import { Table } from "reactstrap";

const DetailReport = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch("https://custom-iztj.onrender.com/api/mr/getMrDoctor")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Layout>
            <div className='backimg_1' style={{ minHeight: "100%" }}>
                <Table bordered hover responsive>
                    <thead>
                        <tr className="table-info">
                            <th>DIV</th>
                            <th>STATE</th>
                            <th>MRCODE</th>
                            <th>MRNAME</th>
                            <th>HQ</th>
                            <th>DESG</th>
                            <th>DRNAME</th>
                            <th>DRSPECIALITY</th>
                            <th>DRCITY</th>
                            <th>DRscCODE</th>
                            <th>DRcategoryUse</th>
                            <th>DRfilterUse</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DIV}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.STATE}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.MRCODE}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.MRNAME}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.HQ}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DESG}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRNAME}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRSPECIALITY}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRCITY}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRscCODE}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRcategoryUse}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRfilterUse}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Layout>
    );
};

export default DetailReport;
