import React from "react";
import { Link } from "react-router-dom";

import * as Styled from "./styles";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";
import backarrow from "../../images/backarrow.svg"
import pageicon from "../../images/pageicon.jpg";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <Styled.Header>
      <Styled.TopBarContainer>
        <Link to="/">
          <img src={backarrow} alt="Ícone de voltar" />
        </Link>
        <img src={pageicon} alt="Proffy" />
      </Styled.TopBarContainer>

      <Styled.HeaderContent>
        <strong>{props.title}</strong>
      </Styled.HeaderContent>
    </Styled.Header>
  );
}


export default PageHeader;