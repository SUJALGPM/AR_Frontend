import React, { useState } from "react";
import { adminMenu } from "./../Data/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { message, Dropdown, Menu } from "antd";
import "./Home/Home/Home.css";
import { Content } from "antd/es/layout/layout";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState(location.pathname);

  //Logout Fucntionalities....
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/");
  };

  //Selected menu item effect...
  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  //Username....
  const nameFetch = () => {
    return localStorage.getItem('adminName');
  }

  const nameD = nameFetch();

  //Sidebar menu data with route....
  const SidebarMenu = adminMenu;

  // Set the desired width for the sidebar
  const sidebarWidth = "270px";

  // Set the desired width for the content
  const contentWidth = "calc(100% - 3px)";

  // Dropdown menu for "Detailed Report"
  const detailedReportMenu = (
    <Menu selectedKeys={[selectedKey]} mode="horizontal" onClick={handleMenuClick}>
      <Menu.Item key="/detailReport" style={{ height: "50px", border: selectedKey === '/detailReport' ? '2px solid black' : '1px solid black' }}>
        <Link to="/detailReport" style={{ color: "black", textDecoration: 'none', fontWeight: "bold", fontSize: '17px' }}>Detail Report</Link>
      </Menu.Item>
      <Menu.Item key="/doctorReport" style={{ height: "50px", border: selectedKey === '/doctorReport' ? '2px solid black' : '1px solid black', marginTop: "3px" }}>
        <Link to="/doctorReport" style={{ color: "black", textDecoration: 'none', fontWeight: "bold", fontSize: '17px' }}> Dr Usage Report</Link>
      </Menu.Item>
    </Menu>
  );

  // Dropdown menu for "Category Manage"
  const categoryMenu = (
    <Menu selectedKeys={[selectedKey]} mode="horizontal" onClick={handleMenuClick}>
      <Menu.Item key="/addCategory" style={{ height: "50px", border: selectedKey === '/addCategory' ? '2px solid black' : '1px solid black' }}>
        <Link to="/addCategory" style={{ color: "black", textDecoration: 'none', fontWeight: "bold", fontSize: '17px' }}>Add Category</Link>
      </Menu.Item>
      <Menu.Item key="/categoryList" style={{ height: "50px", border: selectedKey === '/categoryList' ? '2px solid black' : '1px solid black', marginTop: "3px" }}>
        <Link to="/categoryList" style={{ color: "black", textDecoration: "none", fontWeight: "bold", fontSize: '17px' }}>List Category</Link>
      </Menu.Item>
    </Menu>
  );

  // Dropdown menu for "Filter Manage"
  const filterMenu = (
    <Menu selectedKeys={[selectedKey]} mode="horizontal" onClick={handleMenuClick}>
      <Menu.Item key="/addFilter" style={{ height: "50px", border: selectedKey === '/addFilter' ? '2px solid black' : '1px solid black' }}>
        <Link to="/addFilter" style={{ color: "black", textDecoration: 'none', fontWeight: "bold", fontSize: '17px' }}>Add Filter</Link>
      </Menu.Item>
      <Menu.Item key="/filterList" style={{ height: "50px", border: selectedKey === '/filterList' ? '2px solid black' : '1px solid black', marginTop: "3px" }}>
        <Link to="/filterList" style={{ color: "black", textDecoration: 'none', fontWeight: "bold", fontSize: '17px' }}>List Filter</Link>
      </Menu.Item>
    </Menu>
  );

  // Dropdown menu for "Doctor Manage"
  const doctorMenu = (
    <Menu selectedKeys={[selectedKey]} mode="horizontal" onClick={handleMenuClick}>
      <Menu.Item key="/addDoctor" style={{ height: "50px", border: selectedKey === '/addDoctor' ? '2px solid black' : '1px solid black' }}>
        <Link to="/addDoctor" style={{ color: "black", textDecoration: 'none', fontWeight: "bold", fontSize: '17px' }}>Add Doctor</Link>
      </Menu.Item>
      <Menu.Item key="/doctorList" style={{ height: "50px", border: selectedKey === '/doctorList' ? '2px solid black' : '1px solid black', marginTop: "3px" }}>
        <Link to="/doctorList" style={{ color: "black", textDecoration: 'none', fontWeight: "bold", fontSize: '17px' }}>List Doctor</Link>
      </Menu.Item>
    </Menu>
  );

  // Dropdown menu for "MRs Manage"
  const mrMenu = (
    <Menu selectedKeys={[selectedKey]} mode="horizontal" onClick={handleMenuClick}>
      <Menu.Item key="/addMRs" style={{ height: "50px", border: selectedKey === '/addMRs' ? '2px solid black' : '1px solid black' }}>
        <Link to="/addMRs" style={{ color: "black", textDecoration: 'none', fontWeight: "bold", fontSize: '17px' }}>Add MRs</Link>
      </Menu.Item>
      <Menu.Item key="/listMRs" style={{ height: "50px", border: selectedKey === '/listMRs' ? '2px solid black' : '1px solid black', marginTop: "3px" }}>
        <Link to="/listMRs" style={{ color: "black", textDecoration: 'none', fontWeight: "bold", fontSize: '17px' }}>List MRs</Link>
      </Menu.Item>
    </Menu>
  );

  // Dropdown menu for "Admins Manage"
  const adminManageMenu = (
    <Menu selectedKeys={[selectedKey]} mode="horizontal" onClick={handleMenuClick}>
      <Menu.Item key="/superAdmin" style={{ height: "50px", border: selectedKey === '/superAdmin' ? '2px solid black' : '1px solid black' }}>
        <Link to="/superAdmin" style={{ color: "black", textDecoration: 'none', fontWeight: "bold", fontSize: '17px' }}>Super Admin</Link>
      </Menu.Item>
      <Menu.Item key="/contentAdmin" style={{ height: "50px", border: selectedKey === '/contentAdmin' ? '2px solid black' : '1px solid black' }}>
        <Link to="/contentAdmin" style={{ color: "black", textDecoration: 'none', fontWeight: "bold", fontSize: '17px' }}>Content Admin</Link>
      </Menu.Item>
      <Menu.Item key="/reportAdmin" style={{ height: "50px", border: selectedKey === '/reportAdmin' ? '2px solid black' : '1px solid black' }}>
        <Link to="/reportAdmin" style={{ color: "black", textDecoration: 'none', fontWeight: "bold", fontSize: '17px' }}>Report Admin</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="content-container">
        <div className="main">
          <div className="layout">
            <div className="sidebar" style={{ width: sidebarWidth }}>
              <div className="logo">
                <h6 style={{ color: "black", fontWeight: "bold" }}> ADMIN PANEL</h6>
                <hr />
              </div>
              <div className="menu">
                {SidebarMenu.map((menu) => {
                  const isActive = location.pathname === menu.path;

                  // Check if the current menu item is "Review Reports"
                  if (menu.name === "Review Reports") {
                    return (
                      <Dropdown key={menu.path} overlay={detailedReportMenu} trigger={['click']}>
                        <div className={`menu-item ${isActive && "active"}`}>
                          <i className={menu.icon}></i>
                          <Link to={menu.path}>{menu.name}</Link>
                        </div>
                      </Dropdown>
                    );
                  }

                  // Check if the current menu item is "Manage Category"
                  if (menu.name === "Manage Category") {
                    return (
                      <Dropdown key={menu.path} overlay={categoryMenu} trigger={['click']}>
                        <div className={`menu-item ${isActive && "active"}`}>
                          <i className={menu.icon}></i>
                          <Link to={menu.path}>{menu.name}</Link>
                        </div>
                      </Dropdown>
                    );
                  }

                  // Check if the current menu item is "Manage Filters"
                  if (menu.name === "Manage Filter") {
                    return (
                      <Dropdown key={menu.path} overlay={filterMenu} trigger={['click']}>
                        <div className={`menu-item ${isActive && "active"}`}>
                          <i className={menu.icon}></i>
                          <Link to={menu.path}>{menu.name}</Link>
                        </div>
                      </Dropdown>
                    );
                  }

                  // Check if the current menu item is "Manage Doctor"
                  if (menu.name === "Manage Doctors") {
                    return (
                      <Dropdown key={menu.path} overlay={doctorMenu} trigger={['click']}>
                        <div className={`menu-item ${isActive && "active"}`}>
                          <i className={menu.icon}></i>
                          <Link to={menu.path}>{menu.name}</Link>
                        </div>
                      </Dropdown>
                    );
                  }

                  // Check if the current menu item is "Manage MRs"
                  if (menu.name === "Manage MRs") {
                    return (
                      <Dropdown key={menu.path} overlay={mrMenu} trigger={['click']}>
                        <div className={`menu-item ${isActive && "active"}`}>
                          <i className={menu.icon}></i>
                          <Link to={menu.path}>{menu.name}</Link>
                        </div>
                      </Dropdown>
                    );
                  }

                  // Check if the current menu item is "Manage Admin"
                  if (menu.name === "Manage Admins") {
                    return (
                      <Dropdown key={menu.path} overlay={adminManageMenu} trigger={['click']}>
                        <div className={`menu-item ${isActive && "active"}`}>
                          <i className={menu.icon}></i>
                          <Link to={menu.path}>{menu.name}</Link>
                        </div>
                      </Dropdown>
                    );
                  }


                  return (
                    <div key={menu.path} className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  );
                })}
                <div className={`menu-item `} onClick={handleLogout}>
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <Link to="/login">Logout</Link>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="header">
                <div className="header-content" style={{ cursor: "pointer" }}>
                  {/* Add your header content here */}
                  {/* <h3 style={{ marginLeft: "400px", marginRight: "10px", fontWeight: "bold" }}>
                    {nameD}
                  </h3> */}
                </div>
              </div>
              <Content
                style={{
                  width: contentWidth,
                  height: "600px",
                  overflowX: "auto", // Enable horizontal scrolling
                  border: "1px solid black"
                }}
              >
                {children}
              </Content>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
