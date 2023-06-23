import { styled } from 'styled-components'


export const NavbarContainer = styled.div`
    @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        background-color: #161d2f;
        justify-content: center;
    }
`
export const InternoNavbarContainer = styled.div`
    @media (max-width: 600px) {
        width: 90%;
        height: 80%;
        display: flex;
        align-items: center;
        background-color: #161d2f;
    }
`
export const ContenedorIcono = styled.div`
    @media (max-width: 600px) { 
        width: 50px;
        height: 100%;
        display: flex;
        background-color: #161d2f;
        justify-content: center;
        align-items: center;
        border: solid 1px red;
    } 
`
export const ContenedorNav = styled.div`
    @media (max-width: 600px) { 
        width: 350px;
        height: 100%;
        display: flex;
        background-color: #161d2f;
        border: solid 1px red;
    } 
`
export const ContenedorInternoNav = styled.div`
@media (max-width: 600px) { 
    border: solid 1px red;
} 
`

export const ContenedorUser= styled.div`
    @media (max-width: 600px) { 
        width: 50px;
        height: 100%;
        border: solid 1px red;
        display: flex;
        background-color: #161d2f;
    }
`

 