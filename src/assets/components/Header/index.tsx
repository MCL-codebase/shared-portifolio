import React from "react";

import * as Styled from "./styles";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;
  menuBtn?.addEventListener('click',() =>{
    if(!menuOpen){
      menuBtn.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  })

  return (
    <Styled.Header>
      <Styled.TitleContainer>
        {props.title}
      </Styled.TitleContainer>
      <div className="menu-btn">
        <div className="menu-btn_brg"></div>
      </div>
{/* 
      <Styled.Slink to="/Caio">
       Caio
      </Styled.Slink>
      
      <Styled.Slink to="/Magno">
       Magno
      </Styled.Slink>

      <Styled.Slink to="/Miguel">
       Miguel
      </Styled.Slink>

      <Styled.Slink to="/Felipe">
       Felipe
      </Styled.Slink>
       */}
    </Styled.Header>
  );
}


export default PageHeader;