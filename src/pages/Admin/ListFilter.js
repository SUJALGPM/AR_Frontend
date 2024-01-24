import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Table } from 'reactstrap';

const ListFilter = () => {

    //Store the fetch data form APIs....
    const [data, setData] = useState([]);

    //Handle the APIs...
    const fetchData = async () => {
        const res = await fetch('https://custom-iztj.onrender.com/api/admin/filterList');
        const jsonData = await res.json();
        setData(jsonData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Layout>
            <div className='backimg_1' style={{ minHeight: "100%" }}>
                <Table bordered hover responsive>
                    <thead>
                        <tr className='table-info'>
                            <th style={{ textAlign: "center" }}>FilterName</th>
                            <th style={{ textAlign: "center" }}>FilterImage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td style={{ padding: "13px", textAlign: "center" }}>{item.filterName}</td>
                                <td style={{ padding: "13px", textAlign: "center", maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.filterUrl}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Layout>
    )
}

export default ListFilter;
