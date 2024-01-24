import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Table } from 'reactstrap';

const DoctorList = () => {

    //Store the API fetch data...
    const [data, setData] = useState([]);

    //Handle the Host GET APIS...
    const fetchData = async () => {
        const res = await fetch('https://custom-iztj.onrender.com/api/doctor/getAllDoctors');
        if (res) {
            const jsonData = await res.json();
            setData(jsonData);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <Layout>
            <div className='backimg_1' style={{ minHeight: "100%" }}>
                <Table hover bordered responsive>
                    <thead>
                        <tr className='table-info'>
                            <th>DRNAME</th>
                            <th>DRscCode</th>
                            <th>DRLOCALITY</th>
                            <th>DRCITY</th>
                            <th>DRSPECIALITY</th>
                            <th>DRSTATE</th>
                            <th>useDrCategory</th>
                            <th>useDrFilter</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.DRNAME}</td>
                                <td>{item.DRscCode}</td>
                                <td>{item.DRLOCALITY}</td>
                                <td>{item.DRCITY}</td>
                                <td>{item.DRSPECIALITY}</td>
                                <td>{item.DRSTATE}</td>
                                <td>{item.useDrCategory}</td>
                                <td>{item.useDrFilter}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Layout>
    )
}

export default DoctorList;
