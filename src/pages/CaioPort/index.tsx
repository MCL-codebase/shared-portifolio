import React from "react";
import * as Styled from "./styles"
import PageHeader from "../../assets/components/Header";

const CaioPort: React.FC = ()=>{
    return(
        <Styled.PageContent>
        <PageHeader
        title="Página Principal"
        />
        <Styled.Main>
        
            <h1>
            Página do Caio
            </h1>

            
        </Styled.Main>
        </Styled.PageContent>
    )
}

export default CaioPort;