import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Table } from 'reactstrap';

const ListMRs = () => {

    //Store fetch data from APIs...
    const [data,setData]=useState([]);

    //Handle the GET API response....
    const fetchData = async()=>{
        try{
            const res = await fetch('https://custom-iztj.onrender.com/api/mr/mrList');
            if(!res){
                console.log('Failed to load the mrList..!!!');
            }else{
                const jsonData = await res.json();
                setData(jsonData);
            }
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <Layout>
            <div className='backimg_1' style={{ minHeight: "100%" }}>
                <Table hover bordered responsive>
                    <thead>
                        <tr className="table-info">
                            <th style={{textAlign:"center"}}>MRID</th>
                            <th style={{textAlign:"center"}}>MRNAME</th>
                            <th style={{textAlign:"center"}}>MRDIV</th>
                            <th style={{textAlign:"center"}}>MREMAIL</th>
                            <th style={{textAlign:"center"}}>MRPASSWORD</th>
                            <th style={{textAlign:"center"}}>MRSTATE</th>
                            <th style={{textAlign:"center"}}>MRDOJ</th>
                            <th style={{textAlign:"center"}}>MRHQ</th>
                            <th style={{textAlign:"center"}}>MRDESG</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,index)=>(
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
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

        </Layout>
    )
}

export default ListMRs;
