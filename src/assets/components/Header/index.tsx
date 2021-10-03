import React from "react";

import * as Styled from "./styles";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = true;
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
    </Styled.Header>
  );
}


export default PageHeader;