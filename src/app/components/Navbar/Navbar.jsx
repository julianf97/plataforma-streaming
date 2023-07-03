import React from 'react';
import { GralContainer, IconContainer, NavContainer, NavbarInnerContainer, NavbarContainer, UserContainer, NavInnerContainer, BorderAllContainer, MoviesIconContainer, BorderAllInterno, BorderAllUp, BorderAllDown, TVcontainer, BookMarkContainer } from './Navbar.styled';
import ClapperBoard from '../ClapperBoard/ClapperBoard';
import Square from '../Square/Square';
import Film from '../Film/Film';
import TV from '../TV/TV'
import BookMark from '../BookMark/BookMark';
import IconUser from '../IconUser/IconUser';



export default function Navbar() {

  
  return (
    <GralContainer>
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
              <TVcontainer>
                <TV/>
              </TVcontainer>
              <BookMarkContainer>
                <BookMark/>
              </BookMarkContainer>
            </NavInnerContainer>
          </NavContainer>
          <UserContainer>
            <IconUser/>
          </UserContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
    </GralContainer >
  );
}


