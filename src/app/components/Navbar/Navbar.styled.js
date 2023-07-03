import { styled } from 'styled-components'

export const GralContainer = styled.div`
    // Ipad
    @media only screen and (min-width:601px) and (max-width:1025px){ 
        display: flex;
        justify-content: center;
        width: 100%;
    }
`

export const NavbarContainer = styled.div`
    // Mobile
    @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        background-color: #161d2f;
        justify-content: center;
    }
    // Ipad
    @media only screen and (min-width:601px) and (max-width:1025px){ 
        flex-direction: column;
        width: 95%;
        height: 50px;
        display: flex;
        align-items: center;
        background-color: #161d2f;
        justify-content: center;
        margin-top: 15px;
        border-radius: 8px;
    }
`
export const NavbarInnerContainer = styled.div`
    // Mobile
    @media (max-width: 600px) {
        width: 90%;
        height: 80%;
        display: flex;
        align-items: center;
        background-color: #161d2f;
    }
    // Ipad
    @media only screen and (min-width:601px) and (max-width:1025px){ 
        width: 90%;
        height: 80%;
        display: flex;
        align-items: center;
        background-color: #161d2f;


    }
`
export const IconContainer = styled.div`
    // Mobile
    @media (max-width: 600px) { 
        width: 50px;
        height: 100%;
        display: flex;
        background-color: #161d2f;
        justify-content: center;
        align-items: center;
    } 
    // Ipad
    @media only screen and (min-width:601px) and (max-width:1025px){ 
        width: 50px;
        height: 100%;
        display: flex;
        background-color: #161d2f;
        justify-content: center;
        align-items: center;
    }
`
export const NavContainer = styled.div`
    // Mobile
    @media (max-width: 600px) { 
        width: 350px;
        height: 100%;
        display: flex;
        background-color: #161d2f;
        justify-content: center;
        align-items: center;
    }
    // Ipad
    @media only screen and (min-width:601px) and (max-width:1025px){ 
        width: 700px;
        height: 100%;
        display: flex;
        background-color: #161d2f;
        justify-content: center;
        align-items: center;

    } 
`
export const NavInnerContainer = styled.div`
    // Mobile
    @media (max-width: 600px) { 
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        background-color: #161d2f;
        justify-content: center;
    } 
    // Ipad
    @media only screen and (min-width:601px) and (max-width:1025px){ 
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        background-color: #161d2f;
        justify-content: center;

    }
`

export const UserContainer = styled.div`
    // Mobile
    @media (max-width: 600px) { 
        width: 50px;
        height: 100%;
        display: flex;
        background-color: #161d2f;
        justify-content: center;
        align-items: center;
    }
    // Ipad
    @media only screen and (min-width:601px) and (max-width:1025px){ 
        width: 50px;
        height: 100%;
        display: flex;
        background-color: #161d2f;
        justify-content: center;
        align-items: center;

    }
`

export const BorderAllContainer = styled.div `
    // Mobile
    @media (max-width: 600px) { 
        width: 25%;
        height: 80%;
        display: flex;
        background-color: #161d2f;
        justify-content: center;
        align-items: center;
        margin-left: -6px;
    }
    // Ipad
    @media only screen and (min-width:601px) and (max-width:1025px){ 
        width: 12%;
        height: 80%;
        display: flex;
        background-color: #161d2f;
        margin-left: -6px;
        justify-content: center;
        align-items: center;

    }
`
export const BorderAllInterno = styled.div `
    // Mobile
    @media (max-width: 600px) { 
        width: 70%;
        height: 70%;
        display: flex;
        background-color: #161d2f;
        flex-wrap: wrap;
        margin-top: 6px;
    }
    // Ipad
    @media only screen and (min-width:601px) and (max-width:1025px){ 
        width: 70%;
        height: 70%;
        display: flex;
        background-color: #161d2f;
        flex-wrap: wrap;
        margin-top: 6px;

    }
`

export const BorderAllUp = styled.div `
    // Mobile
    @media (max-width: 600px) { 
        width: 110%;
        height: 55%;
        display: flex;
        background-color: #161d2f;
        margin-top: 0px;
    }
    // Ipad
    @media only screen and (min-width:601px) and (max-width:1025px){ 
        width: 110%;
        height: 55%;
        display: flex;
        background-color: #161d2f;
        margin-top: 0px;

    }
`
export const BorderAllDown = styled.div `
    // Mobile
    @media (max-width: 600px) { 
        width: 100%;
        height: 55%;
        display: flex;
        background-color: #161d2f;
        margin-top: -3px;
    }
    // Ipad
    @media only screen and (min-width:601px) and (max-width:1025px){ 
        width: 100%;
        height: 55%;
        display: flex;
        background-color: #161d2f;
        margin-top: -3px;


    }
`
export const MoviesIconContainer = styled.div `
    // Mobile
    @media (max-width: 600px) { 
        width: 15%;
        height: 50%;
        display: flex;
        background-color: #161d2f;
        justify-content: center;
        align-items: center;
        margin-top: 1px;
        margin-left: 1px;
    }
    // Ipad
    @media only screen and (min-width:601px) and (max-width:1025px){ 
        width: 15%;
        height: 50%;
        display: flex;
        background-color: #161d2f;
        justify-content: center;
        align-items: center;
        margin-top: 1px;
        margin-left: 1px;

    } 
`
export const TVcontainer = styled.div `
    // Mobile
    @media (max-width: 600px) { 
        width: 20px;
        height: 50%;
        display: flex;
        background-color: #161d2f;
        justify-content: center;
        align-items: center;
        margin-top: 1px;
        margin-left: 15px;
    }
    // Ipad
    @media only screen and (min-width:601px) and (max-width:1025px){ 
        width: 20px;
        height: 50%;
        display: flex;
        background-color: #161d2f;
        justify-content: center;
        align-items: center;
        margin-top: 1px;
        margin-left: 15px;

    } 
`
export const BookMarkContainer = styled.div `
    // Mobile
    @media (max-width: 600px) { 
        width: 20px;
        height: 50%;
        display: flex;
        background-color: #161d2f;
        justify-content: center;
        align-items: center;
        margin-top: 1px;
        margin-left: 12px;
    }
    // Ipad
    @media only screen and (min-width:601px) and (max-width:1025px){ 
        width: 20px;
        height: 50%;
        display: flex;
        background-color: #161d2f;
        justify-content: center;
        align-items: center;
        margin-top: 1px;
        margin-left: 25px;

    }   
`


 
 