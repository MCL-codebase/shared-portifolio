import React from "react";
import {Link} from "react-router-dom";
import PageHeader from "../../assets/components/Header";
import * as Styled from "./styles"

const FrontPage: React.FC = ()=>{
    return(
        <Styled.PageContent>
        <PageHeader
        title="Página Principal"
        />
        <Styled.Main>
            <h1>
                Bem vindo
            </h1>
            <Styled.ButtonsContainer>

            <Link to="/caio">
            <Styled.Button >PÁGINA DO CAIO</Styled.Button>
            </Link>
            
            <Link to="/magno">
            <Styled.Button >PÁGINA DO MAGNO</Styled.Button>
            </Link>
            
            <Link to="/miguel">
            <Styled.Button >PÁGINA DO MIGUEL</Styled.Button>
            </Link>
            
            <Link to="/felipe">
            <Styled.Button >PÁGINA DO FELIPE</Styled.Button>
            </Link>
            
            <Link to="/johur">
            <Styled.Button >PÁGINA DO JOHUR</Styled.Button>
            </Link>
            
            </Styled.ButtonsContainer>

        </Styled.Main>
        </Styled.PageContent>
    )
}

export default FrontPage;