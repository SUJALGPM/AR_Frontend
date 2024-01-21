import React, { useEffect } from 'react';
import Layout from "../../components/Layout.js";

const AddCategory = () => {

    const getAdminId = () => {
        const AdminId = localStorage.getItem('Id');
        console.log(AdminId);
    }

    useEffect(() => {
        getAdminId();
    }, []);

    return (
        <Layout>
            <div className='backimg_1' style={{ minHeight: "100%" }}>
                add category....
            </div>
        </Layout>
    )
}

export default AddCategory;
