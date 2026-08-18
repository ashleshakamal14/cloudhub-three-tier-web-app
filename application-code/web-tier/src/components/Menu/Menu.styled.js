import styled from "styled-components";

export const StyledMenu = styled.nav`
  position: fixed;

  top: 0;
  left: 0;

  width: 290px;
  height: 100vh;

  z-index: 1000;

  box-sizing: border-box;

  padding: 28px 20px;

  background: #0b111c;

  border-right: 1px solid #1c293b;

  transform: ${({ open }) =>
    open ? "translateX(0)" : "translateX(-100%)"};

  transition: transform 0.3s ease;

  color: #ffffff;

  .sidebar-content {
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  .brand {
    display: flex;
    align-items: center;

    gap: 12px;

    padding: 5px 8px 26px;

    border-bottom: 1px solid #1c293b;
  }

  .brand-icon {
    width: 43px;
    height: 43px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 12px;

    background: #102b45;

    color: #7dd3fc;

    font-size: 22px;
  }

  .brand strong {
    display: block;

    font-size: 18px;
  }

  .brand span {
    display: block;

    margin-top: 4px;

    color: #6f7e92;

    font-size: 10px;
  }

  .menu-section {
    margin-top: 30px;
  }

  .menu-title {
    margin: 0 10px 12px;

    color: #64748b;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 1.7px;
  }

  ul {
    margin: 0;
    padding: 0;

    list-style: none;
  }

  li {
    margin-bottom: 5px;
  }

  a {
    display: flex;
    align-items: center;

    gap: 14px;

    padding: 13px 14px;

    border-radius: 10px;

    color: #9aa8bb;

    font-size: 14px;

    text-decoration: none;

    transition: all 0.2s ease;
  }

  a span {
    width: 20px;

    text-align: center;

    color: #66768b;

    font-size: 16px;
  }

  a:hover {
    background: #142033;

    color: #ffffff;

    transform: translateX(3px);
  }

  a:hover span {
    color: #7dd3fc;
  }

  .sidebar-footer {
    margin-top: auto;

    display: flex;
    align-items: center;

    gap: 10px;

    padding: 14px;

    background: #101a29;

    border: 1px solid #1d2b3f;

    border-radius: 12px;
  }

  .online-dot {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: #22c55e;

    flex-shrink: 0;
  }

  .sidebar-footer strong {
    display: block;

    color: #dbe4f0;

    font-size: 11px;
  }

  .sidebar-footer small {
    display: block;

    margin-top: 3px;

    color: #68778c;

    font-size: 10px;
  }

  @media (max-width: 768px) {
    width: 275px;
  }
`;