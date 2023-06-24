import React from 'react';
import { IconContainer, NavContainer, NavbarInnerContainer, NavbarContainer, UserContainer, NavInnerContainer, BorderAllContainer, MoviesIconContainer, BorderAllInterno, BorderAllUp, BorderAllDown  } from './Navbar.styled';
import ClapperBoard from '../ClapperBoard/ClapperBoard';
import Square from '../Square/Square';
import Film from '../Film/Film';



export default function Navbar() {

  
  return (
    
    <NavbarContainer>
      <NavbarInnerContainer>
        <IconContainer>
          <ClapperBoard/>
        </IconContainer>
        <NavContainer>
          <NavInnerContainer>
            <BorderAllContainer>
              <BorderAllInterno>
                <BorderAllUp>
                  <Square/><Square/>
                </BorderAllUp>
                <BorderAllDown>
                  <Square/><Square/>
                </BorderAllDown>
              </BorderAllInterno>
            </BorderAllContainer>
            <MoviesIconContainer>
              <Film/>
            </MoviesIconContainer>
          </NavInnerContainer>
        </NavContainer>
        <UserContainer>

        </UserContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
}


