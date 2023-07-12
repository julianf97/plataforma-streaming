import React from 'react';
import { GralContainer, IconContainer, NavContainer, NavbarInnerContainer, NavbarContainer, UserContainer, NavInnerContainer, BorderAllContainer, MoviesIconContainer, BorderAllInterno, BorderAllUp, BorderAllDown, TVcontainer, BookMarkContainer } from './Navbar.styled';
import ClapperBoard from '../ClapperBoard/ClapperBoard';
import SquareIcon from '../SquareIcon/SquareIcon';
import Film from '../Film/Film';
import BookMark from '../BookMark/BookMark';
import UserIcon from '../UserIcon/UserIcon';
import TVIcon from '../TV/TVIcon';
import Link from 'next/link';



export default function Navbar() {
  
  return (
    <GralContainer>
      <NavbarContainer>
        <NavbarInnerContainer>
          <IconContainer>
            {
              <Link href="/">
                <ClapperBoard/>
              </Link>
            }
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
                {
                  <Link href="/movies">
                    <Film/>
                  </Link>
                }
              </MoviesIconContainer>
              <TVcontainer>
                {
                  <Link href="/tvseries">
                    <TVIcon/>
                  </Link>
                }
              </TVcontainer>
              <BookMarkContainer>
                {
                  <Link href="/save">
                    <BookMark/>
                  </Link>
                }
              </BookMarkContainer>
            </NavInnerContainer>
          </NavContainer>
          <UserContainer>
            {
              <Link href="/userprofile">
                <UserIcon/>
              </Link>
            }
          </UserContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
    </GralContainer>
  );
}


