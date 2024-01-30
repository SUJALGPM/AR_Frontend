import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Table } from 'reactstrap';

const DoctorReport = () => {

    //Store fetch data in state...
    const [data, setData] = useState([]);

    //Handle GET APIs for table list....
    const fetchData = async () => {
        const res = await fetch('https://custom-iztj.onrender.com/api/doctor/listStaticUsage');
        const jsonData = await res.json();
        setData(jsonData);
        console.log("usaage data", data);
    }

    //Render first time to get Record...
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Layout>
            <div className='backimg_1' style={{ minHeight: "100%" }}>
                <Table bordered hover responsive>
                    <thead>
                        <tr className='table-info'>
                            <th style={{ textAlign: "center" }}>MRCODE</th>
                            <th style={{ textAlign: "center" }}>MRNAME</th>
                            <th style={{ textAlign: "center" }}>DIV</th>
                            <th style={{ textAlign: "center" }}>STATE</th>
                            <th style={{ textAlign: "center" }}>HQ</th>
                            <th style={{ textAlign: "center" }}>DESG</th>
                            <th style={{ textAlign: "center" }}>DRNAME</th>
                            <th style={{ textAlign: "center" }}>DRSPECIALITY</th>
                            <th style={{ textAlign: "center" }}>DRcategoryUse</th>
                            <th style={{ textAlign: "center" }}>DRfilterUse</th>
                            <th style={{ textAlign: "center" }}>DRCITY</th>
                            <th style={{ textAlign: "center" }}>DRSTATE</th>
                            <th style={{ textAlign: "center" }}>DRSTATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.MRCODE}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.MRNAME}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DIV}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.STATE}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.HQ}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DESG}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRNAME}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRSPECIALITY}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRcategoryUse}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRfilterUse}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRCITY}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRSTATE}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRstatus}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Layout>
    )

}

export default DoctorReport;
