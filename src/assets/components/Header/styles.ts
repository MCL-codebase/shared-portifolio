import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display:flex;
  position:sticky;
  margin:0 auto;
  padding:0rem 5rem 0rem 5rem;
  align-items:center;
  width:90%;
  .menu-btn{
    position:absolute;
    right:1rem;
    top:3rem;
    display:flex;
    align-items:center;
    justify-content:center;
    width:5rem;
    height:5rem;
    cursor:pointer;
    transition:all .5s ease-in-out;
  }
  .menu-btn_brg{
    width:3rem;
    height:5px;
    background:#fff;
    border-radius:10px;
    box-shadow: 0 2px 5 px rgba(75,11,105,.2);
    transition:all .5s ease-in-out;
  }
  .menu-btn_brg::before,
  .menu-btn_brg::after{
    content:'';
    position:absolute;
    width:3rem;
    height:5px;
    background:#fff;
    border-radius:10px;
    box-shadow: 0 2px 5 px rgba(75,11,105,.2);
    transition:all .5s ease-in-out;
  }
  .menu-btn_brg::before{
    transform: translateY(-12px);
  }
  .menu-btn_brg::after{
    transform: translateY(12px);
  }
  // animation
  .menu-btn.open .menu-btn_brg{
    transform:translate(0);
    background:transparent;
    box-shadow:none;
  }
  .menu-btn.open .menu-btn_brg::before{
    transform:rotate(45deg) translate(1px,-1px);
  }
  
  .menu-btn.open .menu-btn_brg::after{
    transform:rotate(-45deg) translate(1px,1px);
  }
  border-radius:10px;
  background:#000;
  height:12rem;
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  margin: 3.2rem auto;

`;

export const TitleContainer = styled.div`
color:var(--color-line-in-white);
font-size:2rem;
padding-right:30rem;
position:relative;
font-family: 'Poppins',sans-serif;
`

export const Slink = styled(Link)`
text-decoration: none;
color: #fff;
font-weight:400;
align-items:center;
justify-self:center;
position:relative;
display:inline-block;
padding 12px 16px;
margin:10px 0;
text-transform:uppercase;
font-size:18px;
font-family:'Poppins',sans-serif;
letter-spacing:2px;
border-radius:5px;
background: linear-gradient(90deg,#111,#333); 
`;

export const NavContainer = styled.nav`
background:var(--color-secundary-lighter);
justify-self:flex-end;
border-radius:2px;
margin: 0 2rem 0 2rem;
padding: 5px 15px 5px 15px;
`

export const Menu = styled.div`
`;