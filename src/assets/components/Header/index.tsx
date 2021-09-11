import React from "react";
import { Link } from "react-router-dom";

import * as Styled from "./styles";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <Styled.Header>
      <Styled.TitleContainer>
        {props.title}
      </Styled.TitleContainer>
      <Styled.NavContainer>
       <a> <Link to="/Caio"> Caio</Link> </a>
      </Styled.NavContainer>
    </Styled.Header>
  );
}


export default PageHeader;