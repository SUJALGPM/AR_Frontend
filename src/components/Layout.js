import React from "react";
import { adminMenu } from "./../Data/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Badge, message, Dropdown, Menu } from "antd";
import "./Home/Home/Home.css";
import { Content } from "antd/es/layout/layout";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    message.success("Logout Successfully");
    navigate("/");
  };

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
                  Pharmaceutical project related to admin....
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
