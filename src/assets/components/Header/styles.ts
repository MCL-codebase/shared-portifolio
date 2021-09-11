import styled from "styled-components";

export const Header = styled.header`
  display:flex;
  position:sticky;
  top:2rem;
  margin:0 auto;
  padding:0rem 5rem 0rem 5rem;
  align-items:center;
  width:90%;
  border-radius:10px;
  background:#000;
  @media (min-width: 700px) {
    height: 12rem;
  }
`;

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 0.5rem 0;
  @media (min-width: 700px) {
    max-width: 1100px;
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  display:flex;
  margin: 0 auto;
  margin: 3.2rem auto;
`;
export const TitleContainer = styled.div`
float:left;
color:var(--color-line-in-white);
font-size:2rem;
font:
`
export const NavContainer = styled.nav`
background:var(--color-secundary-lighter);
float:right;
justify-self:flex-end;
border-radius:2px;
a{
  text-decoration: none;
  color: #fff;
  padding: 0 15px 0 15px;
  transition: background 0.5s, color 0.25s;
}
`
export const Title = styled.h1`

`