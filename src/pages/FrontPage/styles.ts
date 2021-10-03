import styled from "styled-components";

export const PageContent = styled.div`
width: 100vw !important;
height: 100vh;
@media (min-width: 700px) {
  max-width: 100vw !important;
}
background:linear-gradient(
    45deg,
    var(--color-secundary),
    var(--color-text-base)
);
`;

export const ButtonsContainer = styled.div`
display:grid;
grif-template-columns:2fr 2fr 2fr 2fr;
grid-gap:20px;
justify-content:center;
`;


export const Button = styled.button`
align-self:center;
width:30rem;
height:5rem;
padding:10px;
justify-self:center;
background:linear-gradient(
    -45deg,
    var(--color-text-base),
    var(--color-secundary-darker)
  );
color:#fefefe;
border-radius:50px;
box-shadow10px 2px 5px rgba(75,11,105,1);
`