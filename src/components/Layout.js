import React from "react";
import { adminMenu } from "./../Data/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Badge, message, Dropdown, Menu } from "antd";
import "./Home/Home/Home.css";
import { Content } from "antd/es/layout/layout";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  //Logout Fucntionalities....
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/");
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
    <Menu>
      <Menu.Item key="/detailReport" style={{ backgroundColor: "#87CEFA", color: "#fff" }}>
        <Link to="/detailReport" style={{ color: "#000", textDecoration: 'none' }}>Detail Report</Link>
      </Menu.Item>
      <Menu.Item key="/doctorReport" style={{ backgroundColor: "yellow", color: "#fff" }}>
        <Link to="/doctorReport" style={{ color: "#000", textDecoration: "none" }}>Doctor Report</Link>
      </Menu.Item>
    </Menu>
  );

  // Dropdown menu for "Category Manage"
  const categoryMenu = (
    <Menu>
      <Menu.Item key="/addCategory" style={{ backgroundColor: "#87CEFA", color: "#fff" }}>
        <Link to="/addCategory" style={{ color: "#000", textDecoration: 'none' }}>Add Category</Link>
      </Menu.Item>
      <Menu.Item key="/categoryList" style={{ backgroundColor: "yellow", color: "#fff" }}>
        <Link to="/categoryList" style={{ color: "#000", textDecoration: "none" }}>List Category</Link>
      </Menu.Item>
    </Menu>
  );

  // Dropdown menu for "Filter Manage"
  const filterMenu = (
    <Menu>
      <Menu.Item key="/addFilter" style={{ backgroundColor: "#87CEFA", color: "#fff" }}>
        <Link to="/addFilter" style={{ color: "#000", textDecoration: 'none' }}>Add Filter</Link>
      </Menu.Item>
      <Menu.Item key="/filterList" style={{ backgroundColor: "yellow", color: "#fff" }}>
        <Link to="/filterList" style={{ color: "#000", textDecoration: "none" }}>List Filter</Link>
      </Menu.Item>
    </Menu>
  );

  // Dropdown menu for "Doctor Manage"
  const doctorMenu = (
    <Menu>
      <Menu.Item key="/addDoctor" style={{ backgroundColor: "#87CEFA", color: "#fff" }}>
        <Link to="/addDoctor" style={{ color: "#000", textDecoration: 'none' }}>Add Doctor</Link>
      </Menu.Item>
      <Menu.Item key="/doctorList" style={{ backgroundColor: "yellow", color: "#fff" }}>
        <Link to="/doctorList" style={{ color: "#000", textDecoration: "none" }}>List Doctor</Link>
      </Menu.Item>
    </Menu>
  );

  // Dropdown menu for "MRs Manage"
  const mrMenu = (
    <Menu>
      <Menu.Item key="/addMRs" style={{ backgroundColor: "#87CEFA", color: "#fff" }}>
        <Link to="/addMRs" style={{ color: "#000", textDecoration: 'none' }}>Add MRs</Link>
      </Menu.Item>
      <Menu.Item key="/listMRs" style={{ backgroundColor: "yellow", color: "#fff" }}>
        <Link to="/listMRs" style={{ color: "#000", textDecoration: "none" }}>List MRs</Link>
      </Menu.Item>
    </Menu>
  );

  // Dropdown menu for "Admins Manage"
  const adminManageMenu = (
    <Menu>
      <Menu.Item key="/superAdmin" style={{ backgroundColor: "#87CEFA", color: "#fff" }}>
        <Link to="/superAdmin" style={{ color: "#000", textDecoration: 'none' }}>Super Admin</Link>
      </Menu.Item>
      <Menu.Item key="/contentAdmin" style={{ backgroundColor: "yellow", color: "#fff" }}>
        <Link to="/contentAdmin" style={{ color: "#000", textDecoration: "none" }}>Content Admin</Link>
      </Menu.Item>
      <Menu.Item key="/reportAdmin" style={{ backgroundColor: "violet", color: "#fff" }}>
        <Link to="/reportAdmin" style={{ color: "#000", textDecoration: "none" }}>Report Admin</Link>
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
                <h6 className="text-light">Admin Panel</h6>
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
                          {menu.name}
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
                          {menu.name}
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
                          {menu.name}
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
                          {menu.name}
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
                          {menu.name}
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
                          {menu.name}
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
                  <h4>
                    Pharmaceutical project related to admin....
                  </h4>
                  <h3 style={{ marginLeft: "400px", marginRight: "10px", fontWeight: "bold" }}>
                    {nameD}
                  </h3>
                </div>
              </div>
              <Content
                style={{
                  width: contentWidth,
                  height: "600px",
                  overflowX: "auto", // Enable horizontal scrolling
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
