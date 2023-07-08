import React from 'react';
import { GralContainer, IconContainer, NavContainer, NavbarInnerContainer, NavbarContainer, UserContainer, NavInnerContainer, BorderAllContainer, MoviesIconContainer, BorderAllInterno, BorderAllUp, BorderAllDown, TVcontainer, BookMarkContainer } from './Navbar.styled';
import ClapperBoard from '../ClapperBoard/ClapperBoard';
import SquareIcon from '../SquareIcon/SquareIcon';
import Film from '../Film/Film';
import BookMark from '../BookMark/BookMark';
import UserIcon from '../UserIcon/UserIcon';
import TVIcon from '../TV/TVIcon';



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
                    <SquareIcon/><SquareIcon/>
                  </BorderAllUp>
                  <BorderAllDown>
                    <SquareIcon/><SquareIcon/>
                  </BorderAllDown>
                </BorderAllInterno>
              </BorderAllContainer>
              <MoviesIconContainer>
                <Film/>
              </MoviesIconContainer>
              <TVcontainer>
                <TVIcon/>
              </TVcontainer>
              <BookMarkContainer>
                <BookMark/>
              </BookMarkContainer>
            </NavInnerContainer>
          </NavContainer>
          <UserContainer>
            <UserIcon/>
          </UserContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
    </GralContainer>
  );
}


