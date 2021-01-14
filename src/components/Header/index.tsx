import React from "react";
import backIcon from "../../assets/images/icons/back.svg";

import { Link } from "react-router-dom";

import "./styles.css";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <div>
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar para home" />
          </Link>
          
        </div>
        <div className="header-content">
          <strong>{props.title}</strong>
          {props.description && <p>{props.description}</p>}
          
          {props.children}          
        </div>
      </header>
    </div>
  );
};
export default PageHeader;