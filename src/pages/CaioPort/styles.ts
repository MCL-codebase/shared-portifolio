import styled from "styled-components";


export const Main = styled.div`
background: #BABCBBe3;
  width: 100%;
  max-width: 100rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem !important;
  padding: 1rem;
  color:var(--color-title-in-primary);
  overflow: hidden;
`
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