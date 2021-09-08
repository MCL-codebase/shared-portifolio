import React from "react";
import {Link} from "react-router-dom";
import * as Styled from "./styles"

const FrontPage: React.FC = ()=>{
    return(
        <Styled.Main>
            <h1>
                Bem vindo
            </h1>
            
            <Link to="/caio">
            <Styled.Button >PÁGINA DO CAIO</Styled.Button>
            </Link>

        </Styled.Main>
    )
}

export default FrontPage;