import styled from 'styled-components';
import Image from 'next/image';

export const MovieContainer = styled.article`
  width: 192px;
`;

export const MovieHeader = styled.section`
  display: flex;
  border-radius: 16px;
`;

export const MovieImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

export const MovieInfo = styled.section`
  display: flex;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 8px;
  color: #7A7C86;
`;

export const MovieInfoTypography = styled.p`
  all: unset;
  margin-top: 4px;
  color: #ffffff9a;
`;

export const MovieTitle = styled.h1`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 11px;
  font-weight: 600px;
  margin: 0px;
  color: #fff;
`;
