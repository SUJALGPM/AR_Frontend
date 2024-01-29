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
                            <th style={{ textAlign: "center" }}>DOCTORNAME</th>
                            <th style={{ textAlign: "center" }}>DRCATEGORYNAME</th>
                            <th style={{ textAlign: "center" }}>DRFILTERNAME</th>
                            <th style={{ textAlign: "center" }}>DRSPECIALITY</th>
                            <th style={{ textAlign: "center" }}>DRCITY</th>
                            <th style={{ textAlign: "center" }}>DRSTATE</th>
                            <th style={{ textAlign: "center" }}>DRSTATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRNAME}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRCATEGORYNAME}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DRFILTERNAME}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DOCTORSPEC}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DOCTORCITY}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DOCTORSTATE}</td>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.DOCTORSTATUS}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Layout>
    )

}

export default DoctorReport;
