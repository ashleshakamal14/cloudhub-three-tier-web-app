import React from "react";
import { bool, func } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";

const Menu = ({ open, setOpen, ...props }) => {
  const tabIndex = open ? 0 : -1;

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <StyledMenu
      open={open}
      aria-hidden={!open}
      {...props}
    >
      <div className="sidebar-content">

        <div className="brand">
          <div className="brand-icon">☁</div>

          <div>
            <strong>CloudHub</strong>
            <span>AWS 3-Tier Application</span>
          </div>
        </div>

        <div className="menu-section">
          <p className="menu-title">APPLICATION</p>

          <nav>
            <ul>

              <li>
                <Link
                  to="/"
                  tabIndex={tabIndex}
                  onClick={closeMenu}
                >
                  <span>▣</span>
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/architecture"
                  tabIndex={tabIndex}
                  onClick={closeMenu}
                >
                  <span>◈</span>
                  Architecture
                </Link>
              </li>

              <li>
                <Link
                  to="/db"
                  tabIndex={tabIndex}
                  onClick={closeMenu}
                >
                  <span>▤</span>
                  Transactions
                </Link>
              </li>

            </ul>
          </nav>
        </div>

        <div className="menu-section">
          <p className="menu-title">PROJECT</p>

          <nav>
            <ul>
              <li>
                <Link
                  to="/about"
                  tabIndex={tabIndex}
                  onClick={closeMenu}
                >
                  <span>ⓘ</span>
                  About Project
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="online-dot"></div>

          <div>
            <strong>Local Environment</strong>
            <small>React + Node.js</small>
          </div>
        </div>

      </div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Menu;